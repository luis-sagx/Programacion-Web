window.onload = function () {
    ListarLaboratorio();
}

let objLaboratorio;
async function ListarLaboratorio() {

    objLaboratorio = {
        url: "Laboratorio/ListarLaboratorio",
        cabeceras: ["Id Laboratorio", "Nombre", "Direccion", "Persona Contacto", "Numero Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "personaContacto", "numeroContacto"],
        divContenedorTabla: "divContenedorTabla",
        editar: true,
        eliminar: true,
        propiedadID: "idLaboratorio"
    }

    pintar(objLaboratorio);
}

function BuscarLaboratorio() {
    let form = document.getElementById("frmBusqueda");
    let frm = new FormData(form);

    fetchPost("Laboratorio/FiltrarLaboratorio", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function LimpiarLaboratorio() {

    LimpiarDatos("frmLaboratorio");
    ListarLaboratorio();
}
function GuardarLaboratorio() {
    let form = document.getElementById("frmLaboratorio");
    let frm = new FormData(form);
    fetchPost("Laboratorio/GuardarLaboratorio", "text", frm, function (res) {
        // Perform other operations first
        LimpiarDatos("frmLaboratorio");
        Exito("Registro Guardado con Exito");
        ListarLaboratorio();

        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalLaboratorio'));
        myModal.hide();
    });
}

function MostrarModal() {
    LimpiarDatos("frmLaboratorio");
    var myModal = new bootstrap.Modal(document.getElementById('modalLaboratorio'));
    myModal.show();
}



function Editar(id) {
    fetchGet("Laboratorio/RecuperarLaboratorio/?idLaboratorio=" + id, "json", function (data) {
        setN("idLaboratorio", data.idLaboratorio);
        setN("nombre", data.nombre);
        setN("direccion", data.direccion);
        setN("personaContacto", data.personaContacto);
        setN("numeroContacto", data.numeroContacto);

        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('modalLaboratorio'));
        myModal.show();
    });
}
function Eliminar(id) {
    fetchGet("Laboratorio/RecuperarLaboratorio/?idLaboratorio=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar el laboratorio " + data.nombre + " ?", function () {
            fetchGet("Laboratorio/EliminarLaboratorio/?idLaboratorio=" + id, "text", function (r) {
                Exito("Registro Eliminado con Exito");
                ListarLaboratorio();
            });
        });
    });
}

