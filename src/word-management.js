const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"

export function createKeyboard(container, onGuess) {
	container.innerHTML = ''
	for (const letter of letters) {
		const keyButton = document.createElement("button")
		keyButton.innerText = letter
		keyButton.classList.add("keyButton")

		keyButton.addEventListener("click", () => {
		  onGuess(letter, keyButton)
		})

		container.appendChild(keyButton)
	  }
}
// TODO export/import to a 'main/gamelogic.js' (to be created):
const keyboardContainer = document.querySelector(".keyboard")

let secretWord = "KARDEMUMMA" // example ord

let correct = 0
let wrong = 0

createKeyboard(keyboardContainer, handleGuess)

 function handleGuess(letter, button) {
  if (secretWord.includes(letter)) {
    button.classList.add("correct")
    correct++
  } else {
    button.classList.add("wrong")
    wrong++
  }
  button.disabled = true
}
