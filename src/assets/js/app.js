var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_LsICO6Fp";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

// var pregunta1 = $('.pregunta1');
// var pregunta2 = $('.pregunta2');
// var pregunta3 = $('.pregunta3');
// var pregunta4 = $('.pregunta4');
// var pregunta5 = $('.pregunta5');
// var pregunta6 = $('.pregunta6');
// var pregunta7 = $('.pregunta7');
// var pregunta8 = $('.pregunta8');
//
// pregunta4.on('change', function(e) {
//   var sumax = parseInt(pregunta1.val()) + parseInt(pregunta2.val()) + parseInt(pregunta3.val()) + parseInt(pregunta4.val());
//   console.log(sumax);
// });
//
// pregunta8.on('change', function(e) {
//   var sumay = parseInt(pregunta5.val()) + parseInt(pregunta6.val()) + parseInt(pregunta7.val()) + parseInt(pregunta8.val());
//   console.log(sumay);
// });
//
// var perfil = null;
//
// var defensivo = [
//                   {
//                     max: [7,4],
//                     arr: []
//                   },
//                   {
//                     max: [5,12],
//                     arr: []
//                   },
//                   {
//                     max: [3,20],
//                     arr: []
//                   }
//                 ];
//
// var createBlock = function(perfil, index) {
//    for (var i = 0; i <= perfil[index].max[0]; i++) {
//   for (var j = 0; j <= perfil[index].max[1]; j++) {
//     perfil[index].arr.push([i,j]);
//   }
//  }
// }
//
// for (var i = 0; i < defensivo.length; i++) {
//   createBlock(defensivo, i);
// }
//
// var x = 5;
// var y = 10;
// var newCordenada = [];
// newCordenada.push(x,y);
//
// var findProfile = function(newCordenada) {
//   defensivo.forEach(function(e) {
//     e.arr.forEach(function(el) {
//       if (el[0] == newCordenada[0] && el[1] == newCordenada[1]) {
//         perfil = "defensivo"
//         console.log(perfil);
//         return false;
//       }  else {
//         console.log('no encontrado');
//       }
//     });
//   });
// }
//
// findProfile(newCordenada);
