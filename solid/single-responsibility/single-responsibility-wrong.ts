/**
 * Contoh yang melanggar Single Responsibility Principle:
 * satu kelas menangani terlalu banyak jenis tanggung jawab.
 */
class Item {}

class Order {
    calculateToSum(): void {}

    getItems(): void {}

    getItemsCount(): void {}

    addItem(_item: Item): void {}

    deleteItem(_item: Item): void {}

    printOrder(): void {}

    showOrder(): void {}

    getDailyHistory(): void {}

    getMonthlyHistory(): void {}
}

function main(): void {
    const order = new Order()
    order.calculateToSum()
}

main()

export {}
