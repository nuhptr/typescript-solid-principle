import Product from "./product"
import ShopServices from "./shop-services"

/** Menjalankan contoh dependency antara ShopServices dan Product. */
function main(): void {
    const product = new Product(1, "Kopi", 10000)
    const shopServices = new ShopServices()

    shopServices.changeProductPrice(12000, product)

    /** Output: 12000 */
    console.log(product.price)
}

main()

export { Product, ShopServices }
