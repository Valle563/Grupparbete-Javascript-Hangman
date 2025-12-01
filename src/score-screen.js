const scoreMenu = document.querySelector('#score-menu')
const hamburger = document.querySelector('.hamburger')
const scoreDisplayMenu = document.querySelector('.score-display')
const wordDisplayMenu = document.querySelector('.word-display')
const playerNameScoreEl = document.querySelector('.player-name-scoremenu')
const scoreListEl = document.querySelector('.score-list') // create a container in HTML - tbody

// Sorting state
let sortDateAscending = false; // sorting - start with descending (latest game first)
let sortFelAscending = false; // sorting - start with descending (largest errors first)
let sortColumn = 'date' // sorted by default

// Reference to datum and fel headers
const sortDateHeader = document.querySelector('#sort-date')
const sortFelHeader = document.querySelector('#sort-fel')

// // Event listeners for sorting
if (sortDateHeader) {
    sortDateHeader.addEventListener('click', () => {
        sortColumn = 'date'
        sortDateAscending = !sortDateAscending
        updateScoreMenu()
        updateSortArrow()
    })
}
if (sortFelHeader) {
    sortFelHeader.addEventListener('click', () => {
        sortColumn = 'fel'
        sortFelAscending = !sortFelAscending
        updateScoreMenu()
        updateFelArrow()
    })
}
// Set initial arrows
updateSortArrow()
updateFelArrow()




function updateSortArrow() {
    if (!sortDateHeader) return
    sortDateHeader.textContent = sortDateAscending ? 'Datum ▲' : 'Datum ▼'
}


function updateFelArrow() {
    if (!sortFelHeader) return
    sortFelHeader.textContent = sortFelAscending ? 'Fel ▲' : 'Fel ▼'
}



// Function to refresh the score menu
export function updateScoreMenu() {
    const games = JSON.parse(localStorage.getItem('hangmanGames') || '[]')
    scoreListEl.innerHTML = ''

// If Fel header clicked - sort by wrong guesses
// Else - sort by date
// games.sort((a, b) => {
//     if (sortFelHeaderClicked) { 
//         return sortFelAscending ? a.wrongGuesses - b.wrongGuesses : b.wrongGuesses - a.wrongGuesses
//     } else {
//         const dateA = new Date(a.date).getTime()
//         const dateB = new Date(b.date).getTime()
//         return sortDateAscending ? dateA - dateB : dateB - dateA
//     }
// })

games.sort((a, b) => {
    if (sortColumn === 'fel') {
        return sortFelAscending ? a.wrongGuesses - b.wrongGuesses : b.wrongGuesses - a.wrongGuesses
    } else { // date
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortDateAscending ? dateA - dateB : dateB - dateA
    }
})





	games.forEach(game => {
		const tr = document.createElement('tr')

		// Format date
		const date = new Date(game.date);
		const formattedDate = `${String(date.getDate()).padStart(2,'0')}/` +
                    `${String(date.getMonth() + 1).padStart(2,'0')} ` +
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
		updateSortArrow()

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
