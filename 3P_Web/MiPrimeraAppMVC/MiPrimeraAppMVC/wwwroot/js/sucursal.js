window.onload = function () {
    listarSucursales();
};

let objSucursales;

async function listarSucursales() {
    objSucursales = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["id Sucursal", "Nombre", "Direccion"],
        propiedades: ["iidSucursal", "nombre", "direccion"],
        divContenedorTabla: "divContenedorTabla"
    }
    pintar(objSucursales);
}

function buscarSucursal() {
    let form = document.getElementById("formBusquedaSucursal");
    let frm = new FormData(form);

    fetchPost("Sucursal/filtrarSucursales", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function limpiarSucursal() {
    limpiarDatos("formBusquedaSucursal");
    listarSucursales();
}
