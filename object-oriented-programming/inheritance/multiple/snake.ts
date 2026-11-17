/** Gunakan kelas Animal yang sudah didefinisikan di folder inheritance. */
import Animal from "../animal"

type Constructor<T = object> = abstract new (...args: any[]) => T

/**
 * Mixin menambahkan perilaku melata tanpa mengubah kelas dasar.
 * JavaScript hanya mengizinkan satu superclass langsung.
 */
const CanSlither = <TBase extends Constructor<Animal>>(Base: TBase) => {
    abstract class SlitheringAnimal extends Base {
        /** Mengembalikan aksi melata dari hewan ini. */
        slither(): string {
            return `${this.name} slithers`
        }
    }
    return SlitheringAnimal
}

/** Mixin menambahkan kemampuan mendeteksi panas. */
const CanSenseHeat = <TBase extends Constructor<Animal>>(Base: TBase) => {
    abstract class HeatSensingAnimal extends Base {
        /** Mengembalikan aksi mendeteksi panas dari hewan ini. */
        senseHeat(): string {
            return `${this.name} senses heat`
        }
    }
    return HeatSensingAnimal
}

/** Snake menggabungkan perilaku Animal, CanSlither, dan CanSenseHeat. */
class Snake extends CanSenseHeat(CanSlither(Animal)) {
    /** Meneruskan nama Snake melalui mixin hingga constructor Animal. */
    constructor(name: string) {
        super(name)
    }

    /** Mengimplementasikan cara ular memakan mangsanya. */
    eat(): string {
        return `${this.name} eats prey`
    }
}

/** Menjalankan contoh komposisi mixin dan menampilkan kedua perilakunya. */
const main = (): void => {
    const snake = new Snake("Snake")
    /** Output: Snake slithers */
    console.log(snake.slither())
    /** Output: Snake senses heat */
    console.log(snake.senseHeat())
    /** Output: Snake eats prey */
    console.log(snake.eat())
}

export default Snake
main()
