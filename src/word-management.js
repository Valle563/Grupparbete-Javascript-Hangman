import { showNextPart } from "./drawhangman.js"
import { getSecretWord } from "./show-guessed-letters.js"
import { checkGameEnd } from "./game-over.js"
import { updateMenuScore } from "./score-screen.js"

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

// TODO scores & points
let correct = 1
let wrong = 0

export function handleGuess(letter, button) {
	const display = document.querySelector('.guessed-letter')
	const current = display.textContent.split(' ')
	const currentSecretWord = getSecretWord()

	if (currentSecretWord.includes(letter)) {
		button.classList.add("correct")
		updateMenuScore(correct)
		correct++
		} else {
		button.classList.add("wrong", showNextPart())
		wrong++
		}
	button.disabled = true

	display.textContent = currentSecretWord
	.split('')
	.map((l, i) => (l === letter ? l : current[i]))
	.join(' ')

	checkGameEnd(currentSecretWord, wrong, display.textContent, correct)




}


