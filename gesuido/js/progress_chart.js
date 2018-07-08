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
"2016/12/11",
"2016/12/18",
"2016/12/25",

"2017/01/01",
"2017/01/08",
"2017/01/15",
"2017/01/22",
"2017/01/29",

"2017/02/05",
"2017/02/12",
"2017/02/19",
"2017/02/26",
"2017/03/05",

"2017/03/12",
"2017/03/19",
"2017/03/26",
"2017/04/02",
"2017/04/09",

"2017/04/16",
"2017/04/23",
"2017/04/30",
"2017/05/07",
"2017/05/14",

"2017/05/21",
"2017/05/28",
"2017/06/04",
"2017/06/11",
"2017/06/18",

"2017/06/25",
"2017/07/02",
"2017/07/09",
"2017/07/16",
"2017/07/23",

"2017/07/30",
"2017/08/06",
"2017/08/13",
"2017/08/20",
"2017/08/27",

"2017/09/03",
"2017/09/10",
"2017/09/17",
"2017/09/24",
"2017/10/01",

"2017/10/08",
"2017/10/15",
"2017/10/22",
"2017/10/29",
"2017/11/05",

"2017/11/12",
"2017/11/19",
"2017/11/26",
"2017/12/03",
"2017/12/10",

"2017/12/17",
"2017/12/24",
"2017/12/31",
"2018/01/07",
"2018/01/14",

"2018/01/21",
"2018/01/28",
"2018/02/04",
"2018/02/11",
"2018/02/18",

"2018/02/25",
"2018/03/04",
"2018/03/11",
"2018/03/18",
"2018/03/25",

"2018/04/01",
"2018/04/08",
"2018/04/15",
"2018/04/22",
"2018/04/29",

"2018/05/06",
"2018/05/13",
"2018/05/20",
"2018/05/27",
"2018/06/03",

"2018/06/10",
"2018/06/17",
"2018/06/24",
"2018/07/01",
"2018/07/08"

];
var data_rows = [
    [42.35, 51.11, 12.0 , 70.0 , 25.0 , 35.0 , 40.71],
    [43.50, 51.11, 25.91, 70.0 , 25.0 , 35.0 , 40.75],
    [33.59, 61.69, 17.38, 68.0 , 33.33, 38.18, 38.28],
    [34.53, 61.69, 17.38, 68.0 , 33.33, 38.18, 38.78],
    [35.81, 61.69, 17.38, 68.0 , 33.33, 38.18, 39.28],

    [36.79, 61.69, 17.38, 74.17, 33.33, 38.18, 44.03],
    [33.13, 61.69, 13.93, 63.31, 33.33, 38.18, 40.33],
    [33.42, 53.90, 15.69, 63.31, 33.33, 38.18, 39.90],
    [34.28, 53.90, 15.69, 63.31, 33.33, 38.18, 40.31],
    [35.47, 53.90, 17.15, 63.67, 33.33, 38.18, 41.11],

    [36.14, 53.90, 17.15, 63.67, 33.33, 38.18, 41.46],
    [39.28, 53.90, 21.53, 67.99, 35.87, 38.18, 44.27],
    [44.32, 53.90, 21.53, 67.99, 35.87, 38.18, 46.89],
    [45.76, 53.90, 21.53, 70.14, 35.87, 38.18, 48.04],
    [46.92, 53.90, 21.53, 70.14, 35.87, 38.18, 48.64],

    [50.20, 53.90, 29.21, 70.14, 35.87, 43.64, 51.59],
    [50.61, 54.62, 29.21, 75.25, 35.87, 43.64, 52.88],
    [52.20, 54.62, 32.06, 71.53, 35.87, 43.64, 53.47],
    [54.20, 55.77, 33.43, 65.18, 35.87, 43.64, 53.61],
    [54.63, 55.77, 33.43, 64.59, 35.87, 43.64, 53.70],

    [58.56, 55.77, 33.43, 67.13, 35.87, 43.64, 56.25],
    [57.72, 55.77, 35.70, 68.89, 35.87, 47.27, 56.60],
    [57.72, 55.77, 35.70, 68.89, 35.87, 47.27, 56.60],
    [57.72, 55.77, 35.70, 68.89, 35.87, 47.27, 56.60],
    [57.72, 55.77, 35.70, 68.89, 35.87, 47.27, 56.60],

    [57.72, 55.77, 35.70, 68.89, 35.87, 47.27, 56.60],
    [56.16, 56.41, 35.86, 68.89, 35.87, 56.38, 55.62],
    [56.16, 56.41, 35.86, 68.89, 35.87, 56.38, 51.595],
    [56.16, 71.91, 37.86, 68.89, 35.87, 56.38, 54.511],
    [57.16, 71.91, 40.16, 68.89, 35.87, 56.38, 55.061],

    [57.16, 74.91, 41.16, 68.89, 35.87, 56.38, 55.728],
    [57.16, 74.91, 45.66, 77.89, 35.87, 56.38, 58.145],
    [64.16, 74.91, 45.66, 79.89, 35.87, 56.38, 59.478],
    [69.28, 75.41, 45.66, 83.09, 35.87, 56.38, 60.948],
    [69.28, 75.41, 45.66, 83.49, 35.87, 56.38, 61.015],

    [72.0, 77.41, 45.66, 83.89, 35.87, 56.38, 61.868],
    [72.0, 77.91, 45.66, 83.89, 35.87, 56.38, 61.951],
    [73.0, 79.91, 45.86, 85.69, 35.87, 56.38, 62.785],
    [75.0, 81.91, 45.86, 85.69, 35.87, 56.38, 63.485],
    [77.64, 86.91, 47.36, 85.89, 35.87, 56.38, 65.008],

    [80.64, 88.41, 47.36, 85.89, 35.87, 56.38, 65.758],
    [80.64, 88.41, 47.36, 85.89, 35.87, 56.38, 65.758],
    [82.1795, 89.91, 47.36, 85.89, 35.87, 56.38, 66.264],
    [82.1795, 89.91, 47.36, 85.89, 35.87, 56.38, 66.264],
    [82.1795, 89.91, 47.36, 85.89, 35.87, 56.38, 66.264],

    [82.1795, 89.91, 47.36, 85.89, 35.87, 56.38, 66.264],
    [84.4295, 89.91, 47.36, 85.89, 39.87, 56.38, 67.306],
    [87.634, 89.91, 46.66, 87.89, 40.87, 56.38, 68.224],
    [89.6424, 89.91, 46.66, 87.89, 40.87, 59.38, 69.058],
    [89.8424, 89.91, 50.66, 87.89, 40.87, 59.38, 69.7254],

    [89.8424, 89.91, 52.385, 87.89, 40.87, 59.38, 70.046],
    [89.8424, 89.91, 53.085, 87.89, 40.87, 71.38, 72.1629],
    [90.9424, 89.91, 60.469, 87.89, 40.87, 71.38, 73.5679],
    [90.9424, 89.91, 60.469, 87.89, 40.87, 71.38, 73.5679],
    [90.9424, 89.91, 60.469, 87.89, 40.87, 71.38, 73.5679],

    [90.94243364, 89.91, 65.6848329, 88.127450, 40.87, 71.38, 74.5359],
    [91.945659, 90.991071, 67.562359, 88.127450, 40.87, 71.38, 75.14609033],
    [92.247417, 91.441517, 67.562359, 88.127450, 40.87, 71.38, 75.27145775],
    [92.25, 91.44, 69.03, 88.13, 40.87, 71.38, 75.52],
    [92.25, 91.44, 69.76, 88.13, 40.87, 71.38, 75.64],

    [92.18, 91.36, 71.17, 88.13, 40.87, 71.38, 75.85],
    [92.18, 91.36, 71.17, 88.13, 40.87, 71.38, 75.85],
    [92.18, 91.84, 71.43, 88.13, 40.87, 71.38, 75.97],
    [92.18, 92.01, 72.66, 88.13, 40.87, 71.38, 76.20],
    [92.18, 92.01, 72.67, 88.13, 40.87, 71.38, 76.21],

    [92.25, 92.01, 73.49, 88.13, 40.87, 71.38, 76.35],
    [92.68, 92.56, 73.49, 88.13, 40.87, 71.38, 76.52],
    [92.68, 94.11, 73.76, 88.13, 40.87, 71.38, 76.82],
    [92.68, 95.11, 74.17, 88.13, 40.87, 71.38, 77.06],
    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],

    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],
    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],
    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],
    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],
    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],

    [92.78, 95.11, 74.17, 88.13, 40.87, 71.38, 77.24],
    [92.99, 96.11, 74.17, 89.43, 40.87, 71.38, 77.49],
    [65.83, 83.21, 58.42, 72.85, 35.87, 64.08, 53.64],
    [67.65, 83.21, 58.42, 72.85, 35.87, 64.08, 63.68],
    [67.65, 83.21, 58.27, 73.08, 35.87, 64.08, 63.69],

    [69.15, 84.64, 61.84, 77.86, 35.87, 64.08, 65.57],
    [71.64, 84.64, 61.84, 77.86, 35.87, 64.08, 65.99],
    [71.64, 84.64, 65.84, 77.86, 35.87, 64.08, 66.60],
    [74.77, 84.64, 65.94, 80.41, 37.15, 64.08, 67.83],
    [77.61, 85.71, 69.51, 80.41, 38.34, 64.08, 69.28],

    [77.61, 87.85, 71.92, 81.56, 38.34, 64.08, 70.21],
    [75.14, 88.57, 77.64, 83.08, 38.25, 64.08, 71.12],
    [75.73, 90.71, 77.64, 83.71, 38.25, 64.08, 71.85],
    [77.63, 91.71, 77.64, 84.71, 38.25, 64.08, 72.22],
    [79.51, 91.07, 77.64, 86.95, 38.25, 64.08, 72.91]
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
