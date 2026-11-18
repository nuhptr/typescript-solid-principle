abstract class Product {
    abstract getName(): string

    getProductInfo(): void {}
}

/** Hanya produk makanan yang memiliki tanggal kedaluwarsa. */
abstract class FoodProduct extends Product {
    abstract getExpiredDate(): Date
}

class Vegetable extends FoodProduct {
    getExpiredDate(): Date {
        return new Date()
    }

    getName(): string {
        return "Broccoli"
    }
}

/** Smartphone tidak dipaksa memiliki perilaku tanggal kedaluwarsa. */
class Smartphone extends Product {
    getName(): string {
        return "Redmi 11 Lite"
    }
}

export {}
