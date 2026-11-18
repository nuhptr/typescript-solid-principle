import StorageInterface from "../storage-interface"

class Battery extends StorageInterface {
    constructor(private electrons: unknown) {
        super()
    }

    fill(source: unknown): void {
        this.electrons = source
    }

    getSource(): unknown {
        return this.electrons
    }
}

export default Battery
