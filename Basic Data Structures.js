// Use an Array to Store a Collection of Data

let yourArray; // Change this line
yourArray = ['one' , 3 ,  false, 'js', 9];


//Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];

myArray[1] = 'Hello';

console.log(myArray);

//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
	arr.unshift("I", 2, "three");
	arr.push(7, "VIII", 9);
	return arr;
 }
 
 console.log(mixedNumbers(['IV', 5, 'six']));

 //Remove Items from an Array with pop() and shift()

 function popShift(arr) {
	let popped = arr.pop(); 
	let shifted = arr.shift() 
	return [shifted, popped];
 }
 
 console.log(popShift(['challenge', 'is', 'not', 'complete']));

 // Remove Items Using splice()

 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1);
arr.splice(3);
console.log(arr);

//Add Items Using splice()

function htmlColorNames(arr) {
 arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
	return arr;
 }
 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

 //Copy Array Items Using slice()

 function forecast(arr) {
	 
 let sliceElement = arr.slice(2, 4);
	return sliceElement;
 }
 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

 // Find the Longest Word in a String

 function findLongestWordLength(str) {
	let wordsToArr = str.split(' ');
	let longest = 0;
 
	for (i= 0; i < wordsToArr.length; i++) {
	  if (wordsToArr[i].length > longest) {
		 longest = wordsToArr[i].length;  
	  }
	}
	return longest; 
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays

 function largestOfFour(arr) {
	let numArray = [];
 
	for (let i = 0; i < arr.length; i++) {
	  let largest = arr[i][0];
	  for (let j = 1; j < arr[i].length; j++){
		 if (arr[i][j] > largest) {
			largest = arr[i][j];
		 }
		 
		}
		numArray[i] = largest;
	}
  return numArray;
 };
