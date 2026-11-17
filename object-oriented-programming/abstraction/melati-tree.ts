import ITree from "./tree"

/** Implementasi konkret pohon Melati. */
class Melati extends ITree {
    /** Menetapkan nama pohon Melati pada kelas dasar. */
    constructor() {
        super("Melati")
    }

    /** Jumlah daun Melati. */
    leaf(): number {
        return 8
    }

    /** Menjelaskan kebutuhan Melati terhadap oksigen untuk fotosintesis. */
    oksigen(): string {
        return `${this.name} need oksigen to fotosintesis`
    }
}

export default Melati
