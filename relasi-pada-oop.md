# Relasi pada Object-Oriented Programming

Relasi pada OOP menjelaskan bagaimana objek atau kelas saling terhubung dan
berinteraksi. Contoh implementasi TypeScript untuk setiap relasi tersedia di
folder [`relasi/`](./relasi/).

## Jenis relasi

| Relasi | Makna | Referensi contoh |
| --- | --- | --- |
| **Association** | Hubungan umum *has-a*: sebuah objek menyimpan atau menggunakan referensi ke objek lain. Kedua objek dapat dibuat dan memiliki siklus hidup secara terpisah. | [Association](./relasi/association/) |
| **Aggregation** | Bentuk association yang menunjukkan hubungan *has-a* dengan kepemilikan lemah. Objek bagian tetap dapat ada tanpa objek yang menampungnya. | [Aggregation](./relasi/aggregation/) |
| **Composition** | Bentuk association dengan kepemilikan kuat. Objek pemilik membuat dan mengelola objek bagiannya sebagai bagian dari dirinya. | [Composition](./relasi/composition/) |
| **Dependency** | Sebuah kelas bergantung pada kelas lain untuk menjalankan suatu operasi, misalnya ketika objek lain diterima sebagai parameter. | [Dependency](./relasi/dependency/) |
| **Generalization / Specialization** | Hubungan *is-a*: kelas yang lebih spesifik mewarisi karakteristik dari kelas yang lebih umum. | [Specialization](./relasi/specialization/) |
| **Implementation / Realization** | Kelas konkret memenuhi kontrak yang ditentukan oleh tipe abstrak. Contoh ini menggunakan kelas abstrak sebagai kontrak. | [Implementation](./relasi/implementation/) |

### Cara membedakan

- **Association** adalah istilah umum untuk hubungan antarobjek.
- **Aggregation** dan **composition** adalah bentuk association yang berbeda
  dalam tingkat kepemilikan dan keterikatan siklus hidup objek.
- **Dependency** menggambarkan kebutuhan suatu kelas terhadap kelas lain,
  bukan kepemilikan.
- **Generalization** menggambarkan pewarisan, sedangkan **specialization**
  menggambarkan pembentukan kelas yang lebih spesifik.
