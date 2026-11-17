/** Impor kelas dasar yang menyimpan nama dan menyediakan walk(). */
import Animal from "../animal"

/** Carnivore mewarisi Animal dan menambahkan perilaku makan daging. */
class Carnivore extends Animal {
    /** Meneruskan nama hewan ke constructor Animal. */
    constructor(name: string) {
        super(name)
    }

    /** Mengimplementasikan cara makan yang khusus untuk hewan karnivora. */
    eat(): string {
        return `${this.name} eats meat`
    }
}

/** Lion mewarisi Carnivore, yang sebelumnya mewarisi Animal. */
class Lion extends Carnivore {
    /** Meneruskan nama Lion ke constructor Carnivore. */
    constructor(name: string) {
        super(name)
    }
}

/** Menjalankan demo rantai inheritance dari Animal hingga Lion. */
const main = (): void => {
    /** Constructor meneruskan nama melalui Lion dan Carnivore hingga Animal. */
    const miawg = new Lion("Orange")
    /** Output: Orange walked */
    console.log(miawg.walk())
    /** Output: Orange eats meat */
    console.log(miawg.eat())
}

export { Carnivore, Lion }
main()
