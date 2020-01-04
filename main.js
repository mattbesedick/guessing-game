//grab current number and push to array, reset input field
let answer = Math.floor(Math.random() * 100);
console.log(answer);
let numbers = [];
const getNumber = (input) => {
	numbers.push(input);
	document.getElementById('input-field').value = '';
	console.log(numbers);
	displayNumbers();
};

let buttonPress = document.getElementById('submit').addEventListener('click', function() {
	const input = document.getElementById('input-field').value;
	getNumber(input);
});
let counter = 1;

//take numbers entered and display to user in list
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
	if (answer + 15 < 100 || answer - 15 > 0) {
		minAnswer = answer - 15;
		maxAnswer = answer + 15;
	}

	for (let i = 0; i < 2; i++) {
		let number = Math.floor(Math.random() * (maxAnswer - minAnswer) + minAnswer);
		numbersCloseToAnswer.push(number);
	}
	console.log(numbersCloseToAnswer);
}

function rightAnswer(input) {}
