
// creating a keyboard

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export function createKeyboard(container){
    container.innerHTML = ''
    for(const letter of letters) {
        const keyButton = document.createElement('button')
        keyButton.innerText = letter

        container.appendChild(keyButton)
    }
}