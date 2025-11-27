const scoreMenu = document.querySelector('#score-menu')
const hamburger = document.querySelector('.hamburger')
const scoreDisplayMenu = document.querySelector('.score-display')

hamburger.addEventListener('click', () => {
	scoreMenu.classList.toggle('hidden')
})

export function updateMenuScore(score) {
	if (scoreDisplayMenu) {
		scoreDisplayMenu.textContent = `Score: ${score}`
	}
}
