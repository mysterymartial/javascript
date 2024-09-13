const {sumOfEvenNumber,findMax,countOddNumbers,isPrime,findFirstDuplicate} = require("./task1.js");

test("add even numbers in an array", ()=>{

	let number1 = [1,2,3,4,5,6];
	let result = sumOfEvenNumber(number1);
	let expected = 12;
	expect(expected).toEqual(result);
});

test("find the largest number in an array", ()=>{

	let number1 = [1,2,3,4,5,6];
	let result = findMax(number1);
	let expected = 6;
	expect(result).toEqual(expected);
});

test("the number of odd numbers in the array", ()=>{

	let number1 = [1,2,3,4,5,6];
	let result = countOddNumbers(number1);
	let expected = 3;
	expect(result).toEqual(expected);
});

test("check if a number is a prime number", ()=>{

	let number = 5;
	let result = isPrime(number);
	let expected = true;
	expect(result).toEqual(expected);
});

test("find the first duplicate in an array", ()=>{

	let number1 = [1,2,3,4,5,6,2,3];
	let result = findFirstDuplicate(number1);
	let expected = 2;
	expect(result).toEqual(expected);
});

test("find that there is no duplicate in an array", ()=>{

	let number1 = [1,2,3,4,5,6];
	let result = findFirstDuplicate(number1);
	let expected = -1;
	expect(result).toEqual(expected);
});

