/** Kelas abstrak induk yang menyediakan perilaku umum untuk hewan. */
abstract class Animal {
    /** Menerima nama hewan dan menyimpannya sebagai properti objek. */
    constructor(public name: string) {}

    /** Setiap kelas turunan menentukan cara makannya sendiri. */
    abstract eat(): string

    /** Perilaku berjalan yang diwarisi oleh kelas turunan. */
    walk(): string {
        return `${this.name} walked`
    }
}

export default Animal
