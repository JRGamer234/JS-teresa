function CambioColor() {
    document.bgColor = "gray";
};

function Inicio() {
    alert("La hora de conexión es " + fecha.getHours() + ":" + fecha.getMinutes());
    if (hora > 7 && hora < 21) {
        document.body.style.backgroundImage="url('assets/img/dia.jpg')";
    } else{
        document.body.style.backgroundImage="url('assets/img/noche.jpg')";
    }
}
