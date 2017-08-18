var status=Math.floor(Math.random() * 5) + 1  ;

//first pie agresivo
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		["Issues", "Amount given"],
		["Caja y Equivalentes",2],
		["Renta Fija", 28],
		["Renta Variable", 50],
		["Renta Alternativa ", 20]

	]);

	var options = {
		 legend:{position: 'bottom', textStyle: {color: 'black', fontSize: 14}},
		fontSize:16,
    colors: [ '#08165A', '#213F9A', '#2879BD', '#4C4C4E'],
		pieHole: 0.3,
		pieSliceTextStyle: {
		color: "white",

		},
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("donut_single0")
	);
	chart.draw(data, options);
}

//second pie Defensivo//

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
	var data1 = google.visualization.arrayToDataTable([
		["Issues", "Amount given"],
		["Caja y Equivalentes",100],
		["Renta Fija", 0],
		["Renta Variable", 0],
		["Renta Alternativa ", 0]

	]);

	var options1 = {
		legend:{position: 'bottom', textStyle: {color: 'black', fontSize: 14}},
		fontSize:16,
    colors: [ '#08165A', '#213F9A', '#2879BD', '#4C4C4E'],
		pieHole: 0.3,
		pieSliceTextStyle: {
		color: "black",

		},
	};

	var chart1 = new google.visualization.PieChart(
		document.getElementById("donut_single1")
	);
	chart1.draw(data1, options1);
}
//third pie moderado //
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
	var data2 = google.visualization.arrayToDataTable([
		["Issues", "Amount given"],
		["Caja y Equivalentes",5],
		["Renta Fija", 48],
		["Renta Variable", 35],
		["Renta Alternativa ", 12]

	]);

	var options2 = {
		legend:{position: 'bottom', textStyle: {color: 'black', fontSize: 14}},
		fontSize:16,
    colors: [ '#08165A', '#213F9A', '#2879BD', '#4C4C4E'],
		pieHole: 0.3,
		pieSliceTextStyle: {
		color: "white",

		},
	};

	var chart2 = new google.visualization.PieChart(
		document.getElementById("donut_single2")
	);
	chart2.draw(data2, options2);
}
//four pie conservador//

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
	var data3 = google.visualization.arrayToDataTable([
		["Issues", "Amount given"],
		["Caja y Equivalentes",10],
		["Renta Fija", 73],
		["Renta Variable", 12],
		["Renta Alternativa ", 5]
	]);

	var options3 = {
		legend:{position: 'bottom', textStyle: {color: 'black', fontSize: 14}},
		fontSize:16,
    colors: [ '#08165A', '#213F9A', '#2879BD', '#4C4C4E'],
		pieHole: 0.3,
		pieSliceTextStyle: {
		color: "white",

		},
	};

	var chart3 = new google.visualization.PieChart(
		document.getElementById("donut_single3")
	);
	chart3.draw(data3, options3);
}
//five pie altamente conservador//


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
	var data4 = google.visualization.arrayToDataTable([
		["Issues", "Amount given"],
		["Caja y Equivalentes",40],
		["Renta Fija", 60],
		["Renta Variable", 0],
		["Renta Alternativa ", 0]

	]);

	var options4 = {
		legend:{position: 'bottom', textStyle: {color: 'black', fontSize: 14}},
		fontSize:16,
    colors: [ '#08165A', '#213F9A', '#2879BD', '#4C4C4E'],
		pieHole: 0.3,
		pieSliceTextStyle: {
		color: "white",

		},
	};

	var chart4 = new google.visualization.PieChart(
		document.getElementById("donut_single4")
	);
	chart4.draw(data4, options4);
}