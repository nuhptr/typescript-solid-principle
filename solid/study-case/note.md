# Study Case: Hierarki Sistem Kendaraan

Folder studi kasus ini disusun mengikuti hubungan pewarisan, bukan sekadar
jenis komponen.

## Hierarki pewarisan

```text
Vehicle
└── Car

EngineInterface
├── PetrolEngine
└── ElectricEngine

StorageInterface
├── Tank
└── Battery
```

- [`vehicle/vehicle.ts`](./vehicle/vehicle.ts) mendefinisikan kontrak dasar
  kendaraan; [`vehicle/car.ts`](./vehicle/car.ts) mengimplementasikan kontrak
  tersebut.
- [`engine-interface/engine-interface.ts`](./engine-interface/engine-interface.ts)
  menetapkan operasi `move()`. [`PetrolEngine`](./engine-interface/petrol-engine/petrol-engine.ts)
  dan [`ElectricEngine`](./engine-interface/electric-engine/electric-engine.ts)
  menyediakan implementasi yang berbeda.
- [`storage-interface/storage-interface.ts`](./storage-interface/storage-interface.ts)
  menetapkan operasi `fill()` dan `getSource()`. [`Tank`](./storage-interface/tank/tank.ts)
  dan [`Battery`](./storage-interface/battery/battery.ts) mengimplementasikannya.

## Komponen pendukung pada tiap cabang

### Cabang `PetrolEngine`

Komponen pendukung mesin bensin ditempatkan bersama implementasinya di
[`engine-interface/petrol-engine/`](./engine-interface/petrol-engine/):

- `OilPipe` menyediakan `Oil`.
- `Oil` menghasilkan `Energy`.
- `Energy` meneruskan tenaga ke `Piston`.

Alur akselerasi: `Car` → `PetrolEngine` → `OilPipe` → `Oil` → `Energy` →
`Piston`. `Tank` tetap berada di bawah cabang `StorageInterface`, karena ia
mengimplementasikan kontrak penyimpanan, bukan kontrak mesin.

### Cabang `ElectricEngine`

Komponen pengendali mesin listrik ditempatkan bersama implementasinya di
[`engine-interface/electric-engine/`](./engine-interface/electric-engine/):

- `SpeedController` mengatur alur akselerasi.
- `BatteryManagementSystem` menyediakan baterai untuk motor.
- `ElectricMotor` menerima baterai sebagai sumber tenaga.

`Battery` dan [`Electrons`](./storage-interface/battery/electrons.ts) berada
di bawah cabang `StorageInterface`, karena keduanya terkait implementasi
penyimpanan energi.

## Perakitan objek

[`index.ts`](./index.ts) adalah composition root. Di sini `Car` dirangkai dengan
`PetrolEngine` dan `Tank`, lalu dengan `ElectricEngine` dan `Battery`. Dengan
begitu, kelas `Car` cukup bergantung pada `EngineInterface` dan
`StorageInterface`, tanpa perlu mengetahui jenis konkret yang digunakan.

## Prinsip SOLID yang tampak

| Prinsip | Hubungan dalam studi kasus |
| --- | --- |
| Single Responsibility | Kelas dasar, implementasi mesin, penyimpanan, dan komponen pendukung memiliki peran terpisah. |
| Open/Closed | Implementasi `EngineInterface` atau `StorageInterface` baru dapat ditambahkan tanpa mengubah `Car`. |
| Liskov Substitution | `PetrolEngine` dan `ElectricEngine` dapat menggantikan `EngineInterface`; `Tank` dan `Battery` dapat menggantikan `StorageInterface`. |
| Interface Segregation | Kontrak mesin dan penyimpanan dipisahkan sesuai perilakunya. |
| Dependency Inversion | `Vehicle` bergantung pada kontrak abstrak, bukan kelas konkret. |

Beberapa operasi, seperti `Car.brake()`, `Piston.move()`, dan
`ElectricMotor.rotate()`, masih berupa placeholder; contoh ini berfokus pada
struktur hierarki dan dependensi.

Lihat [visualisasi aliran data](./visualization.md) untuk diagram alur refill
dan akselerasi pada kedua jenis kendaraan.
