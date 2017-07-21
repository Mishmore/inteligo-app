function Profile(update) {
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>Genial</h1>')
  var h2= $('<h2>Su perfil es: data.perfil </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: /h3>')
  var div2 = $('<div id="donutchart" style="width: 900px; height: 500px;"></div>');
  var div3 = $('<div class="informacion"></div>');
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail">Acepto los <a>Terminos y Condiciones</a></label>')
  var btn = $('<button type="button" class="btn btn-primary">Conozca más de su perfil</button>');

perfil.append(h1);
perfil.append(h2);
perfil.append(h3);
informacion.append(span1);
informacion.append(span2);
informacion.append(span3);
informacion.append(checkbox);
informacion.append(btn);
container.append(perfil);
container.append(grafico);
container.append(informacion);

btn.on('click', function(e) {
  state.screenView = "description";
  update();
});
return container;
}
