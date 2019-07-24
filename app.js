function creatChart(tableID, styles, labelsArray, datasetsArray) {
  const table1 = document.getElementById(`${tableID}`);
  const canvas1 = document.createElement("canvas");
  table1.parentElement.insertBefore(canvas1, table1);
  canvas1.style.width = "100%";
  canvas1.style.height = "600px";
  //canvas1.style.border = "blue solid 1px";
  var ctx = canvas1.getContext("2d");
  var lineChart = new Chart(ctx, {
    type: styles,
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
//years
for (var t = 0; t < table1.rows[1].cells.length - 2; t++) {
  m = t + 2;
  years[t] = table1.rows[1].cells[m].innerHTML.toLowerCase().replace(/ /gi, "");
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

//-------------------------chart2
const table2 = document.getElementById("table2");
//country2
const country2 = [];
for (let i = 1; i < table2.rows.length; i++) {
  country2.push(table2.rows[i].cells[1].innerHTML);
}
//console.log(country2);
//date
const date = [];
for (var i = 2; i < table2.rows[0].cells.length; i++) {
  date[i - 2] = table2.rows[0].cells[i].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}
//console.log(date[0]);

const datapoint1 = [];
const datapoint2 = [];

for (let i = 1; i < table2.rows.length; i++) {
  datapoint1.push(table2.rows[i].cells[2].innerText);
  datapoint2.push(table2.rows[i].cells[3].innerText);
}
const color = ["#A7D2D6", "#F5C1C7"];

function BarSet(i, j) {
  this.label = date[i];
  this.data = j;
  this.backgroundColor = color[i];
  this.fill = true;
}
const datasets2 = [];
datasets2.push(new BarSet(0, datapoint1));
datasets2.push(new BarSet(1, datapoint2));
//console.log(datasets2);

creatChart("table1", "line", years, datasets);
creatChart("table2", "bar", country2, datasets2);
//-------------------------fetch data from json api
const data3 = [
  [0, 9],
  [1, 6],
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 8],
  [6, 9],
  [7, 5],
  [8, 3],
  [9, 8]
];
creatChart("firstHeading", "bubble", data3, datasets2);
