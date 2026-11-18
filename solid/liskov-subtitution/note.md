# Liskov Substitution Principle (LSP)

## Pengertian

Objek dari suatu subkelas harus dapat menggantikan objek kelas induknya tanpa
mengubah kebenaran atau perilaku yang diharapkan oleh pemanggil.

## Kontrak pewarisan

- Subkelas tidak memperketat prasyarat yang diwajibkan kelas induk.
- Subkelas tetap memenuhi hasil dan jaminan yang dijanjikan kelas induk.
- Invarian kelas induk tetap berlaku pada subkelas.

Jika sebuah subkelas tidak dapat memenuhi kontrak kelas induknya, hierarki
pewarisan tersebut perlu ditinjau kembali. Perilaku yang hanya relevan untuk
jenis tertentu sebaiknya ditempatkan pada abstraksi yang lebih khusus.

## Contoh

- [Contoh yang menerapkan LSP](./liskov-subtitution-true.ts)
- [Contoh yang melanggar LSP](./liskov-subtitution-wrong.ts)
