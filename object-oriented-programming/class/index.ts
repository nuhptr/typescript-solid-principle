import Kucing from "./kucing"

/** Membuat beberapa objek Kucing dan menampilkan data setiap objek. */
const main = (): void => {
    /** Objek oren dibuat tanpa argumen, lalu atributnya diisi melalui setter. */
    const oren = new Kucing()
    oren.color = "Orange"
    oren.height = 20.0
    oren.length = 46.0
    oren.weight = 2.0

    /** Nilai atribut Bengal diberikan langsung melalui constructor. */
    const bengal = new Kucing("Coklat", 22.0, 39.0, 2.3)

    /** Nilai atribut Anggora juga diberikan langsung melalui constructor. */
    const anggora = new Kucing("Abu-Abu", 25.0, 41.0, 2.4)

    /** console.log menampilkan atribut internal dari setiap objek Kucing. */
    console.log(oren)
    console.log(bengal)
    console.log(anggora)

    /**
     * Hasil yang ditampilkan:
     * Kucing { _color: 'Orange', _height: 20, _length: 46, _weight: 2 }
     * Kucing { _color: 'Coklat', _height: 22, _length: 39, _weight: 2.3 }
     * Kucing { _color: 'Abu-Abu', _height: 25, _length: 41, _weight: 2.4 }
     */
}

/** Jalankan contoh pembuatan dan penampilan objek Kucing. */
main()
