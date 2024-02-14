// function saberestacion() {

//     // Obtener la fecha actual
//     var fechaActual = new Date();

//     // Determinar la estación del año
//     var estacion;
//     var dia = fechaActual.getDay();
//     var mes = fechaActual.getMonth() + 1; // Sumar 1 para que sea del 1-12
//     if ((mes === 3 && dia >= 20) || (mes == 6 && dia <= 20)) {
//         estacion = "primavera";
//     } else if ((mes === 6 && dia >= 21) || (mes == 9 && dia <= 21)) {
//         estacion = "verano";
//     } else if ((mes === 9 && dia >= 22) || (mes == 12 && dia <= 20)) {
//         estacion = "otoño";
//     } else {
//         estacion = "invierno";
//     }
//     var urlImagen = "assets/img/" + estacion + ".png";

//     // Poner la img
//     var imagen = document.getElementById("imagenRecuadro");
//     imagen.src = urlImagen;
//     document.getElementById('estacion').textContent = `Estamos en ${estacion}`;
// }

function saberestacion() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate() + 1;
    var mes = fechaActual.getMonth() + 1;
    switch (mes) {
        case 1:
            {
                alert("Invierno");

                break;
            }
        case 2:
            {
                alert("Invierno");

                break;
            }
        case 3:
            {
                if (dia < 20) {
                    alert("Invierno");
                } else {
                    alert("Primavera");
                };

                break;
            }
        case 4:
            {
                alert("Primavera");

                break;
            }
        case 5:
            {
                alert("Primavera");

                break;
            }
        case 6:
            {
                if (dia < 21 ) {
                    alert("Primavera");
                }
                else{
                    alert("Verano");
                };
                break;
            }
        case 7:
            {
                alert("Verano");

                break;
            }
        case 8:
            {
                alert("Verano");

                break;
            }
        case 9:
            {
                if (dia < 22) {
                    alert("Verano");
                }
                else{
                    alert("Otoño");
                };
                break;
            }
        case 10:
            {
                alert("Otoño");

                break;
            }
        case 11:
            {
                alert("Otoño");

                break;
            }
        case 12:
            {
                if (dia < 21) {
                    alert("Otoño");
                } else{
                    alert("Invierno");
                };

                break;
            }
    }
}