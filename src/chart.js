import { options } from './data.js';

var chart;
var currentXVar, currentYVar;

const vars = {
  "pressure": {
    name: "Pressure",
    units: "atm"
  },
  "volume": {
    name: "Volume",
    units: "L"
  },
  "temperature": {
    name: "Temperature",
    units: "K"
  },
  "moles0": {
    name: "Moles of Species X",
    units: "mol"
  },
  "moles1": {
    name: "Moles of Species Y",
    units: "mol"
  },
  "moles2": {
    name: "Moles of Species Z",
    units: "mol"
  }
}

options.addEventListener('set', (evt) => {
  if (evt.variable == "lineChart") {
    if (evt.value) {
      initChart("line");
    } else {
      initChart("bar");
    }
  }
});


function initChart(type) {
  var ctx = document.getElementById("chart").getContext("2d");
  if (chart) {
    chart.destroy();
  }
  if (type == "line") {
    chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'scatter',

      // The data for our dataset
      data: {
        datasets: [{
          borderColor: '#F9AA33',
          data: [],
          showLine: true,
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }]
      },

      // Configuration options go here
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: ""
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: ""
            }
          }]
        }
      }
    });
  } else if (type == "bar") {
    chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: new Array(50),
        datasets: [{},{},{}]
      },
      // Configuration options go here
      options: {
        tooltips: {
          enabled: false
        },
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            stacked: true,
            display: true,
            ticks: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: "log Speed"
            }
          }],
          yAxes: [{
            stacked: true,
            display: true,

            scaleLabel: {
              display: true,
              labelString: "Frequency"
            },
            ticks: {
              min: 0,
              max: 20,
              callback: function(value, index, values) {
                if (Math.floor(value) === value) {
                  return value;
                }
              }
            }
          }]
        }
      }
    });
  }
  chart.update();
}

function updateHistogram(data) {
  chart.data.datasets = data;
  chart.update();
}

function addData(xVar, yVar, data) {
  // Clear data if one of the vars has changed
  if (currentXVar != xVar || currentYVar != yVar) {
    clearData();
    currentXVar = xVar;
    currentYVar = yVar;
    chart.options.scales.xAxes[0].scaleLabel.labelString = (vars[xVar].name + " (" + vars[xVar].units + ")");
    chart.options.scales.yAxes[0].scaleLabel.labelString = (vars[yVar].name + " (" + vars[yVar].units + ")");
  }

  chart.data.datasets.forEach((dataset) => {
    if (!dataset.data.filter(d => Math.abs(d.x - data.x) < .02).length) {
      dataset.data.push(data);
      dataset.data.sort(function(a, b){return a.x - b.x});
    }
  });
  chart.update();
}

function clearData() {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  chart.update();
  chart.options.scales.xAxes[0].scaleLabel.labelString = "";
  chart.options.scales.yAxes[0].scaleLabel.labelString = "";
}

export { addData, updateHistogram, clearData };
