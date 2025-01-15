class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, stock, categoria) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        if (precio > 0) {
            this._precio = precio;
        } else {
            throw new Error ("precio incorrecto");
        }
        this._stock = stock;
        this._categoria = categoria;
    }

    get idProdcto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    toString() {
        return `Id producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.stock > 0) {
                this._productos.push(producto);
                producto.stock--;
            } else {
                console.log(`No hay suficiente stock de ${producto.nombre} para agregar a la orden`);
            }
        } else {
            console.log("No se pueden agregar más productos a la orden");
        }
    }


    calcularTotal() {
        let totalVenta = 0;
        for (const product of this._productos) {
            totalVenta += product.precio;
        }
        return totalVenta;
    }

    aplicarDescuento(categoria, porcentaje) {
        if (porcentaje > 0 && porcentaje <= 100) {
            this._productos.forEach(producto => {
                if (producto.categoria === categoria) {
                    producto.precio *= 1 - porcentaje / 100;
                }
            });
        } else {
            console.error("Porcentaje inválido");
        }
    }

    calcularImpuestos(impuesto) {
        if (impuesto < 0) {
            throw new Error('El impuesto debe ser un número válido mayor o igual a 0');
        } else {
            const precioBase = this.calcularTotal();
            const precioConImpuesto = precioBase + (precioBase * impuesto/100);
        
            return precioConImpuesto;
        }
    
    }

    listarProductos() {
        const productosOrdenados = this._productos.sort((a, b) => b.precio - a.precio);
        return productosOrdenados;
    }

    mostrarOrden() {
        let productosOrden = "";
        for (const product of this._productos) {
            productosOrden += product.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularImpuestos(16)}, Productos: {${productosOrden}}`);
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
orden2.agregarProducto(producto2);
orden2.mostrarOrden();

let producto4 = new Producto("Gorra", 10, 40, "Ropa");
let producto5 = new Producto("Saco", 20, 1, "Ropa");

let orden3 = new Orden();
orden3.aplicarDescuento("Tecnologia", 20);
orden3.agregarProducto(producto1);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto5);

orden3.mostrarOrden();

let orden4 = new Orden();
orden4.agregarProducto(producto4);
orden4.agregarProducto(producto5);
orden4.mostrarOrden();







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