import EngineInterface from "../engine-interface"
import type SpeedController from "./speed-controller"

class ElectricEngine extends EngineInterface {
    constructor(private readonly speedController: SpeedController) {
        super()
    }

    move(): void {
        this.speedController.control()
    }
}

export default ElectricEngine
