//topic 1 

let a = 5;
let b = 1;
a++;

console.log(a);
let sumAB = a + b;
console.log(sumAB);

//topic 3

let seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof seven);
console.log(typeof three);

//topic 4

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//topic 5

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//topic 6

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
	result = "Equal!";
} else {
	result = "Not equal!";
}

console.log(result);

// topic 7

function getNine() {
	let x = 6;
	let y = 3;
	return x + y;
}
let result = getNine();
console.log(result);

//topic 8

function raiseToPower(b, e) {
	return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//topic 9

function countToFive() {
	let firstFive = "12345";
	let len = firstFive.length;
	// Only change code below this line
	for (let i = 0; i < len; i++) {
		// Only change code above this line
		console.log(firstFive[i]);
	}
}

countToFive();

//topic 10

function zeroArray(m, n) {

	let newArray = [];

	for (let i = 0; i < m; i++) {

		let row = [];
		for (let j = 0; j < n; j++) {

			row.push(0);
		}

		newArray.push(row);
	}
	return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//topic 11

function myFunc() {
	for (let i = 1; i <= 4; i += 2) {
		console.log("Still going!");
	}
}
