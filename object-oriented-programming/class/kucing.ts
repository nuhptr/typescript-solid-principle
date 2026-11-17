/** Class Kucing merepresentasikan kucing dengan warna dan ukuran tubuh. */
class Kucing {
    /**
     * Modifier private membatasi akses ke atribut ini dari luar class Kucing
     * saat pemeriksaan tipe TypeScript; ini bukan proteksi runtime JavaScript.
     */
    private _color: string | null
    private _height: number | null
    private _length: number | null
    private _weight: number | null

    /**
     * Membuat objek Kucing dan mengisi atribut awal.
     * Nilai default null memungkinkan objek dibuat tanpa argumen.
     */
    constructor(
        color: string | null = null,
        height: number | null = null,
        length: number | null = null,
        weight: number | null = null,
    ) {
        this._color = color
        this._height = height
        this._length = length
        this._weight = weight
    }

    /** Mengubah warna kucing melalui properti color. */
    set color(value: string | null) {
        this._color = value
    }
    /** Mengambil nilai warna kucing. */
    get color(): string | null {
        return this._color
    }

    /** Mengubah tinggi kucing melalui properti height. */
    set height(value: number | null) {
        this._height = value
    }
    /** Mengambil nilai tinggi kucing. */
    get height(): number | null {
        return this._height
    }

    /** Mengubah panjang kucing melalui properti length. */
    set length(value: number | null) {
        this._length = value
    }
    /** Mengambil nilai panjang kucing. */
    get length(): number | null {
        return this._length
    }

    /** Mengubah berat kucing melalui properti weight. */
    set weight(value: number | null) {
        this._weight = value
    }
    /** Mengambil nilai berat kucing. */
    get weight(): number | null {
        return this._weight
    }
}

export default Kucing
