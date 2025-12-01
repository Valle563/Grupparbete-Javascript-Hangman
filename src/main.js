
import { showNextPart, resetMan } from './drawhangman.js'
import { createKeyboard, handleGuess } from './word-management.js'
import { getSecretWord, setSecretWord, createLines,  } from './show-guessed-letters.js'
import { checkGameEnd } from './game-over.js'
import { words } from './svenska-ord.js'



const keyboardContainer = document.querySelector(".keyboard")


let currentSecretWord = getSecretWord()




export function restartGame() {

	resetMan()


	currentSecretWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
	// informera show-guessed-letters om det nya ordet så createLines visar rätt antal rader
	setSecretWord(currentSecretWord)





	createLines()

	createKeyboard(keyboardContainer, handleGuess)

	

}


createLines()
createKeyboard(keyboardContainer, handleGuess)


document.querySelector("#reset").addEventListener("click", restartGame)


