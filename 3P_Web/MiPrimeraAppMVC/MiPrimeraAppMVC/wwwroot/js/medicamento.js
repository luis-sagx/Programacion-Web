window.onload = function () {
    listarMedicamentos();
};

let objMedicamentos;

async function listarMedicamentos() {
    objMedicamentos = {
        url: "Medicamento/listarMedicamentos",
        cabeceras: ["Id", "Nombre", "Laboratorio", "Tipo"],
        propiedades: ["idMedicamento", "nombreMedicamento", "nombreLaboratorio", "nombreTipoMedicamento"],
        divContenedorTabla: "divContenedorTabla",
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objMedicamentos);
}

function buscarMedicamento() {
    let form = document.getElementById("formBusquedaMedicamento");
    let frm = new FormData(form);

    fetchPost("Medicamento/filtrarMedicamentos", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function limpiarMedicamento() {
    limpiarDatos("formBusquedaMedicamento");
    limpiarDatos("frmGestionMedicamento");
    listarMedicamentos();
}

function guardarMedicamento() {
    let form = document.getElementById("frmGestionMedicamento");
    let frm = new FormData(form);

    Confirmacion(undefined, "¿Está seguro de guardar los cambios?", function () {
        fetchPost("Medicamento/guardarMedicamento", "text", frm, function (res) {
            limpiarDatos("frmGestionMedicamento");
            Exito("Medicamento guardado correctamente");
            listarMedicamentos();

            var myModal = bootstrap.Modal.getInstance(document.getElementById('modalMedicamento'));
            myModal.hide();
        });
    });
}

function Editar(id) {
    fetchGet("Medicamento/recuperarMedicamento/?iidMedicamento=" + id, "json", function (data) {
        setName("idMedicamento", data.idMedicamento, "frmGestionMedicamento");
        setName("codigo", data.codigo, "frmGestionMedicamento");
        setName("nombreMedicamento", data.nombreMedicamento, "frmGestionMedicamento");
        setName("idLaboratorio", data.idLaboratorio, "frmGestionMedicamento");
        setName("idTipoMedicamento", data.idTipoMedicamento, "frmGestionMedicamento");
        setName("usoMedicamento", data.usoMedicamento, "frmGestionMedicamento");
        setName("contenido", data.contenido, "frmGestionMedicamento");

        var oModal = new bootstrap.Modal(document.getElementById('modalMedicamento'));
        oModal.show();
    });
}

function Eliminar(objMedicamento) {
    Confirmacion(undefined, "¿Desea eliminar el medicamento " + objMedicamento.nombreMedicamento + "?", function () {
        fetchGet("Medicamento/eliminarMedicamento/?idMedicamento=" + objMedicamento.idMedicamento, "text", function (res) {
            Exito("Medicamento eliminado correctamente");
            listarMedicamentos();
        });
    });
}