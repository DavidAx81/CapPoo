import { Gato } from "./practicaUno";

let gatoUno = new Gato("Oscar", "Masculino", 5, 10, "Naranja", "Suave")
console.log("Prueba de que se le dió nombre")
console.log(gatoUno.getName)
console.log("Prueba de que se cambió nombre")
gatoUno.setName = "Oscarin"
console.log(gatoUno.getName)
console.log("Prueba de toString")
console.log(gatoUno.toString())