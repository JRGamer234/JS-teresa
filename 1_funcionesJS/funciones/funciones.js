let fecha = new Date();
var edad = Text();
function Encender() {
    alert();
}
function Inicio() {
    alert("La hora de conexión es " + fecha.getHours() + ":" + fecha.getMinutes());
    if (fecha.getHours(8-14)) {
        alert("Buenos días");
    } else if (fecha.getHours(15-20)) {
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
