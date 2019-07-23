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
function creatChart(tableID, style, labelsArray, datasetsArray) {
  const table1 = document.getElementById(`${tableID}`);
  const canvas1 = document.createElement("canvas");
  table1.parentElement.insertBefore(canvas1, table1);
  canvas1.style.width = "100%";
  canvas1.style.height = "600px";
  //canvas1.style.border = "blue solid 1px";
  var ctx = canvas1.getContext("2d");
  var lineChart = new Chart(ctx, {
    type: `${style}`,
    data: {
      labels: labelsArray,
      datasets: datasetsArray
    },
    options: {
      responsive: true
    },
    hover: {
      mode: "nearest",
      intersect: true
    }
  });
}

const years = [];

//console.log(table1.rows[1]);
//years
for (var t = 0; t < table1.rows[1].cells.length - 2; t++) {
  m = t + 2;
  years[t] = table1.rows[1].cells[m].innerHTML.toLowerCase().replace(/ /gi, "");
}
//headers
var headers = [];
for (var i = 0; i < table1.rows[0].cells.length; i++) {
  headers[i] = table1.rows[0].cells[i].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}

// datapoints
var data = [];
for (var i = 2; i < table1.rows.length; i++) {
  var tableRow = table1.rows[i];
  var rowData = [];

  for (var j = 2; j < tableRow.cells.length; j++) {
    rowData[j - 2] = parseInt(tableRow.cells[j].innerHTML);
  }

  data.push(rowData);
}
//console.log(data);
//countrys
const country = [];
for (let i = 2; i < table1.rows.length; i++) {
  country.push(table1.rows[i].cells[1].innerHTML);
}
//colors
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//creat new datasets
function Datasets(i) {
  this.label = country[i];
  this.data = data[i];
  this.borderColor = getRandomColor();
  this.fill = false;
}
const datasets = [];
for (let i = 0; i < country.length; i++) {
  datasets.push(new Datasets(i));
}
console.log(datasets);
/* var datasets = [
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
  */

creatChart("table1", "line", years, datasets);
