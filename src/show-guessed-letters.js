import { words } from './svenska-ord.js';

 const secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();


function createLines () {
    document.querySelector('.guessed-letter').textContent = secretWord
    .split('')
    .map(() => '_')
    .join(' ');
}
createLines();
export { secretWord, createLines };