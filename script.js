const container = document.querySelector('.container');

function createGrid () {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

// const square = document.querySelector('.square')
// function replaceSquare (e) {
//     e.target.classList.replace('square', 'coloredSquare');
// }
// square.addEventListener("mouseover", replaceSquare(e));


createGrid();