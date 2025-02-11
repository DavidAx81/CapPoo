/* Este archivo prueba las clases creadas imprimiendo los resultados */
import { Productos } from "./Productos";
import { Dulces } from "./dulces";
import { Hojas } from "./hojas";
import { Plumas } from "./Plumas";

let dulceUno = new Dulces("Paleta", "Paletin")
let hojaUno = new Hojas("Blanca", 5, 10)
let pluma = new Plumas("Bic", "Fina", "Rojo")
let producto = new Productos()
producto.agregarProducto(1,5,dulceUno)
//console.log(producto.obtenerProductos())
producto.agregarProducto(2,2,hojaUno)
producto.agregarProducto(3,10,pluma)
console.log(producto.obtenerProductos())
producto.eliminarProducto(3)
console.log("----------------------------")
console.log("----------------------------")
console.log("----------------------------")
console.log(producto.obtenerProductos())

