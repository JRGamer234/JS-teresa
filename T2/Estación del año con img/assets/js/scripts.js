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
var fechaActual = new Date();
let dias = fechaActual.getDate() + 1;
let mes = fechaActual.getMonth() + 1;
let dia = fechaActual.getDay();
let alos = fechaActual.getFullYear();


<<<<<<< HEAD
=======

// Crear un array con los nombres de los días de la semana
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Obtener la fecha actual
var fecha = new Date();

// Obtener el número del día de la semana (0 para Domingo, 1 para Lunes, etc.)
var dia = fecha.getDay();

// Obtener el nombre del día de la semana utilizando el array
var nombreDia = diasSemana[dia];

// Mostrar el nombre del día de la semana en un alert
alert("Hoy es " + nombreDia);


// function saberestacion() {
//     switch (mes) {
//         case 3:
//             {
//                 if (dia < 20) {
//                     alert("Invierno");
//                 } else {
//                     alert("Primavera");
//                 };
>>>>>>> cbd7be63f58ab325b3ed1b5f4ab519d66858abe2


var DiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var nombreDia = DiasSemana[dia];

meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var nombreMes = meses[mes];

function saberestacion() {
    switch (mes) {
        case 3:
            {
                if (dia < 20) {
                    alert("Invierno");
                } else {
                    alert("Primavera");
                };

                break;
            }
        case 6:
            {
                if (dia < 21) {
                    alert("Primavera");
                }
                else {
                    alert("Verano");
                };
                break;
            }
        case 9:
            {
                if (dia < 22) {
                    alert("Verano");
                }
                else {
                    alert("Otoño");
                };
                break;
            }
        case 12:
            {
                if (dia < 21) {
                    alert("Otoño");
                } else {
                    alert("Invierno");
                };

                break;
            }
        default: {
            if (mes == 1 || mes == 2) {
                alert("Invierno");
            } else if (mes == 4 || mes == 5) {
                alert("Primavera");
            } else if (mes == 10 || mes == 11) {
                alert("Otoño");
            }
            break;

        }
    }
}

document.getElementById('imprimir').innerHTML =  "Hoy es " + nombreDia + " " + dia + " de " + nombreMes + " de " + alos;

<<<<<<< HEAD
=======
    alert("Hoy es " + DiasSemana + dia + " de " + meses + " de " + año);
};
>>>>>>> cbd7be63f58ab325b3ed1b5f4ab519d66858abe2
