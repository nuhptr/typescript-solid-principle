/** Impor kelas induk yang akan diwarisi oleh Cat. */
import Animal from "../animal"

/** Cat hanya mewarisi satu superclass, yaitu Animal. */
class Cat extends Animal {
    /** Meneruskan nama Cat ke constructor kelas induk Animal. */
    constructor(name: string) {
        super(name)
    }

    /** Mengembalikan makanan yang dimakan kucing. */
    eat(): string {
        return `${this.name} eats fish`
    }
}

/** Menjalankan demo Cat dan menampilkan perilaku yang diwarisi. */
const main = (): void => {
    /** Cat meneruskan nama ke Animal dan mewarisi method walk(). */
    const oren = new Cat("Orange")
    /** Output: Orange walked */
    console.log(oren.walk())
    /** Output: Orange eats fish */
    console.log(oren.eat())
}

export default Cat
main()
