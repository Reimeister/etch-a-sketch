var columns = 16;
var rows = 16;

var container = document.createElement("div");
container.className = "container";
for (var i = 0; i < columns; ++i) {
  //loop for columns
  var column = document.createElement("div"); //create column
  column.className = "column";

  for (var j = 0; j < rows; ++j) {
    //loop for rows to complete grid
    var row = document.createElement("div");
    row.className = "row";

    column.appendChild(row); //attach row to column
  }
  container.appendChild(column); //put column in container, column already has the row
}
document.body.appendChild(container); //apply grid onto the body of the document
