/** Ambil kelas abstrak sebagai induk untuk Bugenvile. */
import ITree from "./tree"

/** Implementasi konkret pohon Bugenvile. */
class Bugenvile extends ITree {
    /** Menetapkan nama pohon Bugenvile pada kelas dasar. */
    constructor() {
        super("Bugenvile")
    }

    /** Jumlah daun Bugenvile. */
    leaf(): number {
        return 10
    }

    /** Menjelaskan kebutuhan Bugenvile terhadap oksigen untuk fotosintesis. */
    oksigen(): string {
        return `${this.name} need oksigen to fotosintesis`
    }
}

export default Bugenvile
