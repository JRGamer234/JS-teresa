function CambioColor() {
    document.bgColor = "gray";
};

function Inicio() {
    alert("La hora de conexión es " + fecha.getHours() + ":" + fecha.getMinutes());
    if (hora > 7 && hora < 21) {
        imagen.src = "/assets/img/dia.jfif";
    } else{
        imagen.src = "/assets/img/noche.jfif";
    }
}
    // Poner la img
    var imagen = document.getElementById("imagen");
    imagen.src = urlImagen