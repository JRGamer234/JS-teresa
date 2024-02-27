function nota(examen) {
    var resultado=0;
    for (i=0;i<examen.elements.length;i++)
       if ((examen.elements[i].type=="radio") &&
          (examen.elements[i].value=="bien") &&
          (examen.elements[i].checked))
            resultado++;
    alert("Acertaste "+resultado+" de 5 preguntas.");
    return false;
  }
  