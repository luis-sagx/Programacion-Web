class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    get informacion() {
        return `${this.nombre} -> $${this.precio} dolares, ${this.cantidad} disponibles`;
    }

    set actualizarPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
        } else {
            console.log("Error: El precio debe ser mayor a 0.");
        }
    }
}

class Venta {
    constructor(nombreProducto, cantidad, total, fecha) {
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.total = total;
        this.fecha = fecha;
    }

    get detalle() {
        return `Venta realizada: ${this.fecha} -> ${this.nombreProducto}, cantidad de ${this.cantidad} por $${this.total} dolares`;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
        this.ventas = [];
    }

    agregarProducto(nombre, precio, cantidad, categoria) {
        if(typeof(nombre) == "string" && typeof(precio) == "number" && typeof(cantidad) == "number" && typeof(categoria) == "string"){
            if(precio > 0 ){
                const producto = new Producto(nombre, precio, cantidad, categoria);
                this.productos.push(producto);
            } else {
                console.error("Precio invalido");
            }
        } else {
            console.error("Ingrese los datos correctos");
        }
    }

    listarProductos(criterio = "") {
        const productosOrdenados = this.productos;
        productosOrdenados.sort((a, b) => {
            if (criterio === "ascendente") {
                return a.precio - b.precio;
            } else if (criterio === "descendente") {
                return b.precio - a.precio;
            } else {
                console.log("Criterio no válido. Use 'ascendente' o 'descendente'.");
            }
        });
        return productosOrdenados;
    }

    filtrarPorCategoria(categoria) {
        const productosFiltrados = this.productos.filter(producto => producto.categoria === categoria);
        const resultado = productosFiltrados;
        return resultado;
    }

    realizarVenta(nombreProducto, cantidad) {
        if(typeof(nombreProducto) == "string" && typeof(cantidad) == "number"){
            if(cantidad > 0 ){
                let productosInventario = this.productos;

                for (const key in productosInventario) {
                    if(nombreProducto === productosInventario[key].nombre){
                        if(productosInventario[key].cantidad > cantidad){
                            let producto = productosInventario[key];
                            producto.cantidad -= cantidad;
                            const fecha = new Date();
                            const total = producto.precio * cantidad;
                            const venta = new Venta(nombreProducto, cantidad, total, fecha);
                            this.ventas.push(venta);
                            //console.log(`El producto ${nombreProducto} a sido vendido, cantidad: ${cantidad}`);
                        } else {
                            console.error(`No se pudo realizar la venta del producto ${nombreProducto}`)
                        }
                        return;
                    }
                } 
            } else {
                console.error("cantidad invalida");
            }
        } else {
            console.error("Ingrese los datos correctos");
        }
    }

    aplicarDescuento(categoria, porcentaje) {
        if(typeof(categoria) == "string" && typeof(porcentaje) == "number"){
            if(porcentaje > 0 ){
                for (const producto of this.productos) {
                    if (producto.categoria === categoria) {
                        producto.actualizarPrecio = producto.precio * (1 - porcentaje / 100);
                    }
                }
            } else {
                console.error("Porcentaje invalido");
            }
        } else {
            console.error("Ingrese los datos correctos");
        }
    }

    generarReporte() {
        let totalIngresos = this.ventas.reduce((total, venta) => total + venta.total, 0);
        let productoMasVendido;
        if (this.ventas.length > 0) {
            productoMasVendido = this.ventas.reduce((max, venta) => {
                return venta.cantidad > max.cantidad ? venta : max;
            }, this.ventas[0]);
        } else {
            console.log("No hay ventas registradas.");
            productoMasVendido = null;
        }

        console.log("--------------- Reporte ----------------");
        for (let i = 0; i < this.productos.length; i++) {
            console.log(this.productos[i].informacion);
        }

        console.log("Ventas Realizadas:");
        for (let i = 0; i < this.ventas.length; i++) {
            console.log(this.ventas[i].detalle);
        }

        console.log(`Total de Ingresos: $${totalIngresos}`);
        console.log(`Producto más vendido: ${productoMasVendido.nombreProducto}`);
    }

}

const inventario = new Inventario();
inventario.agregarProducto("leche", 1.00, 30, "lacteos");
inventario.agregarProducto("huevos", 0.20, 100, "proteinas");
inventario.agregarProducto("pan", 0.18, 50, "panaderia");
inventario.agregarProducto("galletas", 1.50, 10, "snacks");
inventario.agregarProducto("queso", 2.50, 22, "lacteos");
inventario.agregarProducto("pollo", 9.00, 20, "proteinas");

console.log("*** Productos ordenados por precio (ascendente) ***");
const productosAscendentes = inventario.listarProductos("ascendente");
for (let i = 0; i < productosAscendentes.length; i++) {
    console.log(productosAscendentes[i].informacion);
}

console.log("***********************************")

inventario.realizarVenta("leche", 10);
inventario.realizarVenta("pan", 99);
inventario.realizarVenta("galletas", 6);

inventario.aplicarDescuento("lacteos", 20);

inventario.realizarVenta("queso", 2); //venta realizada con el desscuento de los lacteos

inventario.generarReporte();

