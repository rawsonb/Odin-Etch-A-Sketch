function drawGrid(num){
    const pad = document.querySelector(".pad");
    const sideLength = 100*(1/(Math.sqrt(num)));
    for (let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.setAttribute("style", `flex-shrink: 0;margin: 0px; height: ${sideLength}%; width: ${sideLength}%;background-color: black;`);
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "white";
        });
        pad.appendChild(box);
    }
}

function generateGrid(){
    const input = document.querySelector(".generation-input");
    const pad = document.querySelector(".pad");
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
    drawGrid(input.value ** 2);
}

drawGrid(16)