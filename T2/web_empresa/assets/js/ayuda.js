function CambioColor() {
    document.bgColor = "gray";
};

document.addEventListener("DOMContentLoaded", function () {
    actualizarEstacion();
});

function actualizarEstacion() {
    var fecha = new Date();
    var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
    var dia = fecha.getDate();

    var estacion, fondo;

    if ((mes === 3 && dia >= 20) || (mes == 6 && dia <=20)) {
        estacion = "Primavera";
        fondo = "url('primavera.jpg')";
    } else if ((mes === 6 && dia >= 21) || (mes == 9 && dia <=21)) {
        estacion = "Verano";
        fondo = "url('verano.jpg')";
    } else if ((mes === 9 && dia >= 22) || (mes == 12 && dia <=20)) {
        estacion = "Otoño";
        fondo = "url('otono.jpg')";
    } else {
        estacion = "Invierno";
        fondo = "url('invierno.jpg')";
    }

    document.body.style.backgroundImage = fondo;
    document.querySelector('p').innerHTML = "La estación del año es: " + estacion;
}

