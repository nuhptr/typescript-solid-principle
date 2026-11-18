import Battery from "./storage-interface/battery/battery"
import Electrons from "./storage-interface/battery/electrons"
import BatteryManagementSystem from "./engine-interface/electric-engine/battery-management-system"
import ElectricEngine from "./engine-interface/electric-engine/electric-engine"
import ElectricMotor from "./engine-interface/electric-engine/electric-motor"
import SpeedController from "./engine-interface/electric-engine/speed-controller"
import Car from "./vehicle/car"
import Oil from "./engine-interface/petrol-engine/oil"
import OilPipe from "./engine-interface/petrol-engine/oil-pipe"
import PetrolEngine from "./engine-interface/petrol-engine/petrol-engine"
import Piston from "./engine-interface/petrol-engine/piston"
import Tank from "./storage-interface/tank/tank"

/** Menjalankan contoh mobil berbahan bakar bensin dan mobil listrik. */
function main(): void {
    const tank = new Tank()
    const petrolEngine = new PetrolEngine(new OilPipe(), new Piston())
    const petrolCar = new Car(petrolEngine, tank)
    petrolCar.refill(new Oil())
    petrolCar.accelerate()
    petrolCar.brake()

    const electrons = new Electrons()
    const battery = new Battery(electrons)
    const speedController = new SpeedController(new BatteryManagementSystem(), new ElectricMotor())

    const electricEngine = new ElectricEngine(speedController)
    const electricCar = new Car(electricEngine, battery)
    electricCar.refill(electrons)
    electricCar.accelerate()
    electricCar.brake()
}

main()
