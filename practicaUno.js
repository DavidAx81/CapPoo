"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(name, sex, age, weight, color, texture) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    Object.defineProperty(Gato.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "setAge", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "setWeight", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "setTextuew", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "getAge", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "getWeight", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gato.prototype, "getTexture", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Gato.prototype.toString = function () {
        return "Su nombre es: ".concat(this.name, ", es: ").concat(this.sex, ", su edad es: ").concat(this.age, ", es de color: ").concat(this.color, " su peso es de: ").concat(this.weight, " y su textura es: ").concat(this.texture);
    };
    return Gato;
}());
exports.Gato = Gato;
