function kmToMetros(kilometros) {
    return kilometros * 1000;
}


function metrosToCentimetros(metros) {
    return metros * 100;
}


function piesToPulgadas(pies) {
    return pies * 12;
}


function yardasToPulgadas(yardas) {
    return yardas * 36;
}


function convertirUnidades() {
    const valor = parseFloat(document.getElementById("valorInput").value);
    const unidadOriginal = document.getElementById("unidadOriginal").value;
    const unidadConvertir = document.getElementById("unidadConvertir").value;

    let resultado;

    switch (unidadOriginal) {
        case "km":
            resultado = kmToMetros(valor); 
            break;
        case "m":
            resultado = metrosToCentimetros(valor);
            break;
        case "cm":
            resultado = metrosToCentimetros(valor);
            break;
        case "ft":
            resultado = piesToPulgadas(valor);
            break;
        case "yd":
            resultado = yardasToPulgadas(valor);
            break;
        default:
            resultado = "Unidad no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}


function limpiarCampos() {
    document.getElementById("valorInput").value = "";
    document.getElementById("resultado").textContent = "";
}
