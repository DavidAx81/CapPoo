"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dulces = void 0;
var Dulces = /** @class */ (function () {
    function Dulces(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
    }
    Object.defineProperty(Dulces.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dulces.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dulces.prototype, "setTipo", {
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dulces.prototype, "setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Dulces;
}());
exports.Dulces = Dulces;
