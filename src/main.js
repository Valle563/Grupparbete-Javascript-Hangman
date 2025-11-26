import { showNextPart, resetMan } from './drawhangman.js'
import { createKeyboard } from './word-management.js'
import { secretWord, createLines } from './show-guessed-letters.js'
import { checkGameEnd } from './game-over.js'
import { words } from './svenska-ord.js'


const keyboardContainer = document.querySelector(".keyboard")

let correct = 0
let wrong = 0
let currentSecretWord = secretWord

// function handleGuess(letter, button) {
// 	const display = document.querySelector('.guessed-letter')
// 	const current = display.textContent.split(' ')
	 
// 	if (currentSecretWord.includes(letter)) {
// 		button.classList.add("correct")
// 		correct++
// 		} else {
// 		button.classList.add("wrong"), showNextPart()
// 		wrong++
// 		}
// 	button.disabled = true

// 	display.textContent = currentSecretWord
// 	.split('')
// 	.map((l, i) => (l === letter ? l : current[i]))
// 	.join(' ')
// }

function restartGame() {
	
	resetMan()
	
	
	currentSecretWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
	
	
	correct = 0
	wrong = 0
	
	
	createLines()
	
	createKeyboard(keyboardContainer, handleGuess)
}


createLines()
createKeyboard(keyboardContainer, handleGuess)


document.querySelector("#reset").addEventListener("click", restartGame)

function handleGuess(letter, button) {
	const display = document.querySelector('.guessed-letter')
	const current = display.textContent.split(' ')

	if (secretWord.includes(letter)) {
		    button.classList.add("correct")
		    correct++
		} else {
		    button.classList.add("wrong", showNextPart())
		    wrong++
	}
	button.disabled = true

	display.textContent = secretWord
	.split('')
	.map((l, i) => (l === letter ? l : current[i]))
	.join(' ')

      checkGameEnd(secretWord, wrong, display.textContent, correct)
 }

createKeyboard(keyboardContainer, handleGuess)
