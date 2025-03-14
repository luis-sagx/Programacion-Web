window.onload = function () {
    ListarTipoMedicamento();
}

let objTipoMedicamento;

async function ListarTipoMedicamento() {

    objTipoMedicamento = {
        url: "TipoMedicamento/ListarTipoMedicamento",
        cabeceras: ["Id tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadID: "idTipoMedicamento"
    }

    pintar(objTipoMedicamento);
}

function FiltrarTipoMedicamento() {
    let nombre = get("txtNombreTipoMedicamento");

    if (nombre == "") {
        ListarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombre,
        pintar(objTipoMedicamento);
    }
}

function Buscar() {
    let nombreTipoMedicamento = get("txtNombreTipoMedicamento");
    objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombreTipoMedicamento,
    pintar(objTipoMedicamento);
}

function Limpiar() {
    ListarTipoMedicamento();
    set("txtNombreTipoMedicamento", "");
}

function LimpiarTipoMedicamento() {
    LimpiarDatos("frmTipoMedicamento");
}

function GuardarTipoMedicamento() {
    let form = document.getElementById("frmTipoMedicamento");
    let frm = new FormData(form);
    fetchPost("TipoMedicamento/GuardarTipoMedicamento", "text", frm, function (res) {
        // Perform other operations first
        LimpiarDatos("frmTipoMedicamento");
        Exito("Registro Guardado con Exito");
        ListarTipoMedicamento();

        // Hide the modal
        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalTipoMedicamento'));
        myModal.hide();
    });
}

function MostrarModal() {
    LimpiarDatos("frmTipoMedicamento");
    var myModal = new bootstrap.Modal(document.getElementById('modalTipoMedicamento'));
    myModal.show();
}

function Editar(id) {
    fetchGet("TipoMedicamento/RecuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        setN("idTipoMedicamento", data.idTipoMedicamento);
        setN("nombre", data.nombre);
        setN("descripcion", data.descripcion);

        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('modalTipoMedicamento'));
        myModal.show();
    });
}

function Eliminar(id) {
    fetchGet("TipoMedicamento/RecuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar el tipo de medicamento " + data.nombre + " ?", function () {
            fetchGet("TipoMedicamento/EliminarTipoMedicamento/?idTipoMedicamento=" + id, "text", function (r) {
                Exito("Registro Eliminado con Exito");
                ListarTipoMedicamento();
            });
        });
    });
}
