import { restartGame } from './main.js'
import { setupKeyboardListener } from './word-management.js'

const playerScreen = document.querySelector('#player-screen')
const startBtn = document.querySelector('#startgame')
const playerInput = document.querySelector('#playerInput')
const playerNameEl = document.querySelector('#player-name')

startBtn && startBtn.addEventListener('click', () => {
	const name = (playerInput && playerInput.value.trim()) || 'Spelare'
	if (playerNameEl) playerNameEl.textContent = name
	if (playerScreen) playerScreen.classList.add('hidden')

	// Starta spelet ordentligt så alla knappar blir aktiva
	if (typeof restartGame === 'function') restartGame()
	setupKeyboardListener(playerScreen)
})

// Låt användaren trycka Enter i input för att starta spelet
playerInput && playerInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		startBtn && startBtn.click()
	}
})

