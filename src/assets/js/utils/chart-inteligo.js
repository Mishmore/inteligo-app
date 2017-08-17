// Load the Visualization API and the piechart package.
///google.load('visualization', '1.1', {packages: ['line']});

// Set a callback to run when the Google Visualization API is loaded.
///google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('number', '');
  data.addColumn('number', 'Portafolio A');
  data.addColumn('number', 'Portafolio B');
  data.addColumn('number', 'Portafolio C');
  data.addColumn('number', 'Portafolio D');
  data.addColumn('number', 'Portafolio E');


      data.addRows([
        [0,  100, 100, 100, 100,100],
        [1,  100.5, 100.1, 99.9,99.1,98.5],
        [2,  100.9,98.9, 97.5,95.1,93.3],
        [3,  101.6, 101.2, 100.9,99,97.7],
        [4,  102.7,108.3, 112.4,113.8,115.4],
        [5,   103.4, 110.8,116.3,118.3,120.5]
      ]);

  // Set chart options
  var options = {
    chart: {
      title:'Simulación de Trayectorias',
      subtitle: 'en dólares (USD)'
    },

    colors: ['#233e99', '#74adb2','#f7931e',  '#a7a9ac', '#347abe'],

                 'width':  900,
                 'height': 500};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.charts.Line(document.getElementById('chart'));

  chart.draw(data, options);
}
