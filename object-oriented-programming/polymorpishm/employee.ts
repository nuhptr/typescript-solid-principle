/** Kelas abstrak yang mewajibkan turunannya mendefinisikan perilaku berjalan. */
abstract class Employee {
    constructor(public name: string) {}

    /** Setiap kelas turunan menentukan implementasi perilaku berjalan. */
    abstract walk(): void
}

export default Employee
