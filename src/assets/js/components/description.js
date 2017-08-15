function Description(update) {
  var container = $('<div class="container"></div>');
  var h1= $('<h1>'+perfil+'</h1>')
  var div1 = $('<div class="grafico"><img src="https://d500.epimg.net/cincodias/imagenes/2016/08/19/mercados/1471614030_865280_1471702913_noticia_normal.jpg"></img></div>');
  var p1=$('<p>Puede tolerar el riesgo, pero valora su dinero, le gusta saber con certeza cuanto genera su inversion.</p>');
  var btn = $('<button type="button" class="btn btn-primary">Hágase cliente nuestro</button>');

  div1.append(p1);
  div1.append(btn);
  container.append(h1);
  container.append(div1);

  btn.on('click', function(e) {
    state.screenView = "register";
    update();
  });
  return container;
}
