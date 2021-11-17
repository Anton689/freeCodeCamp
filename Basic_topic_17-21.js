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
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result = fccRegex.test(myString);

//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

//Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 

//Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; 
let result = unRegex.test(exampleStr);

//Logical Order in If Else Statements

function orderMyLogic(val) {
	if (val < 5) {
	  return "Less than 5";
	} else if (val < 10) {
	  return "Less than 10";
	} else {
	  return "Greater than or equal to 10";
	}
 }
 
 orderMyLogic(7);

 //Chaining If Else Statements

 function testSize(num) {
 if (num < 5) {
	return 'Tiny';
 }else if (num < 10){
	return 'Small';
 }else if (num < 15) {
	return 'Medium';
 }else if (num < 20){
	return 'Large';
 }else{
	return 'Huge';
 }
 }

 testSize(7);

 //Golf Code

 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  if (strokes == 1) {
    return names[0];
  }else if (strokes <= par - 2){
    return names[1];
  }else if (strokes == par -1){
    return names[2];
  }else if (strokes == par){
    return names[3];
  }else if (strokes == par + 1){
    return names[4];
  }else if (strokes == par + 2){
    return names[5];
  }else if (strokes >= par + 3){
    return names[6];
  }
}


//Selecting from Many Options with Switch Statements

 {
	let answer = "";
 switch(val) {
	case 1:
	answer = 'alpha'
	break;
 
	case 2:
	answer = 'beta'
	break;
 
	case 3:
	answer = 'gamma'
	break; 
 
	case 4:
	answer = 'delta';
	break; 
 }
	return answer;
 }


//Adding a Default Option in Switch Statements

 function switchOfStuff(val) {
  let answer = "";

switch (val) {
  case 'a':
    answer = 'apple';
    break;

  case 'b' :
    answer = 'bird';
    break;

  case 'c' :
    answer = 'cat';
    break;

    default:
    answer = 'stuff';
    break;
}
  return answer;
}

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
	let answer = "";
	 switch(val) {
		case 1:
		case 2:
		case 3:
		 answer = 'Low';
		 break;
 
		 case 4:
		 case 5:
		 case 6:
		 answer = 'Mid';
			break;
 
		 case 7:
		 case 8:
		 case 9:
		 answer = 'High';
			break;	  
	 }
	return answer;
 }

 //Match Single Character with Multiple Possibilities

 let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
 

//Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i].indexOf(elem) == -1) {
		  newArr.push(arr[i]);
	  }
	}
	// Only change code above this line
	return newArr;
 }
	
 
 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

 //Create complex multi-dimensional arrays

 let myNestedArray = [
	// Only change code below this line
	['unshift', false, 1, 2, 3, 'complex', 'nested'],
	['loop', 'shift', 6, 7, 1000, 'method'],
	['concat', false, true, 'spread', 'array', ['deep']],
	['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
	['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
	// Only change code above this line
 ];

 //Replacing If Else Chains with Switch

 function chainToSwitch(val) {
	var answer = "";
	switch (val) {
	  case "bob":
		 answer = "Marley";
		 break;
	  case 42:
		 answer = "The Answer";
		 break;
	  case 1:
		 answer = "There is no #1";
		 break;
	  case 99:
		 answer = "Missed me by this much!";
		 break;
	  case 7:
		 answer = "Ate Nine";
		 break;
	}
	return answer;
 }

 //Returning Boolean Values from Functions

 function isLess(a, b) {
	return a <= b;
 }

 isLess(10, 15);

 //Return Early Pattern for Functions

 function abTest(a, b) {
	if (a < 0 || b < 0) {
	  return undefined;
	}
 
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 
 abTest(2, 2);

 //Counting Cards

 let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
 
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Build JavaScript Objects

const myDog = {
 "name": "Daisy",
 "legs": 4,
 "tails": 1, 
 "friends": ["Masha", "Anton"]
 
 };

 //Accessing Object Properties with Dot Notation

const testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
 };
 
 const hatValue = testObj.hat;      // Change this line
 const shirtValue = testObj.shirt;    // Change this line

 //Accessing Object Properties with Bracket Notation

 const testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
 };
 
 const entreeValue = testObj["an entree"];   // Change this line
 const drinkValue = testObj["the drink"];    // Change this line

 //Accessing Object Properties with Variables

 const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
 };
 
 const playerNumber = 16;  // Change this line
 const player = testObj[playerNumber];   // Change this line

 //Updating Object Properties

 const myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
 };
 
 myDog.name = 'Happy Coder';

 //Add New Properties to a JavaScript Object

 const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
 };
 
 myDog.bark = "woof";

 //Delete Properties from a JavaScript Object

const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
 };
 
 delete myDog.tails;

 //Using Objects for Lookups

function phoneticLookup(val) {
	let result = "";

 const lookup = {
	alpha: "Adams",
	bravo: "Boston",
	charlie: "Chicago",
	delta: "Denver",
	echo: "Easy",
	foxtrot: "Frank",
 };
 result = lookup[val];
	
	return result;
 }
 
 phoneticLookup("charlie");

 //Testing Objects for Properties

 function checkObj(obj, checkProp) {

	return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
	
 }

 //Manipulating Complex Objects

 const myMusic = [
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		 "CD",
		 "8T",
		 "LP"
	  ],
	  "gold": true
	},
	{
	  "artist": "Mettalica",
	  "title": "jar",
	  "release_year": 1953,
	  "formats": [
		 "CD",
		 "2T",
		 "DVD"
	  ]
 }
	
 ];

 //Accessing Nested Objects

 const myStorage = {
	"car": {
	  "inside": {
		 "glove box": "maps",
		 "passenger seat": "crumbs"
		},
	  "outside": {
		 "trunk": "jack"
	  }
	}
 };
 
 const gloveBoxContents = myStorage.car.inside['glove box'];

 //Accessing Nested Arrays

 var myPlants = [
	{
	  type: "flowers",
	  list: ["rose", "tulip", "dandelion"]
	},
	{
	  type: "trees",
	  list: ["fir", "pine", "birch"]
	}
 ];
 
 var secondTree = myPlants[1].list[1];

 //Record Collection

 const recordCollection = {
	2548: {
	  albumTitle: 'Slippery When Wet',
	  artist: 'Bon Jovi',
	  tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
	  albumTitle: '1999',
	  artist: 'Prince',
	  tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
	  artist: 'Robert Palmer',
	  tracks: []
	},
	5439: {
	  albumTitle: 'ABBA Gold'
	}
 };
 
 function updateRecords(records, id, prop, value) {
	if (prop !== 'tracks' && value !== "") {
	  records[id][prop] = value;
	} else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
	  records[id][prop] = [value];
	} else if (prop === "tracks" && value !== "") {
	  records[id][prop].push(value);
	} else if (value === "") {
	  delete records[id][prop];
	}
	return records;
 }
 
 updateRecords(recordCollection, 5439, 'artist', 'ABBA');
 
 //Iterate with JavaScript While Loops

const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//Iterate with JavaScript For Loops

const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

//Iterate Odd Numbers With a For Loop

const myArray = [];

for(let i = 1; i < 10; i += 2){
  myArray.push(i);
}

//Count Backwards With a For Loop

const myArray = [];

for(let i = 9; i > 0; i -=2){
  myArray.push(i);
}

//Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i ++){
    total += myArr[i];
}

//Nesting For Loops

function multiplyAll(arr) {
	let product = 1;
	for(let i = 0; i < arr.length; i++){
	  for(let j = 0; j < arr[i].length; j++){
		 product *= arr[i][j];
	  }
	}
	return product;
 }

 //Iterate with JavaScript Do...While Loops

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++
}

while (i < 5)

//Replace Loops using Recursion

function sum(arr, n) {
	if(n <= 0) {
	  return 0;
	} else {
	  return sum(arr, n - 1) + arr[n - 1];
	}
 }

 //Profile Lookup

 function lookUpProfile(name, prop) {
	for (let x = 0; x < contacts.length; x++) {
	  if (contacts[x].firstName === name) {
		 if (contacts[x].hasOwnProperty(prop)) {
			return contacts[x][prop];
		 } else {
			return "No such property";
		 }
	  }
	}
	return "No such contact";
 }

 //Generate Random Fractions with JavaScript

 function randomFraction() {
	var result = 0;
 
	while (result === 0){
	  result = Math.random();
	}
 
	return result;
 }

 //Generate Random Whole Numbers with JavaScript

 function randomWholeNum() {
 
	return Math.floor(Math.random() * 10);
 }

 //Generate Random Whole Numbers within a Range

 function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;;
 }






