const container = document.getElementById("container");
const btn = document.getElementById('btn');
let gridSize = 17; //default grid size

btn.addEventListener('click', function () {
    gridSize = prompt('Enter grid size: ');
    reset(gridSize);
})

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function () { //hovering effect
        cell.style.backgroundColor = 'blue';
    })
    cell.innerText = (' ');
   
    container.appendChild(cell).className = "grid-item";
  };
};

function reset(size) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makeRows(size, size);
  };

makeRows(gridSize, gridSize); //creates default grid