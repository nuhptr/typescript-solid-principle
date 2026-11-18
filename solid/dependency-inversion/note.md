# Dependency Inversion Principle (DIP)

## Pengertian

Modul tingkat tinggi yang memuat aturan bisnis dan modul tingkat rendah yang
menangani detail teknis sebaiknya bergantung pada abstraksi, bukan saling
bergantung langsung pada implementasi konkret.

Abstraksi tidak seharusnya bergantung pada detail; detail seharusnya mengikuti abstraksi.

## Penerapan

Definisikan kontrak untuk perilaku yang dibutuhkan, lalu berikan implementasi
konkret melalui injeksi dependensi. Contohnya, kelas `Car` bergantung pada
kontrak engine sehingga dapat menggunakan mesin yang berbeda tanpa mengubah
kelas tersebut.

## Manfaat

DIP mengurangi coupling, memudahkan penggantian implementasi, dan membantu
pengujian karena dependensi dapat diganti dengan implementasi lain.

## Contoh

- [Contoh yang menerapkan DIP](./dependency-inversion-true.ts)
- [Contoh yang melanggar DIP](./dependency-inversion-wrong.ts)
