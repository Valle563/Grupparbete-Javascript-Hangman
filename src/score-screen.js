const scoreMenu = document.querySelector('#score-menu')
const hamburger = document.querySelector('.hamburger')
const scoreDisplayMenu = document.querySelector('.score-display')
const wordDisplayMenu = document.querySelector('.word-display')
const playerNameScoreEl = document.querySelector('.player-name-scoremenu')

// wrapped listener in safety check
if (hamburger && scoreMenu) {
	hamburger.addEventListener('click', () => {
		scoreMenu.classList.toggle('hidden')
		// When menu opens, refresh word display from main screen
		updateMenuWord()

		// Get the player name from local storage (Update player name in score menu every time menu is shown)

		const playerName = localStorage.getItem('playerName') || 'Spelare'
		if (playerNameScoreEl) playerNameScoreEl.textContent = playerName
	})
}

export function updateMenuScore(score) {
	if (scoreDisplayMenu) {
		scoreDisplayMenu.textContent = score
	}
}

// To copy the visible guessed word
export function updateMenuWord() {
	const gameWord = document.querySelector('.guessed-letter')

	if (gameWord && wordDisplayMenu) {
		wordDisplayMenu.textContent = gameWord.textContent
	}
}

// // reset function when restarting game (?)
// export function resetScoreMenu() {
// 	if (scoreDisplayMenu) scoreDisplayMenu.textContent = ''
// 	if (wordDisplay) wordDisplay.textContent = ''
// }