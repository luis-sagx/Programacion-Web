class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, stock, categoria){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
        this._categoria = categoria;
    }

    get idProdcto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    get stock(){
        return this._stock;
    }

    set stock(stock){
        this._stock = stock;
    }

    get categoria(){
        return this._categoria;
    }

    set categoria(categoria){
        this._categoria = categoria;
    }

    toString(){
        return `Id producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`
    }

    reducirStock(cantidad){
        if(cantidad > 0 && this._stock >= cantidad){
            this._stock -= cantidad;
            console.log(`El producto ${this._nombre} ha sido vendido, cantidad: ${cantidad}. Stock restante: ${this._stock}`);
        } else if(cantidad <= 0) {
            console.error("La cantidad a vender debe ser mayor que 0");
        } else {
            console.error(`No hay suficiente stock de ${this._nombre} para realizar la venta`);
        }
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    };
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto, cantidad){
        //Verificar si no hemos superado el maximo de productos existentes
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if(producto.stock >= cantidad){
                this._productos.push({producto, cantidad});
                producto.reducirStock(cantidad);
            } else {
                console.log(`No hay suficiente stock de ${producto.nombre} para agregar a la orden`);
            }
        } else {
            console.log("No se pueden agregar más productos a la orden");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (const product of this._productos) {
            totalVenta += product.precio;
        }
        return totalVenta;
    }

    manejarStock(nombreProducto, cantidad){
        if(cantidad > 0){
            let productoEncontrado = null;
            for (const item of this._productos) {
                if(item.producto.nombre === nombreProducto){
                    productoEncontrado = item.producto;
                    break;
                }
            }
            
            if(productoEncontrado){
                productoEncontrado.reducirStock(cantidad);
            } else {
                console.error(`Producto ${nombreProducto} no encontrado en la orden`);
            }
        } else {
            console.error("Cantidad inválida");
        }
    }

    aplicarDescuento(categoria, porcentaje) {
        if(porcentaje > 0 && porcentaje <= 100){
            for (const producto of this._productos) {
                if (producto.categoria === categoria) {
                    producto.actualizarPrecio = producto.precio * (1 - porcentaje / 100);
                }
            }
        } else {
            console.error("Porcentaje invalido");
        }
    }

    calcularImpuestos(impuesto){
        let precioIVA = this.calcularTotal();
        precioIVA += (precioIVA * impuesto);
        return precioIVA;
    }

    listarProductos() {
        const productosOrdenados = this._productos.sort((a, b) => b.precio - a.precio);
        return productosOrdenados;
    }

    mostrarOrden(){
        let productosOrden = "";
        for (const product of this._productos) {
            productosOrden += product.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: {${productosOrden}}`);
    }
}

let producto1 = new Producto("Laptop", 500, 10, "Tecnologia");
let producto2 = new Producto("Mouse", 30, 30, "Tecnologia");

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Teclado", 150, 50, "Tecnologia");

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();

let producto4 = new Producto("Gorra", 10, 40, "Ropa");
let producto5 = new Producto("Saco", 20, 20, "Ropa");

let orden3 = new Orden();
orden3.aplicarDescuento("Tecnologia", 20);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto4);




// Ejercicio RETO

/* 
1.- Stock Disminuya
2.- Descuento por Categoria
    Crear una nueva categoria en la clase Producto
    ejm: Los productos de la categoria electronica deben tener un descuento del 10% al calcular el total de la venta
3.- Aplicacion de impuestos:
    Implementar un metodo calcularImpuestos() en la clase Orden para que agrege un impuesto 16%
4.- Listar los porductos de forma descendente
5.- Los precios no deben ser negativos al establecerlos en la clase Producto
*/