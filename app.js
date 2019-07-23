// const axios = require("axios");
/*
// Make a request for a user with a given ID
axios
  .get(" https://canvasjs.com/services/data/datapoints.php")
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
    console.log("final");
  });
  */

const table1 = document.getElementById("table1");
const canvas1 = document.createElement("canvas");
table1.parentElement.insertBefore(canvas1, table1);
canvas1.style.width = "100%";
canvas1.style.height = "300px";
canvas1.style.border = "blue solid 1px";
var ctx = canvas1.getContext("2d");

var data = [];
const years = [];

//console.log(table1.rows[1]);
//years
for (var t = 0; t < table1.rows[1].cells.length - 2; t++) {
  m = t + 2;
  years[t] = table1.rows[1].cells[m].innerHTML.toLowerCase().replace(/ /gi, "");
}
var headers = [];
for (var i = 0; i < table1.rows[0].cells.length; i++) {
  headers[i] = table1.rows[0].cells[i].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}

// go through cells
for (var i = 1; i < table1.rows.length; i++) {
  var tableRow = table1.rows[i];
  var rowData = {};

  for (var j = 0; j < tableRow.cells.length; j++) {
    rowData[headers[j]] = tableRow.cells[j].innerHTML;
  }

  data.push(rowData);
}

const country = [];
//console.log(data.pays);
function getCountrys() {
  for (let i = 1; i < data.length; i++) {
    data[i];
    country.push(data[i].pays);
  }
  console.log(country);
}
getCountrys();
//JSON.stringify(tableToJson(table1));
//get label list

var datasets = [
  {
    label: "beijing",
    borderColor: "rgb(255, 99, 132)",
    data: [0, 10, 5, 2, 20, 30, 45],
    fill: false
  },
  {
    label: "China",
    borderColor: "rgb(11, 99, 132)",
    data: [3, 14, 5, 2, 23, 32, 25],
    fill: false
  }
];
var newDatesets = {
  label: country[4],
  borderColor: "rgb(11, 99, 132)",
  data: [],
  fill: false
};
console.log(newDatesets);
datasets.push(newDatesets);

var lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: years,
    datasets: datasets
  },
  options: {}
});
//console.log(lineChart.data.datasets[0].label);
//const yearInChart = lineChart.config.data.labels;

//console.log(lineChart.config.data);

//lineChart.config.data.datasets.push(newDatesets);
