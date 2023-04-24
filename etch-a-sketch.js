let columns = 100;
let rows = 100;
let rowHeight = 600 / rows - 2; //formula to calculate the height of each individual row
//flexbox creates base for columns and container, but JS is more reliable to create rows

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
createGrid();

function resetSquares() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#ffffff"));
}
