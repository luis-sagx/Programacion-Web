window.onload = function () {
    listarSucursales();
};

async function listarSucursales() {
    pintar({
        url: "Sucursal/listarSucursales",
        cabeceras: ["IID Sucursal", "Nombre", "Direccion"],
        propiedades: ["iidSucursal", "nombre", "direccion"]
    })
}