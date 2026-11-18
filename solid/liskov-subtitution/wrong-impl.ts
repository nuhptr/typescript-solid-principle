/** Contoh yang keliru: semua produk diwajibkan memiliki tanggal kedaluwarsa. */
abstract class Product {
    abstract getName(): string

    abstract getExpiredDate(): Date

    getProductInfo(): void {}
}

class Vegetable extends Product {
    getName(): string {
        return "Broccoli"
    }

    getExpiredDate(): Date {
        return new Date()
    }
}

/** Smartphone terpaksa menyediakan perilaku kedaluwarsa yang tidak relevan. */
class Smartphone extends Product {
    getName(): string {
        return "Samsung S10+ Special Edition"
    }

    getExpiredDate(): Date {
        return new Date()
    }
}

export {}
