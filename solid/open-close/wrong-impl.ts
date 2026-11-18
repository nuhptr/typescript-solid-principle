/** Pengelola ini harus diubah setiap kali jenis bioskop baru ditambahkan. */
class CinemaAdmin {
    calculateAdminFee(cinema: Cinema): number {
        if (cinema instanceof StandardCinema) {
            return (cinema.price * 10) / 100
        }

        if (cinema instanceof DeluxeCinema) {
            return (cinema.price * 12) / 100
        }

        if (cinema instanceof PremiumCinema) {
            return (cinema.price * 20) / 100
        }

        return 0
    }
}

class Cinema {
    constructor(public price: number) {}
}

class StandardCinema extends Cinema {}

class DeluxeCinema extends Cinema {}

class PremiumCinema extends Cinema {}

export {}
