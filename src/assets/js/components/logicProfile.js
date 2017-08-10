var documento ="";
var sumaX = 0;
var sumaY = 0;
var pregunta1 = 0;
var pregunta2 = 0;
var pregunta3 = 0;
var pregunta4 = 0;
var pregunta5 = 0;
var pregunta6 = 0;
var pregunta7 = 0;
var pregunta8 = 0;

var perfil;
var matrizLength = 4*8;
var matriz=new Array(matrizLength);

  function prueba(id) {
    for (i = 0; i < matrizLength; i++) {
      matriz[i] = new Array(3);
    }
    for (i = 0; i < matrizLength; i++) {
      for (e=0; e < matrizLength; e++) {
        matriz[i][e] = i +","+ e;
      }
    }
    comparar(0,7,0,4, "defensivo",id);
    comparar(0,5,5,12, "defensivo",id);
    comparar(0,3,13,20, "defensivo");

    comparar(8,17,0,4, "altamente conservador",id);
    comparar(6,15,5,12, "altamente conservador",id);
    comparar(4,13,14,20, "altamente conservador",id);
    comparar(0,11,22,28, "altamente conservador",id);
    comparar(0,9,30,32, "altamente conservador",id);

    comparar(19,31,0,4, "conservador",id);
    comparar(17,31,6,12, "conservador",id);
    comparar(15,25,14,20, "conservador",id);
    comparar(13,23,22,28, "conservador",id);
    comparar(11,21,30,32, "conservador",id);

    comparar(27,31,14,20, "moderado",id);
    comparar(25,27,22,28, "moderado",id);
    comparar(23,25,30,32, "moderado",id);

    comparar(29,31,22,28, "agresivo",id);
    comparar(27,31,30,32, "agresivo",id);
  }

  function comparar(valorxInicial,valorxFinal,valoryInicial,valoryFinal, parametroPerfil,id) {
    for (i = valorxInicial; i <= valorxFinal; i++) {
      for (e = valoryInicial; e <= valoryFinal; e++) {
        var valor = sumaX + "," + sumaY
        if(matriz[i][e] == valor){
          perfil = parametroPerfil;
        }
      }
    }
  }
