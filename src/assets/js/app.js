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
