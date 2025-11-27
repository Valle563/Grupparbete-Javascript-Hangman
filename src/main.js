import { showNextPart, resetMan } from './drawhangman.js'
import { createKeyboard, handleGuess } from './word-management.js'
import { getSecretWord, setSecretWord, createLines,  } from './show-guessed-letters.js'
import { checkGameEnd } from './game-over.js'
import { words } from './svenska-ord.js'



const keyboardContainer = document.querySelector(".keyboard")


let currentSecretWord = getSecretWord()


/* Player modal handling moved to `src/new-player.js` */

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

export function restartGame() {

	resetMan()


	currentSecretWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
	// informera show-guessed-letters om det nya ordet så createLines visar rätt antal rader
	setSecretWord(currentSecretWord)





	createLines()

	createKeyboard(keyboardContainer, handleGuess)

	resetScoreMenu()

}


createLines()
createKeyboard(keyboardContainer, handleGuess)


document.querySelector("#reset").addEventListener("click", restartGame)

createKeyboard(keyboardContainer, handleGuess)
