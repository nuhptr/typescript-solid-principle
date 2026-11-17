import { createInterface } from "node:readline/promises"
import { stdin, stdout } from "node:process"

import Services from "./services"
import ProductServices from "./product-services"

/** Menjalankan operasi yang disediakan oleh implementasi layanan produk. */
async function main(): Promise<void> {
    /** Buat layanan konkret yang memenuhi kontrak Services. */
    const productServices: Services = new ProductServices()
    const terminal = createInterface({ input: stdin, output: stdout })

    try {
        /** Minta ID produk kepada pengguna melalui terminal. */
        const input = await terminal.question("Masukkan ID produk (1-10): ")
        const productId = Number(input)

        if (!Number.isInteger(productId) || productId < 1) {
            console.error("ID produk harus berupa bilangan bulat positif.")
            return
        }

        /** Cari produk sesuai ID yang dimasukkan. */
        const product = productServices.getProductById(productId)

        /** Tampilkan detail produk yang ditemukan. */
        console.log("Hasil getProductById:", product)

        /** Hitung dan tampilkan harga produk setelah pajak 10%. */
        const finalPrice = productServices.calculatePriceWithTax(product)
        console.log("Hasil calculatePriceWithTax:", finalPrice)
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
    } finally {
        terminal.close()
    }
}

void main()

export { Services, ProductServices }
