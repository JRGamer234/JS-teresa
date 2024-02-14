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
    var dias = fechaActual.getDay() + 1;
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
            if(mes == 1 || mes == 2){
                alert("Invierno");
            }else if(mes == 4 || mes == 5){
                alert("Primavera");
            }else if(mes == 10 || mes == 11){
                alert("Otoño");
            }
            break;

        }
    }
    switch(dias){
        case 1:{
            alert("Lunes");
        }
        case 2:{
            alert("Martes");
        }
        case 3:{
            alert("Miércoles");
        }
        case 4:{
            alert("Jueves");
        }
        case 5:{
            alert("Viernes");
        }
        case 6:{
            alert("Sábado");
        }
        case 7:{
            alert("Domingo");
        }
    }

    alert("Día: " + dias + " Dia: " + dia + " Mes: " + mes);
}

