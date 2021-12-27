const wrapper = document.querySelector('.grid-wrapper');

for (let i = 0; i < 16*16; i++) {
    const elem = document.createElement('div');
    elem.classList.add('element');
    wrapper.appendChild(elem);
}

let elements = document.querySelectorAll('.element');

elements.forEach(element => {
    element.addEventListener('mouseover', function( event ) {
        event.target.style.backgroundColor = "black";
    });
});

function reset() {
    wrapper.innerHTML = "";
    let gridSize = prompt("Enter a new grid-size: ")
    if(gridSize>100) {
        gridSize=100;
    }
    console.log(gridSize)
    wrapper.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    for (let i = 0; i < gridSize*gridSize; i++) {
        const elem = document.createElement('div');
        elem.classList.add('element');
        wrapper.appendChild(elem);
    }

    let elements = document.querySelectorAll('.element');

    elements.forEach(element => {
        element.addEventListener('mouseenter', function( event ) {
            event.target.style.backgroundColor = "black";
        });
    });

}