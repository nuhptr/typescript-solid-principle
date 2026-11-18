import StorageInterface from "../storage-interface"

class Tank extends StorageInterface {
    private oil: unknown = null

    fill(source: unknown): void {
        this.oil = source
    }

    getSource(): unknown {
        return this.oil
    }
}

export default Tank
