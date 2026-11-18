# Single Responsibility Principle (SRP)

## Pengertian

Sebuah kelas atau modul sebaiknya memiliki satu tanggung jawab utama dan satu
alasan untuk berubah. Jika satu kelas menangani beberapa fungsi yang tidak
saling berkaitan, perubahan pada salah satunya dapat berdampak pada fungsi lain.

## Tujuan

Memisahkan tanggung jawab membuat perubahan lebih terarah, mengurangi efek
samping, dan memudahkan setiap bagian sistem untuk dipahami serta diuji.

## Penerapan

Identifikasi tanggung jawab yang berbeda, lalu pisahkan ke kelas atau modul yang
sesuai. Sebagai contoh, pengelolaan pesanan, penyajian pesanan, dan pencatatan
riwayat dapat ditangani oleh komponen yang berbeda.

## Contoh

- [Contoh yang menerapkan SRP](./single-responsibility-true.ts)
- [Contoh yang melanggar SRP](./single-responsibility-wrong.ts)
