const student = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
];

// get body reference
let body = document.getElementById("app");

// create table
let table = document.createElement("table");
let tableBody = document.createElement("tbody");

student.forEach((item, index) => {
  // create table component
  let row = document.createElement("tr");
  let cell = document.createElement("th");
  let cell2 = document.createElement("td");
  let text = document.createTextNode(item.name);
  let text2 = document.createTextNode(item.age);

  // implement table
  cell.appendChild(text);
  cell2.appendChild(text2);
  row.appendChild(cell);
  row.appendChild(cell2);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
table.setAttribute("border", 1);

body.appendChild(table);

let studentTotalAge = student.reduce((total, num) => {
  return total + num.age;
}, 0);

let btnClick = () => {
  console.log(studentTotalAge / student.length);
};

let button = document
  .getElementById("avgButton")
  .addEventListener("click", btnClick);
