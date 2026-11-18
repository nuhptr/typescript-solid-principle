import type Piston from "./piston"

class Energy {
    push(piston: Piston): void {
        piston.move()
    }
}

export default Energy
