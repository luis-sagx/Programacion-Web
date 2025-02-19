window.onload = function () {
    listarTipoMedicamento();
};

async function listarTipoMedicamento() {
    fetchGet("TipoMedicamento/listarTipoMedicamento", "text", function (res) {
        alert(res);
    });
}
