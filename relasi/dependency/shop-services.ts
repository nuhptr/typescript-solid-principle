import type Product from "./product"

/** ShopServices bergantung pada Product untuk mengubah harganya. */
class ShopServices {
    /** Meneruskan perubahan harga kepada objek Product. */
    changeProductPrice(price: number, product: Product): void {
        product.changePrice(price)
    }
}

export default ShopServices
