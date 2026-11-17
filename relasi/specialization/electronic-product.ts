import Product from "./product"

/** Produk elektronik menambahkan tanggal produksi. */
class ElectronicProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        public productionDate: Date,
    ) {
        super(id, name, price)
    }
}

export default ElectronicProduct
