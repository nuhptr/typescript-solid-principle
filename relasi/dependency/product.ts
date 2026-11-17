/** Product menyimpan informasi produk dan perilaku untuk mengubah harganya. */
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) {}

    /** Mengubah harga produk. */
    changePrice(value: number): void {
        this.price = value
    }
}

export default Product
