# Object-Oriented Programming (OOP)

## Pengertian

Object-Oriented Programming (OOP) adalah paradigma pemrograman yang menyusun
program sebagai kumpulan objek yang menyimpan data dan menyediakan perilaku.
Objek dibuat dari **class**, yaitu rancangan yang mendefinisikan properti dan
method yang dimiliki objek tersebut.

Sebagai contoh, class `Kucing` dapat mendefinisikan properti seperti warna dan
berat. Setiap objek kucing memiliki nilainya sendiri, tetapi mengikuti rancangan
dan perilaku yang sama.

## Kenapa menggunakan OOP?

OOP berguna ketika program memiliki konsep domain yang mempunyai data dan
perilaku terkait. Dengan mengelompokkan keduanya, struktur program lebih dekat
dengan cara kita memahami entitas di dunia nyata maupun domain aplikasi.

Pendekatan ini juga membantu memisahkan tanggung jawab, membatasi perubahan
state, dan menyusun hubungan antarbagian program.

## Mengapa OOP penting?

OOP menyediakan pola untuk mengelola kompleksitas seiring bertambahnya fitur.
Jika digunakan secara tepat, OOP dapat membantu:

- **Menjaga kode tetap terorganisasi** dengan mengelompokkan state dan perilaku.
- **Mengontrol perubahan data** melalui encapsulation.
- **Mengurangi ketergantungan pada detail** melalui abstraction dan kontrak.
- **Memakai kembali perilaku** melalui komposisi atau inheritance yang sesuai.
- **Memperluas variasi perilaku** melalui polymorphism.

OOP bukan solusi yang harus digunakan untuk setiap program. Hirarki inheritance
yang tidak tepat atau terlalu banyak lapisan abstraksi justru dapat menambah
kompleksitas. Pilih pola yang sesuai dengan kebutuhan.

## Bagaimana menerapkan OOP?

1. Identifikasi konsep dalam domain dan tentukan tanggung jawab setiap class.
2. Tentukan data yang perlu disimpan sebagai properti dan operasi yang disediakan
   sebagai method.
3. Buat objek dari class untuk menyimpan state masing-masing.
4. Lindungi state dan tetapkan aturan perubahan melalui encapsulation.
5. Gunakan abstraction untuk mendefinisikan perilaku penting tanpa mengikat
   pemakai pada detail implementasi.
6. Gunakan inheritance hanya jika hubungan *is-a* memang sesuai. Gunakan
   polymorphism agar implementasi berbeda dapat dipakai melalui kontrak yang sama.
7. Tetapkan relasi antarobjek secara jelas, lalu uji perilakunya.

## Konsep dan contoh

| Konsep | Ringkasan | Contoh |
| --- | --- | --- |
| Class dan object | Class adalah rancangan; object adalah instans dengan state sendiri. | [Class dan object](./class/) |
| Method | Perilaku atau operasi yang disediakan oleh object. | [Function dan method](./function/) |
| Encapsulation | Mengatur akses ke state dan aturan perubahannya. | [Encapsulation](./encapsulation/) |
| Abstraction | Menampilkan kontrak penting dan menyembunyikan detail implementasi. | [Abstraction](./abstraction/) |
| Inheritance | Membentuk class khusus dari class yang lebih umum jika hubungan *is-a* tepat. | [Inheritance](./inheritance/) |
| Polymorphism | Menggunakan implementasi berbeda melalui kontrak atau tipe dasar yang sama. | [Polymorphism](./polymorpishm/) |

Hubungan antarclass dan object, termasuk association, aggregation, composition,
dan dependency, dijelaskan dalam [catatan relasi OOP](../relasi-pada-oop.md).
