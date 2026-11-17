import ITree from "./tree"

/** Implementasi konkret pohon Lavender. */
class Lavender extends ITree {
    /** Menetapkan nama pohon Lavender pada kelas dasar. */
    constructor() {
        super("Lavender")
    }

    /** Jumlah daun Lavender. */
    leaf(): number {
        return 5
    }

    /** Menjelaskan kebutuhan Lavender terhadap oksigen untuk fotosintesis. */
    oksigen(): string {
        return `${this.name} need oksigen to fotosintesis`
    }
}

export default Lavender
