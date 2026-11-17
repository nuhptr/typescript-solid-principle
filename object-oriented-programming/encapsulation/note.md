# Encapsulation

Encapsulation membungkus data dan aturan perubahan data di dalam class. Pemakai class
mengakses data melalui method atau getter, bukan mengubah state internal secara langsung.
Contoh berikut memakai kasus harga produk yang hanya boleh diubah jika nilainya valid.

## Frontend - Angular

Angular menggunakan class `Product` untuk membungkus data dan aturan harga. Field
`#price` hanya dapat diakses dari dalam class. Getter `price` menyediakan akses baca,
sedangkan `withDiscount()` memvalidasi diskon dan mengembalikan objek produk baru.

```ts
// product.ts
export class Product {
    #price: number

    constructor(
        readonly id: string,
        readonly name: string,
        price: number,
    ) {
        this.#validatePrice(price)
        this.#price = price
    }

    get price(): number {
        return this.#price
    }

    withDiscount(percent: number): Product {
        if (percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100")
        }

        return new Product(this.id, this.name, this.#price * (1 - percent / 100))
    }

    #validatePrice(price: number): void {
        if (price < 0) {
            throw new RangeError("Price cannot be negative")
        }
    }
}
```

`ProductCardComponent` bertanggung jawab pada tampilan dan interaksi. Ia menerima
produk melalui `@Input`, menampilkan nilai dari getter, lalu mengganti produk dengan
hasil `withDiscount()` saat tombol ditekan.

```ts
// product-card.component.ts
import { Component, Input } from "@angular/core"
import { Product } from "./product"

@Component({
    selector: "app-product-card",
    template: `
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
        <button type="button" (click)="applyDiscount()">Apply 10% discount</button>
    `,
})
export class ProductCardComponent {
    @Input({ required: true }) product!: Product

    applyDiscount(): void {
        this.product = this.product.withDiscount(10)
    }
}
```

## Frontend - React

React memakai pendekatan berbeda: custom hook menyembunyikan `setProduct` dan hanya
menyediakan data produk serta aksi `applyDiscount`. Tipe `Product` di sini terpisah
dari class Angular.

```tsx
// useProduct.ts
import { useState } from "react"

export type Product = Readonly<{
    id: string
    name: string
    price: number
}>

export function useProduct(initialProduct: Product) {
    const [product, setProduct] = useState(initialProduct)

    const applyDiscount = (percent: number): void => {
        if (percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100")
        }

        setProduct((currentProduct) => ({
            ...currentProduct,
            price: currentProduct.price * (1 - percent / 100),
        }))
    }

    return { product, applyDiscount }
}
```

Component React menggunakan hook tersebut dan hanya memanggil aksi yang disediakan.

```tsx
// ProductCard.tsx
import { useProduct, type Product } from "./useProduct"

type ProductCardProps = {
    initialProduct: Product
}

export function ProductCard({ initialProduct }: ProductCardProps) {
    const { product, applyDiscount } = useProduct(initialProduct)

    return (
        <article>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button type="button" onClick={() => applyDiscount(10)}>
                Apply 10% discount
            </button>
        </article>
    )
}
```

## Backend - NestJS

Di backend, aturan yang sama diterapkan pada entity/domain `Product`. Harga hanya
bisa diubah lewat `changePrice()`, yang menolak harga negatif. `toJSON()` menentukan
bentuk data yang boleh dikirim sebagai response tanpa membuka field internal.

```ts
// product.ts
export class Product {
    #price: number

    constructor(
        readonly id: string,
        readonly name: string,
        price: number,
    ) {
        this.#validatePrice(price)
        this.#price = price
    }

    get price(): number {
        return this.#price
    }

    changePrice(price: number): void {
        this.#validatePrice(price)
        this.#price = price
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.#price,
        }
    }

    #validatePrice(price: number): void {
        if (price < 0) {
            throw new RangeError("Price cannot be negative")
        }
    }
}
```

DTO membatasi dan memvalidasi bentuk input dari request. `ValidationPipe` membuat
dekorator validasi dijalankan untuk body request sebelum controller memprosesnya.

```ts
// update-price.dto.ts
import { IsNumber, Min } from "class-validator"

export class UpdatePriceDto {
    @IsNumber()
    @Min(0)
    price!: number
}
```

```ts
// main.ts
import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    )

    await app.listen(3000)
}

void bootstrap()
```

`ProductsService` menyimpan koleksi produk di dalam properti `private`. Controller
tidak mengakses map tersebut; ia hanya meminta service memperbarui produk berdasarkan
ID. Jika produk tidak ditemukan, service mengembalikan error `NotFoundException`.

```ts
// products.service.ts
import { Injectable, NotFoundException } from "@nestjs/common"
import { Product } from "./product"

@Injectable()
export class ProductsService {
    private readonly products = new Map<string, Product>([
        ["p-1", new Product("p-1", "Kopi Lampung", 25000)],
    ])

    updatePrice(id: string, price: number): Product {
        const product = this.products.get(id)

        if (!product) {
            throw new NotFoundException(`Product ${id} was not found`)
        }

        product.changePrice(price)
        return product
    }
}
```

Controller menjadi batas HTTP: ia mengambil ID dari URL, menerima harga dari DTO,
memanggil service, lalu mengirim representasi produk yang dibuat oleh `toJSON()`.

```ts
// products.controller.ts
import { Body, Controller, Param, Patch } from "@nestjs/common"
import { ProductsService } from "./products.service"
import { UpdatePriceDto } from "./update-price.dto"

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Patch(":id/price")
    updatePrice(@Param("id") id: string, @Body() updatePriceDto: UpdatePriceDto) {
        return this.productsService.updatePrice(id, updatePriceDto.price).toJSON()
    }
}
```

### Alur kasus

1. Pengguna meminta perubahan harga melalui UI atau request `PATCH /products/:id/price`.
2. UI memanggil method domain, atau NestJS memvalidasi request melalui DTO.
3. Service meminta `Product` mengubah harga melalui `changePrice()`.
4. `Product` memvalidasi aturan harga; state internal berubah hanya jika valid.
5. Backend mengirim hasil melalui `toJSON()`, bukan mengekspos koleksi internal.
