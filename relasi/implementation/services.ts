/** Data produk yang dikembalikan oleh layanan. */
export interface Product {
    id: number
    name: string
    price: number
}

/** Kontrak abstrak untuk layanan produk. */
abstract class Services {
    /** Tolak instansiasi langsung dari kelas abstrak. */
    protected constructor() {
        if (new.target === Services) {
            throw new TypeError("ProductServices is abstract and cannot be instantiated directly")
        }
    }

    /** Implementasi konkret harus menyediakan operasi pencarian produk berdasarkan ID. */
    abstract getProductById(id: number): Product

    /** Implementasi konkret harus menyediakan perhitungan harga produk beserta pajak. */
    abstract calculatePriceWithTax(product: Product): number
}

export default Services
