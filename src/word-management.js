import { showNextPart } from "./drawhangman.js"
import { getSecretWord } from "./show-guessed-letters.js"
import { checkGameEnd } from "./game-over.js"
import { updateMenuScore, updateMenuWord } from "./score-screen.js"

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

document.addEventListener('keydown', (event) => {
	const key = event.key.toUpperCase()
	// Allow svenska alphabet only
	if (!letters.includes(key)) return
	// Find the matching button on screen
	const buttons = document.querySelectorAll('.keyButton')
	const button = [...buttons].find(btn => btn.innerText === key)
	// Simulate klick If button exists and is not already used
	if (button && !button.disabled) {
		button.click()
	}
})


export function handleGuess(letter, button) {
	const display = document.querySelector('.guessed-letter')
	const current = display.textContent.split(' ')
	const currentSecretWord = getSecretWord()

	if (currentSecretWord.includes(letter)) {
		button.classList.add("correct")
		correct++
		updateMenuScore(correct)
		} else {
		button.classList.add("wrong", showNextPart())
		wrong++
		}
	button.disabled = true

	display.textContent = currentSecretWord
	.split('')
	.map((l, i) => (l === letter ? l : current[i]))
		.join(' ')

	updateMenuWord()

	checkGameEnd(currentSecretWord, wrong, display.textContent, correct)




}


