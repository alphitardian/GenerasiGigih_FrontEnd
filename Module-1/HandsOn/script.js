const student = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
];

// create table
let table = document.getElementById("tableData");
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

// wait function
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

let studentTotalAge = student.reduce((total, num) => {
  return total + num.age;
}, 0);

let btnClick = () => {
  console.log("calculation start");
  console.log("second call start");
  wait(2000).then(() => {
    console.log("second call finish");
    console.log("third call start");
    wait(2000).then(() => {
      console.log(studentTotalAge / student.length);
      wait(1000).then(() => {
        console.log("third call finish");
      });
    });
  });
};

let button = document
  .getElementById("avgButton")
  .addEventListener("click", btnClick);
