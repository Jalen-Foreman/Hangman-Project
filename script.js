// console.log('hello world');
// array for keyboard
let alphabet = [
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
];
//creating keyboard buttons
keyboardAlphabet = document.createElement('ul');
for (let i = 0; i < alphabet.length; i++) {
	letters = document.createElement('li');
	letters.innerHTML = `<button>${alphabet[i]}</button>`;
	keyboardAlphabet.appendChild(letters);
}
//hardcoded word
let word = 'LEBRON';

wordHolder = document.querySelector('#hold');

for (let i = 0; i < word.length; i++) {
	wordHolder.innerHTML += ` <span id="${word[i]}" class="letterSearch">_</span> `;
}
// get buttons to show up on screen
const myButtons = document.querySelector('#buttons');
myButtons.appendChild(keyboardAlphabet);

keyboardAlphabet.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.tagName === 'BUTTON') {
		let letterGuess = event.target.innerHTML;
		let doesWordInclude = word.includes(letterGuess);
		// console.log(wordHolder);
		// console.log(letterGuess, doesWordInclude);
		if (doesWordInclude) {
			// if word is included, grab the class of all the span tags.
			let spans = document.querySelectorAll(`#${letterGuess}`);

			// console.log(spans);
			// loop through the array of the spans
			for (let i = 0; i < spans.length; i++) {
				// if word is included, make that letterGuess equal the innerText of the span tags
				spans[i].innerText = letterGuess;
			}
			counter += 1;
			checkWin();
		} else {
			lives -= 1;
			livesCount.innerHTML = lives;
			if (lives < 1) {
				showLives.innerHTML = 'Game Over';
			}
		}
	}
});
let livesCount = document.querySelector('.livesCount');
let lives = 10;
livesCount.innerHTML = lives;
let counter = 0;
let showLives = document.getElementById('mylives');
function checkWin() {
	if (counter === word.length) {
		showLives.innerHTML = 'You Win!';
	}
}
