// constants

var labels = ['Mechanics','UI','Level Design','Art','Sound','Music','Overall'];
var colors = [
    'rgba(0,0,255,0.5)',
    'rgba(255,0,255,0.5)',
    'rgba(255,255,0,0.5)',
    'rgba(255,0,0,0.5)',
    'rgba(255,127,127,0.5)',
    'rgba(127,127,255,0.5)',
    'rgba(0,255,255,1)'
];

// data

var dates = [
"2016/10/23",
"2016/10/30",
"2016/11/6",
"2016/11/13",
"2016/11/20",
"2016/11/27",
"2016/12/4",
"2016/12/11"
];
var data_rows = [
    [42.35, 51.11, 12.0 , 70.0 , 25.0 , 35.0 , 40.71],
    [43.50, 51.11, 25.91, 70.0 , 25.0 , 35.0 , 40.75],
    [33.59, 61.69, 17.38, 68.0 , 33.33, 38.18, 38.28],
    [34.53, 61.69, 17.38, 68.0 , 33.33, 38.18, 38.78],
    [35.81, 61.69, 17.38, 68.0 , 33.33, 38.18, 39.28],
    [36.79, 61.69, 17.38, 74.17, 33.33, 38.18, 44.03],
    [33.13, 61.69, 13.93, 63.31, 33.33, 38.18, 40.33],
    [33.42, 53.90, 15.69, 63.31, 33.33, 38.18, 39.90]
];

// insert values

var data = new Array();
for (var j = 0; j < labels.length; j++) {
    var values = new Array(dates.length);
    for (var i = 0; i < dates.length; i++) {
	values[i] = data_rows[i][j];
    }
    data.push(values);
}

for (var i = 0; i < labels.length; i++) {
    var row = data[i];
    var value = row[row.length-1];
    $("#progress").append("<tr><th>" + labels[i] + "</th><td>" + sprintf("%0.1f",value) + " %</td></tr>");
}
$(".progress-update").html("Updated: " + dates[dates.length-1]);

// drawing

var datasets = new Array();
for (var i = 0; i < labels.length; i++) {
    var dataset = new Object();
    dataset.label = labels[i];
    dataset.fill = false;
    dataset.data = data[i];
    dataset.borderColor = colors[i];
    dataset.borderWidth = 1;
    dataset.lineTension = 0.0;
    if ( i == labels.length - 1 ) { dataset.borderWidth = 4; }
    datasets.push(dataset);
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
	labels: dates,
	datasets: datasets
    },
    options: {
	scales: {
	    yAxes: [{
		ticks: {
		    beginAtZero:true,
		    max: 100,
		}
	    }]
	},
	hover: { mode: 'label' },
	legend: { boxWidth: 16 }
    }
});
