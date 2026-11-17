import Dog from "./dog"

/** Membuat objek Dog dan menjalankan perilakunya. */
const main = (): void => {
    const dog = new Dog("Hitam", 40, 60, 12)

    console.log("Anjing sebelum makan:", dog)
    dog.bark()

    const updatedWeight = dog.eat(2)
    console.log(`Berat anjing setelah makan: ${updatedWeight} kg`)
}

main()
