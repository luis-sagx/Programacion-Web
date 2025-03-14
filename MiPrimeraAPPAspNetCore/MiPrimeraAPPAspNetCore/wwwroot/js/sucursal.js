window.onload = function () {
    listarSucursal();
}

let objSucursal;
async function listarSucursal() {

    objSucursal = {
        url: "Sucursal/ListarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true,
        propiedadID: "idSucursal"
    }

    pintar(objSucursal);
}

function filtrarSucursal() {
    let nombre = get("txtNombreSucursal");

    if (nombre == "") {
        listarSucursal();
    } else {
        objSucursal.url = "Sucursal/FiltrarSucursal/?nombre=" + nombre,
        pintar(objSucursal);
    }
}

function buscarSucursal() {
    let form = document.getElementById("frmSucursal");
    let frm = new FormData(form);

    fetchPost("Sucursal/FiltrarSucursal", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function Buscar() {
    let nombreSucursal = get("txtNombreSucursal");
    objSucursal.url = "Sucursal/FiltrarSucursal/?nombre=" + nombreSucursal,
    pintar(objSucursal);
}

function Limpiar() {
    listarSucursal();
    set("txtNombreSucursal", "");
}

function LimpiarSucursal() {
    LimpiarDatos("frmSucursal");
    listarSucursal();
}

function GuardarSucursal() {
    let form = document.getElementById("frmSucursal");
    let frm = new FormData(form);
    fetchPost("Sucursal/GuardarSucursal", "text", frm, function (res) {
        // Perform other operations first
        LimpiarDatos("frmSucursal");
        Exito("Registro Guardado con Exito");
        listarSucursal();

        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalSucursal'));
        myModal.hide();
    });
}

function MostrarModal() {
    LimpiarDatos("frmSucursal");
    var myModal = new bootstrap.Modal(document.getElementById('modalSucursal'));
    myModal.show();
}

function Editar(id) {
    fetchGet("Sucursal/RecuperarSucursal/?idSucursal=" + id, "json", function (data) {
        setN("idSucursal", data.idSucursal);
        setN("nombre", data.nombre);
        setN("direccion", data.direccion);

        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('modalSucursal'));
        myModal.show();
    });
}

function Eliminar(id) {
    fetchGet("Sucursal/RecuperarSucursal/?idSucursal=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar la sucursal " + data.nombre + " ?", function () {
            fetchGet("Sucursal/EliminarSucursal/?idSucursal=" + id, "text", function (r) {
                Exito("Registro Eliminado con Exito");
                listarSucursal();
            });
        });
    });
}
