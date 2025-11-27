import { showNextPart, resetMan } from './drawhangman.js'
import { createKeyboard } from './word-management.js'
import { secretWord, createLines } from './show-guessed-letters.js'
import { words } from './svenska-ord.js'


const keyboardContainer = document.querySelector(".keyboard")

let correct = 0
let wrong = 0
let currentSecretWord = secretWord


const playerScreen = document.querySelector('#player-screen')
const startBtn = document.querySelector('#startgame')
const playerInput = document.querySelector('#playerInput')
const playerNameEl = document.querySelector('#player-name')


startBtn && startBtn.addEventListener('click', () => {
	const name = (playerInput && playerInput.value.trim()) || 'Spelare'
	if (playerNameEl) playerNameEl.textContent = name
	if (playerScreen) playerScreen.classList.add('hidden')
	
	if (typeof restartGame === 'function') restartGame()
})


playerInput && playerInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		startBtn && startBtn.click()
	}
})

function handleGuess(letter, button) {
	const display = document.querySelector('.guessed-letter')
	const current = display.textContent.split(' ')
	 
	if (currentSecretWord.includes(letter)) {
		button.classList.add("correct")
		correct++
		} else {
		button.classList.add("wrong"), showNextPart()
		wrong++
		}
	button.disabled = true

	display.textContent = currentSecretWord
	.split('')
	.map((l, i) => (l === letter ? l : current[i]))
	.join(' ')
}

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



