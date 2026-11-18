# Visualisasi Aliran Data

Diagram berikut mengikuti alur yang benar-benar dijalankan oleh
[`index.ts`](./index.ts). Garis putus-putus menandai data atau objek yang
terhubung secara konsep, tetapi belum digunakan oleh implementasi saat ini.

## Mobil bensin

```mermaid
flowchart LR
    subgraph Refill
        OilInput["Oil dari index.ts"]
        CarRefill["Car.refill(source)"]
        TankFill["Tank.fill(source)"]
        TankData["Tank.oil"]
        OilInput --> CarRefill --> TankFill --> TankData
    end

    subgraph Acceleration
        Accelerate["Car.accelerate()"]
        PetrolMove["PetrolEngine.move()"]
        OilPipe["OilPipe.suckOil()"]
        NewOil["Oil baru"]
        Burn["Oil.burn()"]
        Energy["Energy"]
        Push["Energy.push(piston)"]
        PistonMove["Piston.move()"]

        Accelerate --> PetrolMove --> OilPipe --> NewOil --> Burn
        Burn --> Energy --> Push --> PistonMove
    end

    TankData -.->|belum dibaca oleh PetrolEngine| PetrolMove
```

`index.ts` mengirim objek `Oil` ke `Car.refill()`, lalu `Tank` menyimpannya.
Saat akselerasi, `PetrolEngine.move()` meminta `OilPipe` membuat objek `Oil`
baru. Jadi, pada implementasi sekarang, mesin belum menggunakan isi `Tank`.

## Mobil listrik

```mermaid
flowchart LR
    subgraph Refill
        ElectronsInput["Electrons dari index.ts"]
        CarRefill["Car.refill(source)"]
        CarBattery["Battery yang diberikan ke Car"]
        BatteryFill["Battery.fill(source)"]
        ElectronsInput --> CarRefill --> BatteryFill --> CarBattery
    end

    subgraph Acceleration
        Accelerate["Car.accelerate()"]
        ElectricMove["ElectricEngine.move()"]
        Control["SpeedController.control()"]
        BMS["BatteryManagementSystem.getBattery()"]
        NewElectrons["Electrons baru"]
        BMSBattery["Battery baru dari BMS"]
        Motor["ElectricMotor.rotate(battery)"]

        Accelerate --> ElectricMove --> Control --> BMS
        BMS --> NewElectrons --> BMSBattery --> Motor
    end

    CarBattery -.->|tidak diteruskan ke SpeedController| Control
```

`Car.refill()` mengisi `Battery` yang diberikan kepada `Car`. Namun, ketika
akselerasi, `SpeedController` meminta baterai baru dari
`BatteryManagementSystem`; baterai yang sudah diisi melalui `Car` belum
digunakan oleh jalur tersebut.

## Ringkasan aliran

| Aksi | Sumber data | Penerima atau pemroses | Hasil |
| --- | --- | --- | --- |
| Refill mobil bensin | `Oil` dari `index.ts` | `Car` → `Tank` | `Oil` disimpan di `Tank`. |
| Akselerasi mobil bensin | `Oil` baru dari `OilPipe` | `PetrolEngine` → `Energy` → `Piston` | `Piston.move()` dipanggil. |
| Refill mobil listrik | `Electrons` dari `index.ts` | `Car` → `Battery` | Sumber disimpan di `Battery` milik `Car`. |
| Akselerasi mobil listrik | `Battery` baru dari BMS | `ElectricEngine` → `SpeedController` → `ElectricMotor` | `ElectricMotor.rotate()` dipanggil. |

Diagram ini juga memperlihatkan dua sambungan yang belum selesai: `Tank` belum
menyuplai `PetrolEngine`, dan baterai yang diisi oleh `Car` belum dipakai saat
akselerasi listrik.
