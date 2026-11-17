import Services from "./services"
import type { Product } from "./services"
import productsData from "./products.json"

/** Implementasi konkret layanan produk. */
class ProductServices extends Services {
    private readonly products: Product[] = productsData

    constructor() {
        super()
    }

    /** Mencari produk berdasarkan ID dan melaporkan error jika tidak ditemukan. */
    getProductById(id: number): Product {
        const product = this.products.find((item) => item.id === id)

        if (!product) {
            throw new Error(`Produk dengan id ${id} tidak ditemukan`)
        }

        return product
    }

    /** Menghitung harga akhir dengan menambahkan pajak sebesar 10%. */
    calculatePriceWithTax(product: Product): number {
        return product.price * 1.1
    }
}

export default ProductServices
