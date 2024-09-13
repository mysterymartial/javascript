const {sumOfEvenNumber,findMax,countOddNumbers,isPrime,findFirstDuplicate,reversedArray,factorial,isPalindrome,sumMultipleOf3And5,isLeapYear} = require("./task1.js");

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

	let number = [1,2,3,4,5,6,2,3];
	let result = findFirstDuplicate(number);
	let expected = 2;
	expect(result).toEqual(expected);
});

test("find that there is no duplicate in an array", ()=>{

	let number = [1,2,3,4,5,6];
	let result = findFirstDuplicate(number);
	let expected = -1;
	expect(result).toEqual(expected);
});

test("return a resverse of the array", ()=>{

	let numbers = [1,2,3,4,5,6];
	let result = reversedArray(numbers);
	let expected = [6,5,4,3,2,1];
	expect(result).toEqual(expected);
});

test("return the factorial of number", ()=>{

	let number = 6;
	let result = factorial(number);
	let expected = 720;
	expect(result).toBe(expected);
});

test("check if a palindrome is a string or not", ()=>{

	let word = "bob";
	let result = isPalindrome(word);
	let expected = true;
	expect(result).toEqual(expected);
});

test("check if a palindrome is a string or not", ()=>{

	let word = "come";
	let result = isPalindrome(word);
	let expected = false;
	expect(result).toEqual(expected);
});

test("check if a number is a multiple  of 3 and 5", ()=>{

	let number = 25;
	let result = sumMultipleOf3And5(number);
	let expected = 15;
	expect(result).toEqual(expected);
});

test("check if a year is a leap  or not", ()=>{

	let year = 2023;
	let result = isLeapYear(year);
	let expected = false;
	expect(result).toEqual(expected);
});

test("check if a year is a leap  or not", ()=>{

	let year = 2020;
	let result = isLeapYear(year);
	let expected = true;
	expect(result).toEqual(expected);
});














