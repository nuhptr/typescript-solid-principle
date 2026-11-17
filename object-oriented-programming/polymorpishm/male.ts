/** Impor class induk yang perilaku berjalan abstraknya akan diimplementasikan. */
import Employee from "./employee"

/** Male mewarisi Employee dan mengimplementasikan perilaku walk(). */
class Male extends Employee {
    /** Meneruskan nama Male ke constructor Employee. */
    constructor(name: string) {
        super(name)
    }

    /** Mengimplementasikan perilaku berjalan khusus Male. */
    override walk(): void {
        console.log(`${this.name} walk!`)
        console.log(`Yeay! ${this.name} walked!`)
    }
}

export default Male
