function Profile() {
  prueba();
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>Genial</h1>')
  var h2= $('<h2>Su perfil es:'+perfil+' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var img = $('<img src="assets/assets/img/chartpie.jpg" alt="">');
  var div2 = $('<div class="informacion"></div>');
  var div3 = $('<div class="informacion"></div>');
  var span1=$('<span class="texto">  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto">Mejor Año:27% </span>');
  var span3=$('<span class="texto">Peor Año:16.09%</span>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail">Acepto los <a>Terminos y Condiciones</a></label>')
  var btn = $('<button type="button" class="btn btn-primary">Conozca más de su perfil</button>');

  container.append(div1);
  container.append(div2);
  div1.append(h1);
  div1.append(h2);
  div1.append(h3,img,span1,span2,span3,checkbox,btn,img);
  div2.append(btn);
  // var chart = new google.visualization.PieChart(div3.id);
  // chart.draw(data, options);
  // google.charts.load("current", {packages:["corechart"]});
  // google.charts.setOnLoadCallback(drawChart);
  // function drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     ['inversion', 'Percent'],
  //     ['Caja',     10],
  //     ['Renta fija', 73],
  //     ['Renta variable',  12],
  //     ['Renta alternativa',      5],
  //   ]);
  //
  //   var options = {
  //     title: 'Plan de Inversion',
  //     pieHole: 0.4,
  //     colors: ['#08165A', '#213F9A', '#2879BD', '#4C4C4E']
  //   };
  //
  //   var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  //   chart.draw(data, options);
  // }

    btn.on('click', function(e) {
      state.screenView = "description";
      update();
    });
  // console.log(p.id);

  return container;
}
