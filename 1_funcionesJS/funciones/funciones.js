let fecha = new Date();
let edad = 18;
let hora;
function Encender() {
    alert();
}
function Inicio() {
    alert("La hora de conexión es " + fecha.getHours() + ":" + fecha.getMinutes());
    if (hora > 7 && hora < 14) {
        alert("Buenos días");
    } else if (hora > 14 && hora < 20) {
        alert("Buenas tardes");
    } else{
        alert("Buenas noches");
    }
}
function miEdad() {
    var edad = document.getElementById("edad").value;
    if (edad > 17) {
        alert("Apto");
    } else {
        alert("No Apto");
    }
}

// Prueba de que sincroniza
// prueba 2