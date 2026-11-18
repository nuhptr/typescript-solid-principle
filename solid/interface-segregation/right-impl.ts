interface VehicleInterface {
    drive(): void
    stop(): void
    refuel(): void
}

interface DoorInterface {
    openDoors(): void
}

class MotorCycle implements VehicleInterface {
    drive(): void {}

    stop(): void {}

    refuel(): void {}
}

/** Mobil menerapkan kontrak kendaraan dan perilaku pintu yang dibutuhkannya. */
class Car implements VehicleInterface, DoorInterface {
    openDoors(): void {}

    drive(): void {}

    stop(): void {}

    refuel(): void {}
}

export {}
