/** Merepresentasikan anjing beserta ukuran tubuh dan perilakunya. */
class Dog {
    constructor(
        public color: string = "Cokelat",
        public height: number = 0,
        public length: number = 0,
        public weight: number = 0,
    ) {}

    /** Menampilkan suara yang dikeluarkan oleh anjing. */
    bark(): void {
        console.log("Guk... guk... guk...")
    }

    /** Alias lama untuk menjaga kompatibilitas nama method. */
    purring(): void {
        this.bark()
    }

    /** Menambah berat anjing setelah makan. */
    eat(amount: number = 1): number {
        this.weight += amount
        return this.weight
    }
}

export default Dog
