export class Gato {
    private name: string
    private sex: string
    private age: number
    private weight: number
    private color: string
    private texture: string

    constructor(name: string, sex: string, age: number, weight: number, color: string, texture: string) {
        this.name = name
        this.sex = sex
        this.age = age
        this.weight = weight
        this.color = color
        this.texture = texture
    }

    set setName(name: string) {
        this.name = name
    }
    set setAge(name: string) {
        this.name = name
    }
    set setWeight(name: string) {
        this.name = name
    }
    set setTextuew(name: string) {
        this.name = name
    }
    get getName(): string {
        return this.name
    }
    get getAge(): string {
        return this.name
    }
    get getWeight(): string {
        return this.name
    }
    get getTexture(): string {
        return this.name
    }

    toString(){
        return `Su nombre es: ${this.name}, es: ${this.sex}, su edad es: ${this.age}, es de color: ${this.color} su peso es de: ${this.weight} y su textura es: ${this.texture}`
    }

}