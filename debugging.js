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
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//topic 6

let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);



