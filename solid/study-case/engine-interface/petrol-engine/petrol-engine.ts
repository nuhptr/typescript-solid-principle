import EngineInterface from "../engine-interface"
import type OilPipe from "./oil-pipe"
import type Piston from "./piston"

class PetrolEngine extends EngineInterface {
    constructor(
        private readonly oilPipe: OilPipe,
        private readonly piston: Piston,
    ) {
        super()
    }

    move(): void {
        const oil = this.oilPipe.suckOil()
        const energy = oil.burn()
        energy.push(this.piston)
    }
}

export default PetrolEngine
