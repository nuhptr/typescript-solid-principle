import type Seller from "./seller"

/** User menyimpan referensi ke seller tanpa memiliki siklus hidupnya. */
class User {
    /** Membuat user dengan daftar seller yang berasosiasi; default-nya kosong. */
    constructor(
        public id: number,
        public name: string,
        public sellers: Seller[] = [],
    ) {}
}

export default User
