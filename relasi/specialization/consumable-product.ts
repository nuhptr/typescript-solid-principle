import Product from "./product"

/** Produk konsumsi menambahkan tanggal kedaluwarsa. */
class ConsumableProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        public expiredDate: Date,
    ) {
        super(id, name, price)
    }
}

export default ConsumableProduct
