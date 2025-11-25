
import { parts, showNextPart, resetMan } from './drawhangman.js'
import { createKeyboard } from './word-management.js'
import { secretWord, createLines } from './show-guessed-letters.js'

const keyboardContainer = document.querySelector(".keyboard")

createLines()

let correct = 0
let wrong = 0

 function handleGuess(letter, button) {
	 const display = document.querySelector('.guessed-letter')
	 const current = display.textContent.split(' ')

	 if (secretWord.includes(letter)) {
		    button.classList.add("correct")
		    correct++
		  } else {
		    button.classList.add("wrong")
		    wrong++
		  }
	 button.disabled = true

	 display.textContent = secretWord
	 .split('')
	 .map((l, i) => (l === letter ? l : current[i]))
	 .join(' ')
 }

createKeyboard(keyboardContainer, handleGuess)