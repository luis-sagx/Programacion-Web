window.onload = function () {
    ListarMedicamento();
    ListarTipoMedicamento();
    ListarLaboratorio();
}

let objMedicamento;

async function ListarMedicamento() {
    objMedicamento = {
        url: "Medicamento/ListarMedicamento",
        cabeceras: ["Id Medicamento", "Codigo", "Nombre Medicamento", "Tipo Medicamento", "Laboratorio", "Uso Medicamento", "Contenido"],
        propiedades: ["idMedicamento", "codigo", "nombreMedicamento", "tipoMedicamento", "nombreLaboratorio", "usoMedicamento", "contenido"],
        editar: true,
        eliminar: true,
        propiedadID: "idMedicamento"
    }
    pintar(objMedicamento);
}

function ListarTipoMedicamento() {
    fetchGet("TipoMedicamento/ListarTipoMedicamento", "json", function (data) {
        data.forEach((tipoMedicamento) => {
            let option = document.createElement("option");
            option.value = tipoMedicamento.idTipoMedicamento;
            option.text = tipoMedicamento.nombre;
            document.getElementById("tipoMedicamento").appendChild(option);
        });
    });
}

function ListarLaboratorio() {
    fetchGet("Laboratorio/ListarLaboratorio", "json", function (data) {
        data.forEach((laboratorio) => {
            let option = document.createElement("option");
            option.value = laboratorio.idLaboratorio;
            option.text = laboratorio.nombre;
            document.getElementById("laboratorio").appendChild(option);
        });
    });
}

function LimpiarMedicamento() {
    LimpiarDatos("frmMedicamento");
    // Remover clases de validación
    let form = document.getElementById("frmMedicamento");
    let inputs = form.querySelectorAll('.form-control');
    inputs.forEach(function (input) {
        input.classList.remove('is-invalid');
    });
}

function MostrarModal() {
    LimpiarMedicamento();
    var myModal = new bootstrap.Modal(document.getElementById('modalMedicamento'));
    myModal.show();
}

function ValidarFormulario() {
    let form = document.getElementById("frmMedicamento");
    let isValid = true;

    // Validar campos de texto
    let camposTexto = ['codigo', 'nombreMedicamento', 'usoMedicamento', 'contenido'];
    camposTexto.forEach(function (campo) {
        let input = form.querySelector('#' + campo);
        if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    // Validar selects
    let selects = ['tipoMedicamento', 'laboratorio'];
    selects.forEach(function (select) {
        let input = form.querySelector('#' + select);
        if (input.value === '') {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    return isValid;
}

function GuardarMedicamento() {
    if (!ValidarFormulario()) {
        console.log("Formulario inválido. Revise los campos.");
        return;
    }

    let form = document.getElementById("frmMedicamento");
    let frm = new FormData(form);
    fetchPost("Medicamento/GuardarMedicamento", "text", frm, function (res) {
        LimpiarMedicamento();
        Exito("Registro Guardado con Exito");
        ListarMedicamento();
        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalMedicamento'));
        myModal.hide();
    });
}

function Editar(id) {
    fetchGet("Medicamento/RecuperarMedicamento?idMedicamento=" + id, "json", function (data) {
        // Llenar los campos del formulario con los datos del medicamento
        setN("idMedicamento", data.idMedicamento);
        setN("codigo", data.codigo);
        setN("nombreMedicamento", data.nombreMedicamento);
        setN("tipoMedicamento", data.idTipoMedicamento);
        setN("laboratorio", data.idLaboratorio);
        setN("usoMedicamento", data.usoMedicamento);
        setN("contenido", data.contenido);

        // Eliminar las clases de validación (is-invalid) de todos los campos
        let form = document.getElementById("frmMedicamento");
        let inputs = form.querySelectorAll('.form-control');
        inputs.forEach(function (input) {
            input.classList.remove('is-invalid');
        });

        // Mostrar el modal
        var myModal = new bootstrap.Modal(document.getElementById('modalMedicamento'));
        myModal.show();
    });
}

function Eliminar(id) {
    fetchGet("Medicamento/RecuperarMedicamento/?idMedicamento=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar el medicamento " + data.nombreMedicamento + " ?", function () {
            fetchGet("Medicamento/EliminarMedicamento/?idMedicamento=" + id, "text", function (r) {
                Exito("Medicamento Eliminado con Exito");
                ListarMedicamento();
            });
        });
    });
}