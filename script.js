console.log('hello world');

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

keyboardAlphabet = document.createElement('ul');
for (let i = 0; i < alphabet.length; i++) {
    letters = document.createElement('li');
    letters.innerHTML = `<button>${alphabet[i]}</button>`
    keyboardAlphabet.appendChild(letters);
}
let word = 'LEBRON';

// loop over the word
wordHolder = document.querySelector('#hold');

for (let i = 0; i < word.length; i++) {
   wordHolder.innerHTML += ` <span id="${word[i]}">_</span> `;

}
const myButtons = document.querySelector('#buttons');
myButtons.appendChild(keyboardAlphabet);
keyboardAlphabet.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.tagName === 'BUTTON') {
            let letterGuess = event.target.innerHTML;
            let doesWordInclude = word.includes(letterGuess);
            console.log(letterGuess, wordIndex);
    }
})
