/** Import kelas-kelas pohon konkret yang mewarisi kontrak dari Tree. */
import Bugenvile from "./bugenvil-tree"
import Lavender from "./lavender-tree"
import Melati from "./melati-tree"

/** Bugenvile mengimplementasikan leaf() dengan jumlah 10 daun. */
const bugenvile = new Bugenvile()
/** Output: Have 10 leaf */
console.log(`Have ${bugenvile.leaf()} leaf`)
/** Output: Bugenvile need oksigen to fotosintesis */
console.log(bugenvile.oksigen())

/** Lavender mengimplementasikan leaf() dengan jumlah 5 daun. */
const lavender = new Lavender()
/** Output: Have 5 leaf */
console.log(`Have ${lavender.leaf()} leaf`)
/** Output: Lavender need oksigen to fotosintesis */
console.log(lavender.oksigen())

/** Melati menyediakan implementasi leaf() sendiri, seperti syarat dari Tree. */
const melati = new Melati()
/** Output: Have 8 leaf */
console.log(`Have ${melati.leaf()} leaf`)
/** Output: Melati need oksigen to fotosintesis */
console.log(melati.oksigen())
