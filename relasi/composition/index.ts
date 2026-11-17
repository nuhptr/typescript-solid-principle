/** Address menyimpan detail alamat yang dimiliki oleh sebuah User. */
class Address {
    /** Membuat alamat dengan identitas dan lokasi. */
    constructor(
        public id: string,
        public location: string,
    ) {}
}

/** User membuat dan memiliki Address sebagai bagian dari komposisi. */
class User {
    /** Membuat user sekaligus objek alamat miliknya. */
    constructor(
        public id: string,
        public name: string,
        addressId: string,
        location: string,
    ) {
        this.address = new Address(addressId, location)
    }

    address: Address
}

/** Membuat User; Address dibuat di dalam User sehingga menunjukkan composition. */
const main = (): void => {
    const user = new User("1", "Adi Nugraha", "2", "Bandung")

    /** Menampilkan User beserta objek Address yang dimilikinya. */
    console.log(user)

    /**
     * Output:
     * User {
     *   id: '1',
     *   name: 'Adi Nugraha',
     *   address: Address { id: '2', location: 'Bandung' }
     * }
     */
    /** Output: Bandung */
    console.log(user.address.location)
    /** Output: Adi Nugraha */
    console.log(user.name)
}

main()

export { Address, User }
