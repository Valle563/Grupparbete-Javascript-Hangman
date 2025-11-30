const scoreMenu = document.querySelector('#score-menu')
const hamburger = document.querySelector('.hamburger')
const scoreDisplayMenu = document.querySelector('.score-display')
const wordDisplayMenu = document.querySelector('.word-display')
const playerNameScoreEl = document.querySelector('.player-name-scoremenu')
const scoreListEl = document.querySelector('.score-list') // create a container in HTML - tbody

// Function to refresh the score menu
export function updateScoreMenu() {
    const games = JSON.parse(localStorage.getItem('hangmanGames') || '[]')
    scoreListEl.innerHTML = ''

	// Default sorting by date descending (latest games first)
games.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
})

	games.forEach(game => {
		const tr = document.createElement('tr')

		// Format date
		const date = new Date(game.date);
		const formattedDate = `${String(date.getDate()).padStart(2,'0')}/` +
                      `${String(date.getMonth() + 1).padStart(2,'0')}/` +
                      `${String(date.getFullYear()).slice(-2)} ` +
                      `${String(date.getHours()).padStart(2,'0')}:` +
                      `${String(date.getMinutes()).padStart(2,'0')}`;

// senaste spel
        tr.innerHTML = `
            <td>${game.player}</td>
            <td>${game.word}</td>
            <td>${game.wrongGuesses}</td>
            <td>${game.wordLength}</td>
            <td>${formattedDate}</td>
            <td class="result ${game.won ? 'win' : 'loss'}"
    		aria-label="${game.won ? 'Vann spelet' : 'Förlorade spelet'}"
    		title="${game.won ? 'Vann' : 'Förlorade'}">
  ${game.won ? '✅' : '❌'}
</td>
        `
        scoreListEl.appendChild(tr)
    })
}

// wrapped listener in safety check
if (hamburger && scoreMenu) {
	hamburger.addEventListener('click', () => {
		scoreMenu.classList.toggle('hidden')
		// When menu opens, we refresh word display from main screen
		updateMenuWord()
		updateScoreMenu()

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