import type EngineInterface from "../engine-interface/engine-interface"
import type StorageInterface from "../storage-interface/storage-interface"
import Vehicle from "./vehicle"

class Car extends Vehicle {
    constructor(engine: EngineInterface, storage: StorageInterface) {
        super(engine, storage)
    }

    accelerate(): void {
        this.engine.move()
    }

    refill(source: unknown): void {
        this.storage.fill(source)
    }

    brake(): void {}
}

export default Car
