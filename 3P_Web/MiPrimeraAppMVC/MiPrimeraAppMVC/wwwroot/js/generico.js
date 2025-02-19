function get(idControl) {
    return document.getElementById(idControl).value;
}

function getName(nameControl) {
    return document.getElementByName(nameControl)[0].value;
}

function set(idControl, valor) {
    document.getElementById(idControl).value = valor;
}

function setName(nameControl, valor) {
    let elementos = document.getElementsByName(nameControl);
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].value = valor;
    }
}
function limpiarDatos(idFormulario) {
    let elementosName = document.querySelectorAll('#' + idFormulario + " [name]");
    elementosName.forEach(elemento => elemento.value = "");
}


async function fetchGet(url, tipoRespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = `${window.location.protocol}//${window.location.host}/${url}`;

        let res = await fetch(urlCompleta);
        if (tipoRespuesta === "json") {
            res = await res.json();
        } else if (tipoRespuesta === "text") {
            res = await res.text();
        }

        callback(res);
    } catch (e) {
        alert("Ocurrió un problema: " + e.message);
    }
}

async function fetchPost(url, tipoRespuesta, frm, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = `${window.location.protocol}//${window.location.host}/${url}`;

        let res = await fetch(urlCompleta, { 
            method: "POST",
            body: frm
        });

        if (tipoRespuesta === "json") {
            res = await res.json();
        } else if (tipoRespuesta === "text") {
            res = await res.text();
        }

        callback(res);

    } catch (e) {
        alert("Ocurrió un error en post");
    }
}


let objConfiguracionGlobal;

//{url: "", cebeceras[], propiedades: []}
function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;

    if (objConfiguracionGlobal.divContenedorTabla == undefined) {
        objConfiguracionGlobal.divContenedorTabla = "divContenedorTabla";
    }

    fetchGet(objConfiguracion.url, "json", function (res) {
        let contenido = "";

        contenido = "<div id='divContenedorTabla'>"
        contenido += generarTabla(res);
        contenido += "</div>"
        document.getElementById("divTable").innerHTML = contenido;
    })
}
function generarTabla(res) {
    let contenido = "";
    let cabeceras = objConfiguracionGlobal.cabeceras;
    let propiedades = objConfiguracionGlobal.propiedades;
    contenido += "<table class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";

    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<th>" + cabeceras[i] + "</th>"
    }
    
    //contenido += "<th>Id Tipo Medicamento</th>";
    //contenido += "<th>Nombre</th>";
    //contenido += "<th>Descripción</th>";
    contenido += "</tr>";
    contenido += "</thead>";

    let numRegistros = res.length;
    let obj;
    let propiedadActual;
    contenido += "<tbody>";

    for (let i = 0; i < numRegistros; i++) {
        obj = res[i];
        contenido += "<tr>";
        for (let j = 0; j < propiedades.length; j++) {
            propiedadActual = propiedades[j];
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }
        //contenido += `<td>${obj.idTipoMedicamento}</td>`;
        //contenido += `<td>${obj.nombre}</td>`;
        //contenido += `<td>${obj.descripcion}</td>`;
        contenido += "</tr>";
    }

    contenido += "</tbody>";
    contenido += "</table>";
    return contenido;
}

