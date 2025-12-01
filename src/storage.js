export function saveGameResult({ player, word, wrongGuesses, won }) {
    const game = {
        player,
        word,
        wrongGuesses,
        wordLength: word.length,
        date: new Date().toISOString(),
        won
    }

    // Get existing games
    const games = JSON.parse(localStorage.getItem('hangmanGames') || '[]')

    // Add new game at the start
    games.unshift(game)

    // Keep only last 10 games
    if (games.length > 10) games.length = 10

    // Save back to localStorage
    localStorage.setItem('hangmanGames', JSON.stringify(games))
}
