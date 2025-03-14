window.onload = function () {
    listarSucursales();
};

let objSucursales;

async function listarSucursales() {
    objSucursales = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["Id Sucursal", "Nombre", "Dirección"],
        propiedades: ["iidSucursal", "nombre", "direccion"],
        divContenedorTabla: "divContenedorTabla",
        editar: true,
        eliminar: true,
        propiedadId: "iidSucursal"
    };
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
    limpiarDatos("frmGestionSucursal");
    listarSucursales();
}

function guardarSucursal() {
    let form = document.getElementById("frmGestionSucursal");
    let frm = new FormData(form);

    Confirmacion(undefined, "¿Está seguro de guardar los cambios?", function () {
        fetchPost("Sucursal/guardarSucursal", "text", frm, function (res) {
            limpiarDatos("frmGestionSucursal");
            Exito("Sucursal guardada correctamente");
            listarSucursales();

            var myModal = bootstrap.Modal.getInstance(document.getElementById('modalSucursal'));
            myModal.hide();
        });
    });
}

function Editar(id) {
    fetchGet("Sucursal/recuperarSucursal/?iidSucursal=" + id, "json", function (data) {
        setName("iidSucursal", data.iidSucursal, "frmGestionSucursal");
        setName("nombre", data.nombre, "frmGestionSucursal");
        setName("direccion", data.direccion, "frmGestionSucursal");

        var oModal = new bootstrap.Modal(document.getElementById('modalSucursal'));
        oModal.show();
    });
}

function Eliminar(objSucursal) {
    Confirmacion(undefined, "¿Desea eliminar la sucursal " + objSucursal.nombre + "?", function () {
        fetchGet("Sucursal/eliminarSucursal/?iidSucursal=" + objSucursal.iidSucursal, "text", function (res) {
            Exito("Sucursal eliminada correctamente");
            listarSucursales();
        });
    });
}