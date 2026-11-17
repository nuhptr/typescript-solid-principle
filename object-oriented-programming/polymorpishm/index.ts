import Employee from "./employee"
import Female from "./female"
import Male from "./male"

/** Memanggil perilaku walk() melalui tipe induk Employee. */
const main = (): void => {
    const employees: Employee[] = [new Male("Budi"), new Female("Siti")]

    /**
     * Output:
     * Budi walk!
     * Yeay! Budi walked!
     * Siti walks gracefully!
     */
    employees.forEach((employee) => employee.walk())
}

main()
