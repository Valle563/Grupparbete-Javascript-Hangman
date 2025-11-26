import { words } from './svenska-ord.js';
import { resetMan } from './drawhangman.js';

export const secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();


export function createLines () {
    document.querySelector('.guessed-letter').textContent = secretWord
    .split('')
    .map(() => '_')
    .join(' ');
}


// function newSecretWord(){
//     secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
// }

// newSecretWord();



createLines();
resetMan();