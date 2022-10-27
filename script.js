const container = document.querySelector('.container');

function createGrid () {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}
createGrid();

const squares = document.querySelectorAll('.square')
for(let i = 0; i < squares.length; i++) {
    let square = squares[i];
    square.addEventListener("mouseover", function(e) {
        e.target.classList.replace('square', 'coloredSquare');
    });
}


