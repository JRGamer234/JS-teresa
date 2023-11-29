let fecha = new Date();
var edad = Text("¿Cuantos años tienes?");
function Encender() {
    alert();
}
function Inicio() {
    alert("La hora de conexión es " + fecha.getHours() + ":" + fecha.getMinutes());
}
function miEdad() {
    var edad = document.getElementById("edad").value;
    if (edad >= 18) {
        alert('Apto');
    } else {
        alert('No Apto');
    }
}
