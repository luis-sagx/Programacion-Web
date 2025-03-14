window.onload = function () {
    listarTipoMedicamento();
};

function filtarTipoMedicamento() {
    let nombre = get("txtTipoMedicamento");
    if (nombre == "") {
        listarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento/?nombre=" + nombre;
        pintar(objTipoMedicamento);
    }

}

let objTipoMedicamento;

async function listarTipoMedicamento() {
    objTipoMedicamento = {
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["id Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadId: "idTipoMedicamento"
    }

    pintar(objTipoMedicamento);

}

function Buscar() {
    let nombreTipoMedicamento = get("txtTipoMedicamento");
    objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento/?nombre=" + nombreTipoMedicamento;
    pintar(objTipoMedicamento);
}

 function Limpiar() {
    listarTipoMedicamento();
    set("txtTipoMedicamento", "");
}

function limpiarTipoMedicamento() {
    limpiarDatos("formBusquedaTipoMedicamento");
    limpiarDatos("frmGestionTipoMedicamento");
    listarTipoMedicamento();
}
 

function guardarTipoMedicamento() {
    let form = document.getElementById("frmGestionTipoMedicamento");
    let frm = new FormData(form);

    Confirmacion(undefined, "¿Está seguro de guardar los cambios?", function () {
        fetchPost("TipoMedicamento/guardarTipoMedicamento", "text", frm, function (res) {
            limpiarDatos("frmGestionTipoMedicamento");
            Exito("Tipo de medicamento guardado correctamente");
            listarTipoMedicamento(); // Llama a pintar para actualizar la tabla
            var oModal = new bootstrap.Modal(document.getElementById('modalTipoMedicamento'));
            oModal.show();
        });
    });
}

function Editar(id) {
    fetchGet("TipoMedicamento/recuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        setName("idTipoMedicamento", data.idTipoMedicamento, "frmGestionTipoMedicamento");
        setName("nombre", data.nombre, "frmGestionTipoMedicamento");
        setName("descripcion", data.descripcion, "frmGestionTipoMedicamento");

        var oModal = new bootstrap.Modal(document.getElementById('modalTipoMedicamento'));
        oModal.show();
    });
}

function Eliminar(objTipoMedicamento) {
    Confirmacion(undefined, "¿Desea eliminar el tipo de medicamento " + objTipoMedicamento.nombre + "?", function () {
        fetchGet("TipoMedicamento/eliminarTipoMedicamento/?idTipoMedicamento=" + objTipoMedicamento.idTipoMedicamento, "text", function (res) {
            Exito("Tipo de medicamento eliminado correctamente");
            listarTipoMedicamento(); // Llama a pintar para actualizar la tabla
        });
    });
}
