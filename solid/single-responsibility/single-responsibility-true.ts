/**
 * Single Responsibility Principle memisahkan tanggung jawab
 * agar perubahan pada satu fungsi tidak berdampak ke fungsi lain.
 */
class Item {}

class Order {
    calculateToSum(): void {}

    getItems(): Item[] {
        return []
    }

    getItemCount(): number {
        return 0
    }

    addItem(_item: Item): void {}

    deleteItem(_item: Item): void {}
}

class OrderPreview {
    printOrder(_order: Order): void {}

    showOrder(_order: Order): void {}
}

class OrderHistory {
    getDailyHistory(): void {}

    getMonthlyHistory(): void {}
}

function main(): void {
    const item = new Item()
    const order = new Order()
    order.addItem(item)

    const history = new OrderHistory()
    history.getDailyHistory()

    const viewer = new OrderPreview()
    viewer.showOrder(order)
}

main()

export {}
