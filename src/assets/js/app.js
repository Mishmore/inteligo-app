var pregunta1 = $('.pregunta1');
var pregunta2 = $('.pregunta2');
var pregunta3 = $('.pregunta3');
var pregunta4 = $('.pregunta4');
var pregunta5 = $('.pregunta5');
var pregunta6 = $('.pregunta6');
var pregunta7 = $('.pregunta7');
var pregunta8 = $('.pregunta8');

pregunta4.on('change', function(e) {
  var sumax = parseInt(pregunta1.val()) + parseInt(pregunta2.val()) + parseInt(pregunta3.val()) + parseInt(pregunta4.val());
  console.log(sumax);
});

pregunta8.on('change', function(e) {
  var sumay = parseInt(pregunta5.val()) + parseInt(pregunta6.val()) + parseInt(pregunta7.val()) + parseInt(pregunta8.val());
  console.log(sumay);
});

var defensivo = [
                  {
                    max: [7,4],
                    arr: []
                  },
                  {
                    max: [5,12],
                    arr: []
                  },
                  {
                    max: [3,20],
                    arr: []
                  }
                ];

var createBlock = function(perfil, index) {
   for (var i = 0; i <= perfil[index].max[0]; i++) {
  for (var j = 0; j <= perfil[index].max[1]; j++) {
    perfil[index].arr.push([i,j]);
  }
 }
}

for (var i = 0; i < defensivo.length; i++) {
  createBlock(defensivo, i);
}

console.log(defensivo);

var x = 5;
var y = 10;
var newCordenada = [];
newCordenada.push(x,y);

var findProfile = function(newCordenada) {
  defensivo.forEach(function(e) {
    e.arr.forEach(function(el) {
      if (el[0] == newCordenada[0] && el[1] == newCordenada[1]) {
        console.log('defensivo encontrado');
        return false;
      }  else {
        console.log('no encontrado');
      }
    });
  });
}

findProfile(newCordenada);
