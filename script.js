let dimension;

function drawGrid(dimension = 16) {
    const gridArea = document.querySelector('.grid');
    for (let i = 0; i < dimension; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < dimension; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.height = `${960/dimension}px`;
            gridSquare.style.width = `${960/dimension}px`;
            gridRow.appendChild(gridSquare);
        }
        gridArea.appendChild(gridRow);
    }
    setListeners();
}

drawGrid(dimension);


const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
    let dimension = prompt("How many squares per line? (10-100)");
    if (dimension < 10) {
        dimension = 10;
    } else if (dimension > 100) {
        dimension = 100;
    }
    deleteGrid();
    drawGrid(dimension);
});

function deleteGrid() {
    const rows = document.querySelectorAll('.grid-row')
    rows.forEach((row) => {
        row.parentElement.removeChild(row);
    });
}

function setListeners() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener("mouseover", function( e ) {
            e.target.style.backgroundColor = "black";
        });
    });
}

