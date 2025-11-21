const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"

function createKeyboard(container) {
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


const keyboardContainer = document.querySelector(".keyboard")
let secretWord = "KARDEMUMMA" // example ord

let correct = 0
let wrong = 0

createKeyboard(keyboardContainer)
