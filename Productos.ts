/* Se tiene una interfaz generica la cual ayuda a insertar o agregar objetos de cualquier tipo (Dulce, Plumas, Hojas) 
La clase productos agrega los productos u objetos creados, implementa la interfaz IProductos
*/
interface IProductos<T> {
    agregarProducto(id: number, precio: number, producto: T): void
}

export class Productos<T> implements IProductos<T> {
    private productos: { id: number; precio: number; producto: T }[] = [];
    agregarProducto(id: number, precio: number, producto: T): void {
        this.productos.push({ id, precio, producto });
    }
    obtenerProductos(): { id: number; precio: number; producto: T }[] {
        return this.productos;
    }
    eliminarProducto(id: number): void {
        const indice = this.productos.findIndex(producto => producto.id === id);
        if (indice !== -1) {
            this.productos.splice(indice, 1); 
            console.log(`Producto con id ${id} ha sido eliminado.`);
        } else {
            console.log(`Producto con id ${id} no encontrado.`);
        }
    }

}