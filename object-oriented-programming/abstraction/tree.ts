/** Kelas dasar abstrak yang menetapkan perilaku umum dan kontrak untuk semua pohon. */
abstract class ITree {
    name: string = ""

    constructor(name: string) {
        /** Cegah pembuatan objek langsung dari kelas abstrak Tree. */
        if (new.target === ITree) {
            throw new TypeError("Tree is an abstract class and cannot be instantiated directly")
        }

        this.name = name
    }

    /** Kontrak abstrak: kelas turunan wajib menentukan jumlah daunnya. */
    abstract leaf(): number

    /** Setiap jenis pohon menyediakan perilaku oksigen sendiri. */
    abstract oksigen(): string
}

export default ITree
