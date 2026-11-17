import ConsumableProduct from "./consumable-product"
import ElectronicProduct from "./electronic-product"
import Product from "./product"

/** Menjalankan contoh specialization melalui dua jenis produk. */
function main(): void {
    const products: Product[] = [
        new ElectronicProduct(1, "Laptop", 15000000, new Date("2025-01-15")),
        new ConsumableProduct(2, "Susu UHT", 25000, new Date("2027-01-15")),
    ]

    /** Output:
     * ElectronicProduct { id: 1, name: 'Laptop', price: 15000000, productionDate: 2025-01-15T00:00:00.000Z }
     * ConsumableProduct { id: 2, name: 'Susu UHT', price: 25000, expiredDate: 2027-01-15T00:00:00.000Z }
     */
    for (const product of products) {
        console.log(product)
    }
}

main()

export { Product, ElectronicProduct, ConsumableProduct }
