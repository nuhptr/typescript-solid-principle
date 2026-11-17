/** Kelas dasar abstrak untuk semua jenis produk. */
abstract class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) {}
}

export default Product
