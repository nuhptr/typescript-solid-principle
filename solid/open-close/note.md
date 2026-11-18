# Open/Closed Principle (OCP)

## Pengertian

Komponen perangkat lunak sebaiknya terbuka untuk diperluas, tetapi tertutup
untuk modifikasi. Artinya, kebutuhan baru idealnya dapat ditambahkan tanpa
mengubah perilaku kode yang sudah berjalan.

## Penerapan

Gunakan abstraksi agar variasi perilaku dapat ditambahkan melalui implementasi
baru. Contohnya, jenis bioskop baru dapat menyediakan perhitungan biaya adminnya
sendiri tanpa menambah cabang kondisi pada kelas pengelola.

## Manfaat

Pendekatan ini mengurangi risiko regresi saat fitur baru ditambahkan dan
membantu menjaga kode yang sudah teruji tetap stabil.

## Contoh

- [Contoh yang menerapkan OCP](./open-close-principle-true.ts)
- [Contoh yang melanggar OCP](./open-close-principle-wrong.ts)
