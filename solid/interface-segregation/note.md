# Interface Segregation Principle (ISP)

## Pengertian

Klien sebaiknya tidak dipaksa bergantung pada operasi yang tidak digunakannya. Karena itu, kontrak yang besar lebih baik dipecah menjadi beberapa antarmuka kecil yang masing-masing mewakili kemampuan tertentu.

## Penerapan

Pisahkan perilaku umum dan perilaku khusus. Misalnya, kemampuan berkendara dapat didefinisikan terpisah dari kemampuan membuka pintu, sehingga sepeda motor tidak perlu menyediakan operasi pintu yang tidak relevan.

## Manfaat

Antarmuka yang lebih fokus mengurangi coupling dan membuat implementasi lebih
sederhana, fleksibel, serta mudah digunakan kembali.

## Contoh

- [Contoh yang menerapkan ISP](./interface-segregation-true.ts)
- [Contoh yang melanggar ISP](./interface-segregation-wrong.ts)
