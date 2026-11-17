/** Menyimpan dan menyediakan akses ke kumpulan data dalam memori. */
class DataRepository<T> {
    private _data: T[] = []

    /**
     * Menyimpan kumpulan data yang diperoleh dari pemanggil.
     */
    setData(data: T[]): void {
        this._data = data
    }

    /** Mengembalikan kumpulan data yang tersimpan di repositori. */
    get Data(): readonly T[] {
        return this._data
    }
}

export default DataRepository
