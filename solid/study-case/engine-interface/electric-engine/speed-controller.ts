import type Battery from "../../storage-interface/battery/battery"
import type BatteryManagementSystem from "./battery-management-system"
import type ElectricMotor from "./electric-motor"

class SpeedController {
    constructor(
        private readonly batteryManagementSystem: BatteryManagementSystem,
        private readonly motor: ElectricMotor,
    ) {}

    control(): void {
        const battery: Battery = this.batteryManagementSystem.getBattery()
        this.motor.rotate(battery)
    }
}

export default SpeedController
