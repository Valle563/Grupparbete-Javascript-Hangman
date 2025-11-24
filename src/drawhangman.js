const parts = document.querySelectorAll('.part')
let step = 0

document.getElementById('nextPart').addEventListener('click', () =>{
    if (step < parts.length){
        parts[step].computedStyleMap.display = 'block';
        step++;
    }
})

document.getElementById('resetMan').addEventListener('click', () => {
    parts.forEach(part => part.computedStyleMap.display = 'none')
    step = 0
})