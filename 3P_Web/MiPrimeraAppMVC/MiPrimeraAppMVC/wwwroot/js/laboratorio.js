window.onload = function () {
    listarLaboratorios();
};

let objLaboratorio;

async function listarLaboratorios() {
    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["id Laboratorio", "Nombre", "Direccion", "Persona Contacto", "Numero Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "personaContacto", "numeroContacto"],
        divContenedorTabla: "divContenedorTabla",
        editar: true,
        eliminar: true,
        propiedadId: "idLaboratorio"
    }

    pintar(objLaboratorio);

}

function buscarLaboratorio() {
    let form = document.getElementById("formBusquedaLab");
    let frm = new FormData(form);

    fetchPost("Laboratorio/filtrarLaboratorios", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function limpiarLaboratorio() {
    limpiarDatos("formBusquedaLab");
    limpiarDatos("frmGestionLaboratorio");
    listarLaboratorios();
}

function guardarLaboratorio() {
    let form = document.getElementById("frmGestionLaboratorio");
    let frm = new FormData(form);
    Confirmacion(undefined, "¿Esta seguro de los cambios?", function () {
        fetchPost("Laboratorio/guardarLaboratorio", "text", frm, function (res) {
            limpiarDatos("frmGestionLaboratorio");
            Exito("Laboratorio guardado correctamente");
            listarLaboratorios();

            var myModal = bootstrap.Modal.getInstance(document.getElementById('modalLaboratorio'));
            myModal.hide();
        });
    });
}

function Editar(id) {
    fetchGet("Laboratorio/recuperarLaboratorio/?idLaboratorio=" + id, "json", function (data) {
        setName("idLaboratorio", data.idLaboratorio, "frmGestionLaboratorio");
        setName("nombre", data.nombre, "frmGestionLaboratorio");
        setName("direccion", data.direccion, "frmGestionLaboratorio");
        setName("personaContacto", data.personaContacto, "frmGestionLaboratorio");
        setName("numeroContacto", data.numeroContacto, "frmGestionLaboratorio");

        var oModal = new bootstrap.Modal(document.getElementById('modalLaboratorio'));
        oModal.show();
    });
}

function Eliminar(objLaboratorio) {
    Confirmacion(undefined, "¿Desea eliminar el laboratorio " + objLaboratorio.nombre + "?", function () {
        fetchGet("Laboratorio/eliminarLaboratorio/?idLaboratorio=" + objLaboratorio.idLaboratorio, "text", function (res) {
            Exito("Laboratorio eliminado correctamente");
            listarLaboratorios();
        });
    });
}
