const parts = [ 
  document.querySelector("#head"),
  document.querySelector("#body"),
  document.querySelector("#arm-left"),
  document.querySelector("#arm-right"),
  document.querySelector("#leg-left"),
  document.querySelector("#leg-right")
]

let step = 0;

function showNextPart(){
    if (step < parts.length) {
        parts[step].classList.remove('hidden');
        step++;
    }
}

// function swingBody() {
//     const man = document.querySelector('#man');
//     man.classList.add('swing')
//     setTimeout(() => man.classList.remove('swing'), 500)
// }

function resetMan () {
    parts.forEach(part => part.classList.add('hidden'))
    step = 0;   
}


document.querySelector("#next").addEventListener("click", showNextPart);
document.querySelector("#reset").addEventListener("click", resetMan);

export { showNextPart, resetMan };