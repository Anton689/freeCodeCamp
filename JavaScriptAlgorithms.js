// topic 1 : Convert Celsius to Fahrenheit

function convertToF(celsius) {
	let fahrenheit;
	fahrenheit = (celsius * 9 / 5) + 32;
	return fahrenheit;
 }
 
 convertToF(30);

 //topic 2 : Reverse a String

 function reverseString(str) {
	return str.split('').reverse().join('');
 }
 reverseString("hello");


//topic 3 : Factorialize a Number

 function factorialize(num) {
	if (num < 2) {
	  return 1;
	}
	return num * factorialize(num - 1);
 }
 
 factorialize(5);