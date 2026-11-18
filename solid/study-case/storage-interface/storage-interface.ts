abstract class StorageInterface {
    abstract fill(source: unknown): void

    abstract getSource(): unknown
}

export default StorageInterface
