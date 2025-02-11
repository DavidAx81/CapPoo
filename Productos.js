"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
var Productos = /** @class */ (function () {
    function Productos() {
        this.productos = [];
    }
    Productos.prototype.agregarProducto = function (id, precio, producto) {
        this.productos.push({ id: id, precio: precio, producto: producto });
    };
    Productos.prototype.obtenerProductos = function () {
        return this.productos;
    };
    Productos.prototype.eliminarProducto = function (id) {
        var indice = this.productos.findIndex(function (producto) { return producto.id === id; });
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            console.log("Producto con id ".concat(id, " ha sido eliminado."));
        }
        else {
            console.log("Producto con id ".concat(id, " no encontrado."));
        }
    };
    return Productos;
}());
exports.Productos = Productos;
