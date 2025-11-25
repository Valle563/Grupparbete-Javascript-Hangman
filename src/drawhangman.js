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


function resetMan () {
    parts.forEach(part => part.classList.add('hidden'))
    step = 0;
}

// function resetMan () {
//     parts.forEach(part => part.style.display = 'none')
//     step = 0;
// }

document.querySelector("#next").addEventListener("click", showNextPart);
document.querySelector("#reset").addEventListener("click", resetMan);
