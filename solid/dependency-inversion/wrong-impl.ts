/** Car bergantung langsung pada kelas Engine yang konkret. */
class Car {
    constructor(private readonly engine: Engine) {}

    start(): void {
        this.engine.start()
    }
}

class Engine {
    private readonly engineType = "generic"

    start(): void {}
}

class DieselEngine {
    start(): void {
        console.log("Diesel Engine")
    }
}

const car = new Car(new Engine())
car.start()

const dieselEngine = new DieselEngine()
/** DieselEngine tidak dapat dipakai karena Car mensyaratkan kelas Engine konkret. */
void dieselEngine

export {}
