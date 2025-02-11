"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hojas = void 0;
var Hojas = /** @class */ (function () {
    function Hojas(color, ancho, largo) {
        this.color = color;
        this.ancho = ancho;
        this.largo = largo;
    }
    Object.defineProperty(Hojas.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hojas.prototype, "getAncho", {
        get: function () {
            return this.ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hojas.prototype, "getLargo", {
        get: function () {
            return this.largo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hojas.prototype, "setColor", {
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hojas.prototype, "setAncho", {
        set: function (ancho) {
            this.ancho = ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hojas.prototype, "setLargo", {
        set: function (largo) {
            this.largo = largo;
        },
        enumerable: false,
        configurable: true
    });
    return Hojas;
}());
exports.Hojas = Hojas;
