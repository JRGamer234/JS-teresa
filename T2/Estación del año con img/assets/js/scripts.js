
function saberestacion() {

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Determinar la estación del año
    var estacion;
    var mes = fechaActual.getMonth() + 1; // Sumar 1 para que sea del 1-12
    if ((mes === 3 && dia >= 20) || (mes == 6 && dia <= 20)) {
        estacion = "primavera";
    } else if ((mes === 6 && dia >= 21) || (mes == 9 && dia <= 21)) {
        estacion = "verano";
    } else if ((mes === 9 && dia >= 22) || (mes == 12 && dia <= 20)) {
        estacion = "otoño";
    } else {
        estacion = "invierno";
    }
    var urlImagen = "assets/img/" + estacion + ".png";

    // Poner la img
    var imagen = document.getElementById("imagenRecuadro");
    imagen.src = urlImagen;
    document.getElementById('estacion').textContent = `Estamos en ${estacion}`;
}