const {add,subtract,evenArray} = require("./sum.js");

test("add two numbers", ()=>{

	let number1 = 1;
	let number2 = 2;
	let result = add(number1,number2);
	let expected = 3;
	expect(expected).toBe(result);
});

test("subtract two number", ()=>{
	let number1 = 5;
	let number2 = 3;
	let result = subtract(number1, number2);
	let expected = 2;
	expect(result).toBe(expected);
});

test("array of evenNumber", ()=>{
	let numbers = [1,2,3,4,5];
	let result = evenArray(numbers);
	expect(result).toEqual([2,4]);
});
	