import Shop from "./shop"
import Seller from "./seller"

/** Buat Seller terlebih dahulu, terpisah dari pembuatan Shop. */
const seller1 = new Seller(1, "Siti")
const shop1 = new Shop(1, "Kopi Lampung")

/** Hubungkan seller yang sudah ada ke toko melalui setter. */
shop1.seller = seller1

/** Output: 1 */
console.log(shop1.seller?.id)
/** Output: Siti */
console.log(shop1.seller?.name)
