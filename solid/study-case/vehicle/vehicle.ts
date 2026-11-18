import type EngineInterface from "../engine-interface/engine-interface"
import type StorageInterface from "../storage-interface/storage-interface"

abstract class Vehicle {
    protected constructor(
        protected readonly engine: EngineInterface,
        protected readonly storage: StorageInterface,
    ) {}

    abstract accelerate(): void

    abstract refill(source: unknown): void

    abstract brake(): void
}

export default Vehicle
