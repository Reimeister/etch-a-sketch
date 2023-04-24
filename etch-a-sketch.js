let columns = 16;
let rows = 16; //formula to calculate the height of each individual row
//flexbox creates base for columns and container, but JS is more reliable to create rows
//2 represents 2px border, change this value if you decide to change the borders in CSS
let container = document.createElement("div");
container.className = "container";

function createGrid() {
  for (let i = 0; i < columns; ++i) {
    //loop for columns
    let column = document.createElement("div"); //create column
    column.className = "column";
    for (let j = 0; j < rows; ++j) {
      //loop for rows to complete grid
      let row = document.createElement("div");
      let rowHeight = 600 / rows - 2;
      row.className = "row";
      row.style.height = `${rowHeight}px`; //dynamically changes height according to the dimensions of the grid
      row.addEventListener("mouseover", function (e) {
        row.style.backgroundColor = "black";
      });
      column.appendChild(row); //attach row to column
    }
    container.appendChild(column); //put column in container, column already has the row
  }
}
document.body.appendChild(container); //apply grid onto the body of the document
//attach the 'hover' command to the ROWS, those are what creating the squares individually

function resetSquares() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#ffffff"));
}

function resizeGrid() {
  let errorMessage = document.createElement("div");
  let newValue = document.getElementById("gridsize").value;
  if (newValue > 0 && newValue <= 100) {
    document.querySelector(".container").textContent = "";
    columns = newValue;
    rows = newValue;
    createGrid();
  } else {
    alert("Error! Please choose a number between 1 and 100");
  }
}

createGrid();
