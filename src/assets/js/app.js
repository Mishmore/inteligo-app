var pregunta1 = $('.pregunta1');
var pregunta2 = $('.pregunta2');
var pregunta3 = $('.pregunta3');
var pregunta4 = $('.pregunta4');
var pregunta5 = $('.pregunta5');
var pregunta6 = $('.pregunta6');
var pregunta7 = $('.pregunta7');
var pregunta8 = $('.pregunta8');

var perfil,sumax,sumay;
var matrizLength = 4*8;

var matriz=new Array(matrizLength);

pregunta4.on('change', function(e) {
  sumax = parseInt(pregunta1.val()) + parseInt(pregunta2.val()) + parseInt(pregunta3.val()) + parseInt(pregunta4.val());
  console.log(sumax);
});

pregunta8.on('change', function(e) {
  sumay = parseInt(pregunta5.val()) + parseInt(pregunta6.val()) + parseInt(pregunta7.val()) + parseInt(pregunta8.val());
  console.log(sumay);
  //total.y = sumay;
  prueba();
});

function prueba() {
  for (i = 0; i < matrizLength; i++) {
    matriz[i] = new Array(3);
  }
  for (i = 0; i < matrizLength; i++) {
    for (e=0; e < matrizLength; e++) {
      matriz[i][e] = i +","+ e;
    }
  }
  comparar(0,7,0,4, "defensivo");
  comparar(0,5,5,12, "defensivo");
  comparar(0,3,13,20, "defensivo");

  comparar(8,17,0,4, "altamente conservador");
  comparar(6,15,5,12, "altamente conservador");
  comparar(4,13,14,20, "altamente conservador");
  comparar(0,11,22,28, "altamente conservador");
  comparar(0,9,30,32, "altamente conservador");

  comparar(19,31,0,4, "conservador");
  comparar(17,31,6,12, "conservador");
  comparar(15,25,14,20, "conservador");
  comparar(13,23,22,28, "conservador");
  comparar(11,21,30,32, "conservador");

  comparar(27,31,14,20, "moderado");
  comparar(25,27,22,28, "moderado");
  comparar(23,25,30,32, "moderado");

  comparar(29,31,22,28, "agresivo");
  comparar(27,31,30,32, "agresivo");
}
function comparar(valorxInicial,valorxFinal,valoryInicial,valoryFinal, parametroPerfil) {
  for (i = valorxInicial; i <= valorxFinal; i++) {
    for (e = valoryInicial; e <= valoryFinal; e++) {
    var valor = sumax + "," + sumay
      if(matriz[i][e] == valor){
        perfil = parametroPerfil;
        console.log(perfil);
      }
    }
  }
}


// Initialize Firebase
