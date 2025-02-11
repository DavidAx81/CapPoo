"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plumas = void 0;
var Plumas = /** @class */ (function () {
    function Plumas(marca, punta, color) {
        this.marca = marca;
        this.punta = punta;
        this.color = color;
    }
    Object.defineProperty(Plumas.prototype, "setMarca", {
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plumas.prototype, "setPunta", {
        set: function (punta) {
            this.punta = punta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plumas.prototype, "setColor", {
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plumas.prototype, "getMarca", {
        get: function () {
            return this.marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plumas.prototype, "getPunta", {
        get: function () {
            return this.getPunta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plumas.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    return Plumas;
}());
exports.Plumas = Plumas;
