class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("leche", 1.00, 30);
const producto2 = new Producto("huevos", 0.20, 100);
const producto3 = new Producto("pan", 0.18, 50);
const producto4 = new Producto("galletas", 1.00, 10);

const inventario = {
    producto1,
    producto2,
    producto3,
    producto4
}

Object.seal(inventario);

const vender = (producto, cantidad) =>{
    for (const key in inventario) {
        if(producto === inventario[key].nombre){
            if(cantidad < inventario[key].cantidad){
                inventario[key].cantidad -= cantidad;
                console.log(`Se a vendido: ${producto}, con la cantidad de ${cantidad}`);
                console.log(`Cantidad restante de ${producto}: ${inventario[key].cantidad}`);
            } else {
                console.log("Error de compra");
            }
            return;
        }
    } 
}

const aplicarDescuento = (porcentaje) => {
    for (const key in inventario) {
        let descuento = inventario[key].precio * (porcentaje/100);
        inventario[key].precio -= descuento; 
    }
}
console.log(inventario);
vender("leche", 10);
vender("pan", 400);
vender("galletas", 3);
aplicarDescuento(10);
console.log(inventario);


