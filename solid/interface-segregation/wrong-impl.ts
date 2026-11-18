/** Kontrak terlalu besar karena semua kendaraan diwajibkan memiliki pintu. */
interface VehicleInterface {
    drive(): void
    stop(): void
    refuel(): void
    openDoors(): void
}

class MotorCycle implements VehicleInterface {
    drive(): void {}

    stop(): void {}

    refuel(): void {}

    /** Sepeda motor dipaksa menyediakan perilaku yang tidak relevan. */
    openDoors(): void {}
}

export {}
