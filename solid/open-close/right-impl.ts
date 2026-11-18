/** Kelas dasar untuk jenis bioskop dengan biaya admin masing-masing. */
abstract class Cinema {
    protected constructor(public price: number) {}

    abstract calculateAdminFee(): number
}

class StandardCinema extends Cinema {
    calculateAdminFee(): number {
        return (this.price * 10) / 100
    }
}

class DeluxeCinema extends Cinema {
    calculateAdminFee(): number {
        return (this.price * 12) / 100
    }
}

class PremiumCinema extends Cinema {
    calculateAdminFee(): number {
        return (this.price * 20) / 100
    }
}

/** Jenis baru ditambahkan tanpa mengubah kelas yang sudah ada. */
class CoupleCinema extends Cinema {
    calculateAdminFee(): number {
        return (this.price * 15) / 100
    }
}

function main(): void {
    const standardCinema = new StandardCinema(100)
    console.log(standardCinema.calculateAdminFee())
}

main()

export {}
