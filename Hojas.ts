/*Esta clase ayuda a crear objetos Hojas*/

export class Hojas {
    private color: string
    private ancho: number
    private largo: number

    constructor(color: string, ancho: number, largo: number) {
        this.color = color
        this.ancho = ancho
        this.largo = largo
    }

    get getColor(): string {
        return this.color
    }
    get getAncho(): number {
        return this.ancho
    }
    get getLargo(): number {
        return this.largo
    }
    set setColor(color: string) {
        this.color = color
    }
    set setAncho(ancho: number) {
        this.ancho = ancho
    }
    set setLargo(largo: number) {
        this.largo = largo
    }
}