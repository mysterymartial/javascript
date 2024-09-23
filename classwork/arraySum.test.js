// const { default: expect } = require("expect");
const arrayIndexSum = require("./arraySum.js");

test("add  numbers in the index of an  array", ()=>{

	let number = [2,3,4,5,6,7];
	let result = arrayIndexSum(number);
	let expected = [5,9,13];
	expect(expected).toEqual(result)
});

test("add  numbers in the index of an  array", ()=>{

	let number = [1,3,5,1,6,3];
	let result = arrayIndexSum(number);
	let expected = [4,6,9];
	expect(result).toEqual(expected);
});

