// Actividad 2: Objectos en JavaScript
const inventario = {
    producto1: {
        nombre: "pollo",
        precio: 8.50,
        cantidad: 12
    },
    producto2: {
        nombre: "tomate",
        precio: 0.20,
        cantidad: 20
    },
    producto3: {
        nombre: "huevo",
        precio: 0.15,
        cantidad: 50
    },
    producto4: {
        nombre: "verde",
        precio: 0.25,
        cantidad: 30
    }
};

console.log(inventario);

Object.seal(inventario);

const vender = (producto, cantidad) => {
    for (let key in inventario) {
        if (inventario[key].nombre === producto) {
            let item = inventario[key];
            if (item.cantidad >= cantidad) {
                item.cantidad -= cantidad;
                console.log(`Venta de ${producto} exitosa, ${cantidad} vendidos.`);      
            } else {
                console.log(`Venda fallida, no hay suficiente stock de ${producto}.`);
            }
            return; 
        }
    }
    console.log(`Venda fallida, el producto ${producto} no existe.`);
};

const aplicarDescuento = (porcentaje) => {
    for (let key in inventario) {
        let item = inventario[key];
        let descuento = item.precio * (porcentaje / 100);
        if (descuento <= item.precio){
            item.precio = item.precio - descuento;
        } else {
            item.precio = 0;
        }
    }
};

vender("pollo", 5);
vender("tomate", 10);
vender("huevo", 60);

aplicarDescuento(10);
vender("tomate", 10);

console.log(inventario);