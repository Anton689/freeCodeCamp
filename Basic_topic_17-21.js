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

 