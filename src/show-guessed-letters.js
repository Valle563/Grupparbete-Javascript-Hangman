import { words } from './svenska-ord.js';
import { resetMan } from './drawhangman.js';

// internal secret word kept here; use getters/setters to keep modules in sync
let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

export function getSecretWord() {
    return secretWord
}

export function setSecretWord(word) {
    secretWord = word
}

// Skapar antal streck ( _ _ _ ) beronde på hur långt ordet är
export function createLines () {
    document.querySelector('.guessed-letter').textContent = secretWord
    .split('')
    .map(() => '_')
    .join(' ');
}
createLines();
resetMan();