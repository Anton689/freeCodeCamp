//topic 17
const product = 2.0 * 2.5;
console.log(product);

//topic 18

const quotient = 4.4 / 2.0; // Change this line

//topic 20

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

//topic 21

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

//topic 22 & 23

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;


a /= 12;
b /= 4;
c /= 11;

//topic 24

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);

//topic 25 : Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

//topic 26 : Escape Sequences in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr);

//topic 27 : Concatenating Strings with Plus Operator

const myStr = "This is the start." + " This is the end.";

//topic 28 : Concatenating Strings with the Plus Equals Operator

let myStr = 'This is the first sentence.';
myStr += ' This is the second sentence.';

//topic 29 : Constructing Strings with Variables

const myName = "Anton ";
const myStr = "My name is " + myName + 'and I am well!';

//topic 30 : Appending Variables to Strings

const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective;

//topic 31 : Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName;

lastNameLength = lastName.length;

//topic 32 : Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

//topic 33 : Understand String Immutability


let myStr = "Jello World";

myStr = "Hello World"; 

//topic 34 : Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; // Change this line

//topic 35 : Use Bracket Notation to Find the Last Character in a String


const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1]; 

//topic 36 : Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//topic 37 : Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " " + myAdverb + "."; // Change this line

//topic 38 : Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["peanut butter", 3 , "bread"];

//topic 39 : Nest one Array within Another Array

const myArray = [["Anton", 28] , ["Egor" , 20]];

//topic 40 : Access Array Data with Indexes

const myArray = [50, 60, 70];
const myData = myArray[0];

//topic 41 : Modify Array Data With Indexes

const myArray = [18, 64, 99];
myArray[0] = 45;

//topic 42: Access Multi-Dimensional Arrays With Indexes

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
 ];
 
 const myData = myArray[2][1];

 //topic 43 : Manipulate Arrays With push()

const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog" , 3]);

//topic 44 : Manipulate Arrays With pop()

const myArray = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop();

//topic 45 : Manipulate Arrays With shift()

const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift();

//topic Global vs. Local Scope in Functions

const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = 'sweater';
  return outerWear;
}
myOutfit();

//topic Understanding Undefined Value returned from a Function

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

// Assignment with a Returned Value

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);


//Stand in Line

function nextInLine(arr, item) {
	arr.push(item);
 	return arr.shift();
	
 }
 
 const testArr = [1, 2, 3, 4, 5];

 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));

 //Use Conditional Logic with If Statements

 function trueOrFalse(wasThatTrue) {
	if(wasThatTrue) {
	  return 'Yes, that was true';
	}
	return 'No, that was false'; 

 }
 // Comparison with the Equality Operator

function testEqual(val) {
	if (val == 12) { 
	  return "Equal";
	}
	return "Not Equal";
 }
 
 testEqual(10);

 //Comparison with the Strict Equality Operator

function testStrict(val) {
	if (val === 7) {
	  return "Equal";
	}
	return "Not Equal";
 }
 
 testStrict(10);

 //Practice comparing different values

function compareEquality(a, b) {
	if (a === b) { 
	  return "Equal";
	}
	return "Not Equal";
 }
 
 compareEquality(10, "10");

 //Comparison with the Inequality Operator

 function testNotEqual(val) {
	if (val != 99) { 
	  return "Not Equal";
	}
	return "Equal";
 }
 testNotEqual(10);

 //Comparison with the Strict Inequality Operator

 function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
 }
 
 testStrictNotEqual(10);

 //Comparison with the Greater Than Operator

 function testGreaterThan(val) {
	if (val > 100) {  
	  return "Over 100";
	}
	if (val > 10) {  
	  return "Over 10";
	}
 
	return "10 or Under";
 }
 testGreaterThan(10);

 //Comparison with the Greater Than Or Equal To Operator

 function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
	  return "20 or Over";
	}
 
	if (val >= 10) {  // Change this line
	  return "10 or Over";
	}
 
	return "Less than 10";
 }
 
 testGreaterOrEqual(10);

 //Comparison with the Less Than Operator

 function testLessThan(val) {
	if (val < 25) { 
	  return "Under 25";
	}
 
	if (val < 55) { 
	  return "Under 55";
	}
 
	return "55 or Over";
 }
 
 testLessThan(10);

 //Comparison with the Less Than Or Equal To Operator

 function testLessOrEqual(val) {
	if (val <= 12) { 
	  return "Smaller Than or Equal to 12";
	}
	if (val <= 24) { 
	  return "Smaller Than or Equal to 24";
	}
	return "More Than 24";
 }
 testLessOrEqual(10);

 //Comparisons with the Logical And Operator

 function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
		 return "Yes"; 
	}
	return "No";
 }
 testLogicalAnd(10);

 //Comparisons with the Logical Or Operator

 function testLogicalOr(val) {
	if (val < 10 || val > 20) {
	  return "Outside";
	}
	return "Inside";
 }
 testLogicalOr(15);

 //Introducing Else Statements

 function testElse(val) {
	let result = "";
	if (val > 5) {
	  result = "Bigger than 5";
	}else{
	  result = "5 or Smaller";
	}
	return result;
 }
  testElse(4);

  //Compare Scopes of the var and let Keywords

  function checkScope() {
	let i = 'function scope';
	if (true) {
	  let i = "block scope";
	  console.log('Block scope i is: ', i);
	}
	console.log('Function scope i is: ', i);
	return i;
 }

 //Mutate an Array Declared with const

 const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;

}
editInPlace();

//Prevent Object Mutation

function freezeObj() {
	const MATH_CONSTANTS = {
	  PI: 3.14
	};
	Object.freeze(MATH_CONSTANTS);
	try {
	  MATH_CONSTANTS.PI = 99;
	} catch(ex) {
	  console.log(ex);
	}
	return MATH_CONSTANTS.PI;
 }
 const PI = freezeObj();

 //Use Arrow Functions to Write Concise Anonymous Functions

 const magic = () => new Date;

 // Write Arrow Functions with Parameters

 const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

//Use the Rest Parameter with Function Parameters

const sum = (...args) => {
	//const args = [x, y, z];
	return args.reduce((a, b) => a + b, 0);
 }

 //Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
 };
 
 const {today, tomorrow } = HIGH_TEMPERATURES;
 

 //Use Destructuring Assignment to Assign Variables from ObjectsPassed

 const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
 };

 
 const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
 
 //Use Destructuring Assignment to Assign Variables from Nested Objects

 const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
 };
 const {today: {low: lowToday, high: highToday }} = LOCAL_FORECAST;
 

 //Use Destructuring Assignment to Assign Variables from Arrays

 let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list  

  return arr;
}
const arr = removeFirstTwo(source);

//Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

//Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);