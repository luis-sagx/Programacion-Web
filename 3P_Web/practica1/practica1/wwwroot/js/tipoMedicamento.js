window.onload = function () {
    listarTipoMedicamento();
};

async function listarTipoMedicamento() {
    pintar({
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["Id Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    })
}