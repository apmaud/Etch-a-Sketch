const container = document.querySelector('.container');

function createGrid (gridNumber) {
    for (let i = 0; i < (gridNumber*gridNumber); i++){
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}
createGrid(16);

function coloring () {
    var squares = document.querySelectorAll('.square')
    for(let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.addEventListener("mouseover", function(e) {
            e.target.classList.replace('square', 'coloredSquare');
        });
    }
}
coloring();

function updateGrid (gridNumber) {
    container.innerHTML = "";
    container.style.setProperty("grid-template-columns", `repeat(${gridNumber}, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${gridNumber}, 2fr)`);
    createGrid(gridNumber);
    coloring();
}

const btn = document.querySelector(".sizeButton");
btn.addEventListener('click', function(){
    var gridNumber = parseInt(prompt("Enter a number!"));
    if (gridNumber > 1000) {
        return;
    }
    else {
        if (Number.isInteger(gridNumber)) {
            console.log('updated grid');
            updateGrid(gridNumber);
            return;
        }
            console.log("not a number");
            return;
    }
});



