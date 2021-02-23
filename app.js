// letters array for keyboard
keyBoardAlphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

// array categories for guesses
const basketBall = ['LEBRON JAMES', 'MICHAEL JORDAN', 'STEPHEN CURRY'];
const food = ['FRIED SHRIMP', 'GRAPES', 'TUNA'];
const programmingLanguages = ['JAVASCRIPT', 'PYTHON', 'JAVA', 'SWIFT', 'SCALA'];



// creating keyboard
// let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    for(let i = 0; i < keyBoardAlphabet.length; i++) {
        keyBoardLetters = document.createElement('li');
        keyBoardLetters.innerHTML = keyBoardAlphabet[i];
        letters.id = 'alphabet';
        keyBoardLetters.id = 'letters';
        letters.appendChild(keyBoardLetters);
        myButtons.appendChild(letters);
    }
// }
// console.log(letters);
