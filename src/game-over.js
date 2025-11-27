export function showGameOver(didWin, secretWord, score) {


const gameOverScreen = document.querySelector('.game-over')
const result = document.querySelector('.result')
const wordDisplay = document.querySelector('.word')
const scoreDisplay = document.querySelector('.score')

result.textContent = didWin ? '🥳 Du vann!' : '😭 Du förlorade!'
wordDisplay.textContent = secretWord
scoreDisplay.textContent = score

gameOverScreen.style.display = 'flex'
}

export function checkGameEnd(secretWord, wrong, display, score) {
    const wordWithoutSpaces = display.replace(/ /g, '')

    if (wordWithoutSpaces === secretWord) {
        // Vann!
        return showGameOver(true, secretWord, score)
    } else if (wrong >= 6) {
        // Förlorade!
        return showGameOver(false, secretWord, score)
    }
}
document.querySelector('.new-game').addEventListener('click', () => {
    location.reload()
})