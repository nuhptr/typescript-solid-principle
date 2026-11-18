/** Abstraksi engine yang digunakan oleh modul tingkat tinggi, Car. */
interface EngineInterface {
    start(): void
}

class Car {
    constructor(private readonly engine: EngineInterface) {}

    start(): void {
        this.engine.start()
    }
}

class PetrolEngine implements EngineInterface {
    start(): void {
        console.log("Petrol engine start")
    }
}

class HybridEngine implements EngineInterface {
    start(): void {
        console.log("Hybrid engine is on")
    }
}

class DieselEngine implements EngineInterface {
    start(): void {
        console.log("Diesel engine start")
    }
}

function main(): void {
    const petrolCar = new Car(new PetrolEngine())
    const dieselCar = new Car(new DieselEngine())
    const hybridCar = new Car(new HybridEngine())

    petrolCar.start()
    dieselCar.start()
    hybridCar.start()
}

main()

export {}
