import Employee from "./employee"

/** Female mewarisi Employee dengan implementasi walk() yang berbeda. */
class Female extends Employee {
    constructor(name: string) {
        super(name)
    }

    /** Mengimplementasikan perilaku berjalan khusus Female. */
    override walk(): void {
        console.log(`${this.name} walks gracefully!`)
    }
}

export default Female
