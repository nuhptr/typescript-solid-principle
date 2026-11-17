import Seller from "./seller"
import User from "./user"

/** Buat Seller dan User secara terpisah, lalu hubungkan melalui referensi. */
function main(): void {
    const sellers = [new Seller(1, "Siti"), new Seller(2, "Budi")]
    const user = new User(1, "Ayu", sellers)

    /** Output: Siti, lalu Budi (masing-masing pada baris terpisah).
     * for (const seller of user.sellers) {
     *    console.log(seller.name)
     * }
     */

    /** Output: Siti */
    console.log(user.sellers[0].name)
    /** Output: Budi */
    console.log(user.sellers[1].name)
}

main()

export { Seller, User }
