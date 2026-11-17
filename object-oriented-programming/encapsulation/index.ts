import DataRepository from "./repository"

/** Bentuk data produk yang akan disimpan di repository. */
type Product = { id: number; name: string; price: number }

/** Repository menyembunyikan penyimpanan internal dan mengatur akses ke data. */
const productRepository = new DataRepository<Product>()

/** Data hanya dapat diubah melalui method yang disediakan repository. */
productRepository.setData([
    { id: 1, name: "Kopi Lampung", price: 25000 },
    { id: 2, name: "Teh Melati", price: 15000 },
])

/** Getter Data memberi akses baca tanpa mengizinkan perubahan array dari pemanggil. */
console.log(productRepository.Data)

/** Generic repository juga dapat menyimpan nilai primitif seperti string. */
const categoryRepository = new DataRepository<string>()
categoryRepository.setData(["Minuman", "Makanan"])

/** Output: [ 'Minuman', 'Makanan' ] */
console.log(categoryRepository.Data)
