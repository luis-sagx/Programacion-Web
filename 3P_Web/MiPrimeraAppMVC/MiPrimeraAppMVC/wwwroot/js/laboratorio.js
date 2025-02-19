window.onload = function () {
    listarLaboratorios();
};

let objLaboratorio;

async function listarLaboratorios() {
    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["id Laboratorio", "Nombre", "Direccion", "Persona Contacto"],
        propiedades: ["iidLaboratorio", "nombre", "direccion", "personaContacto"],
        divContenedorTabla: "divContenedorTabla"
    }

    pintar(objLaboratorio);

}

function buscarLaboratorio() {
    let form = document.getElementById("formBusqueda");
    let frm = new FormData(form);

    fetchPost("Laboratorio/filtrarLaboratorios", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function limpiarLaboratorio() {
    limpiarDatos("formBusqueda");
    listarLaboratorios();
}