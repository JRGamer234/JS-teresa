function Contador() {
    var fecha=new Date ();
    if (!(num=consultarGalleta("VisitasAlCursoDeJavaScript")))
      num = 0;
    num++;
    mandarGalleta("VisitasAlCursoDeJavaScript", num, fecha);
    if (num==1)
      document.write("esta es la primera vez que lees este capítulo.");
    else {
      document.write("has visitado este curso "+num+" veces.");
    }
  }
