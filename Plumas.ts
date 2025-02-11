/* La clase Plumas ayuda a instanciar plumas para agregar al array que se crea de la clase productos */
export class Plumas{
    private marca:string
    private punta:string
    private color:string

    constructor(marca:string,punta:string,color:string){
        this.marca=marca
        this.punta=punta
        this.color=color
    }
    set setMarca(marca:string){
        this.marca=marca
    }
    set setPunta(punta:string){
        this.punta=punta
    }
    set setColor(color:string){
        this.color=color
    }
    get getMarca():string{
        return this.marca
    }
    get getPunta():string{
        return this.getPunta
    }
    get getColor():string{
        return this.color
    }
}