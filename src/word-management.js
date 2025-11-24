
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



