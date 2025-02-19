window.onload = function () {
    listarTipoMedicamento();
};

async function listarTipoMedicamento() {
    fetchGet("tipoMedicamento/listarTipoMedicamento", "text", function (res) {
        alert(res);
    });
}
