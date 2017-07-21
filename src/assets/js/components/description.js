function Profile(update) {
  var container = $('<div class="container"></div>');
  var h1= $('<h1>Perfil Conservador </h1>')
  var div1 = $('<div class="grafico"><img src="https://d500.epimg.net/cincodias/imagenes/2016/08/19/mercados/1471614030_865280_1471702913_noticia_normal.jpg"></img></div>');
  var p1=$('<p>Puede tolerar el riesgo, pero valora su dinero, le gusta saber con certeza cuanto genera su inversion.</p>');
  var btn = $('<button type="button" class="btn btn-primary">Hágase cliente nuestro</button>');

perfil.append(h1);
perfil.append(h2);
perfil.append(h3);
container.append(perfil);
container.append(grafico);
informacion.append(span1);
informacion.append(span2);
informacion.append(span3);
informacion.append(checkbox);
informacion.append(btn);
container.append(informacion);

btn.on('click', function(e) {
  state.screenView = "register";
  update();
});
return container;
}
