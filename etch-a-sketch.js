let columns = 16;
let rows = 16;

let container = document.createElement("div");
container.className = "container";

for (let i = 0; i < columns; ++i) {
  //loop for columns
  let column = document.createElement("div"); //create column
  column.className = "column";

  for (let j = 0; j < rows; ++j) {
    //loop for rows to complete grid
    let row = document.createElement("div");
    row.className = "row";
    row.addEventListener("mouseover", function (e) {
      row.style.backgroundColor = "black";
    });
    column.appendChild(row); //attach row to column
  }
  container.appendChild(column); //put column in container, column already has the row
}
document.body.appendChild(container); //apply grid onto the body of the document
//attach the 'hover' command to the ROWS, those are what creating the squares individually
