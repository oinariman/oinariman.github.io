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

var dates = ["2016/10/23", "2016/10/30", "2016/11/6"];
var data = [
    [42.35, 43.50, 33.59],
    [51.11, 51.11, 61.69],
    [12.0, 25.91, 17.38],
    [70.0, 70.0, 68.0],
    [25.0, 25.0, 33.33],
    [35.0, 35.0, 38.18],
    [40.71, 40.75, 38.28]
]

// insert values

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
