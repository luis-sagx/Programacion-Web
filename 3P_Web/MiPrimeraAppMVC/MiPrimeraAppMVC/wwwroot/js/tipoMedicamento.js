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
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
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

