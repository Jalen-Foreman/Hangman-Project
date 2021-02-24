
window.onload = function () {
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

	let categories; // Array of topics
	let chosenCategory; // Selected catagory
	let word; // Selected word
	let guess; // Geuss
	let geusses = []; // Stored geusses
	let lives; // Lives
	let counter; // Count correct geusses
	let space; // Number of spaces in word '-'

	// Get elements
	let showLives = document.getElementById('mylives');
	

	// create alphabet ul
	let buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('li');
			list.id = 'letter';
			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	};

	// Select Catagory
	let categorySelect = function () {
		if (chosenCategory === categories[0]) {
			catagoryName.innerHTML = 'The Chosen Category Is Basketball';
		} else if (chosenCategory === categories[1]) {
			catagoryName.innerHTML = 'The Chosen Category Is food';
		} else if (chosenCategory === categories[2]) {
			catagoryName.innerHTML = 'The Chosen Category Is programming languages';
		}
	};

	// Create geusses ul
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (let i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
			if (word[i] === '-') {
				guess.innerHTML = '-';
				space = 1;
			} else {
				guess.innerHTML = '_';
			}

			geusses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	};

	// Show lives
	comments = function () {
		showLives.innerHTML = 'You have ' + lives + ' lives';
		if (lives < 1) {
			showLives.innerHTML = 'Game Over';
		}
		for (let i = 0; i < geusses.length; i++) {
			if (counter + space === geusses.length) {
				showLives.innerHTML = 'You Win!';
			}
		}
	};
	// OnClick Function
	check = function () {
		list.onclick = function () {
			let geuss = this.innerHTML;
			this.onclick = null;
			for (let i = 0; i < word.length; i++) {
				if (word[i] === geuss) {
					geusses[i].innerHTML = geuss;
					counter += 1;
				}
			}
			let j = word.indexOf(geuss);
			if (j === -1) {
				lives -= 1;
				comments();
			} else {
				comments();
			}
		};
	};

	// Play
	play = function () {
		categories = [
			['LEBRON JAMES', 'MICHAEL JORDAN', 'STEPHEN CURRY'],
			['FRIED SHRIMP', 'GRAPES', 'TUNA'],
			['JAVASCRIPT', 'PYTHON', 'JAVA', 'SWIFT', 'SCALA'],
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, '-');
		console.log(word);
		buttons();

		geusses = [];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
		categorySelect();
	};

	play();

	// Reset

	document.getElementById('reset').onclick = function () {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		play();
	};
}