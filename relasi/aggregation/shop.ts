import type Seller from "./seller"

/** Shop menyimpan referensi ke Seller yang dibuat secara terpisah. */
class Shop {
    private _seller: Seller | null = null

    /** Membuat toko dengan identitas dan nama. */
    constructor(
        public id: number,
        public name: string,
    ) {}

    /** Menghubungkan toko dengan objek Seller yang sudah ada. */
    set seller(seller: Seller | null) {
        this._seller = seller
    }

    /** Mengambil objek Seller yang terhubung, atau null jika belum ditetapkan. */
    get seller(): Seller | null {
        return this._seller
    }
}

export default Shop
