/* Esta clase ayuda a crear un objeto Dulce, esto se implemento
para no depender de la clase productos y poder agregar dicho dulce al array */
export class Dulces{
    private tipo:string
    private nombre:string

    constructor(tipo:string,nombre:string){
        this.tipo=tipo
        this.nombre=nombre
    }
    get getTipo():string{
        return this.tipo
    }
    get getNombre():string{
        return this.nombre
    }
    set setTipo(tipo:string){
        this.tipo=tipo
    }
    set setNombre(nombre:string){
        this.nombre=nombre
    }
}