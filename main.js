let answer = Math.floor(Math.random() * 100);
console.log(answer);
let numbers = [];

//grab current number and push to array, reset input field

let buttonPress = document.getElementById('submit').addEventListener('click', function() {
	const input = document.getElementById('input-field').value;
	getNumber(input);
});
let counter = 1;

const getNumber = (input) => {
	numbers.push(input);
	document.getElementById('input-field').value = '';
	console.log(numbers);
	checkAnswer(input);
	displayNumbers();
};

//take numbers entered and display to user in list; checks if number entered is close to answer
function displayNumbers() {
	let listItem = document.getElementById(`item-${counter}`);
	counter++;
	listItem.innerHTML = numbers[0];
	numbers.pop();
}

let hintButtonPress = document.getElementById('hint').addEventListener('click', function() {
	getAHint(answer);
});

//when "get a hint button" is clicked it will display 3 numbers close to the answer
function getAHint(answer) {
	let numbersCloseToAnswer = [];
	numbersCloseToAnswer.push(answer);
	let minAnswer = 0;
	let maxAnswer = 0;
	if (answer + 10 < 100 || answer - 10 > 0) {
		minAnswer = answer - 10;
		maxAnswer = answer + 10;
	}

	for (let i = 0; i < 2; i++) {
		let number = Math.floor(Math.random() * (maxAnswer - minAnswer) + minAnswer);
		numbersCloseToAnswer.push(number);
	}

	for (i in numbersCloseToAnswer) {
		console.log(Math.floor(Math.random() * 3));
		let hintList = document.getElementById(`hint-${i}`);
		hintList.innerText = numbersCloseToAnswer[i];
	}
	console.log(numbersCloseToAnswer);
	console.log(answer);
}

function checkAnswer(input) {
	let number = parseInt(input);
	if (number === answer) {
		console.log('you are right!!!!!!!!');
	} else if (Math.abs(answer - number <= 5)) {
		console.log("you're really hot");
	} else if (Math.abs(answer - number) >= 15) {
		console.log("you're really cold");
	} else if (Math.abs(answer - number) <= 10) {
		console.log("you're getting warmer");
	} else if (Math.abs(answer - number) >= 10) {
		console.log("you're getting colder");
	}
}
// logic for answer check
// answer 17
// 17 - 7 = 10 triggers "warmer"
// 17 - 27 = 10 triggers "warmer"
// 17 - 28 = 11 triggers "colder"
// 17 - 6 = 11 triggers "colder"
