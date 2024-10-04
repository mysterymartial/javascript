// const { default: expect } = require("expect");
const { closeSync } = require("graceful-fs");
const {arraySum } = require("./array.Add.js");

test("Add 1 to the total number in an array and return in an array", ()=>{

	let number = [9,9,9];
	let result = arraySum(number);
	let expected = [1,0,0,0]
                    
	expect(expected).toEqual(result)
});

test("Add 1 to the total number in an array and return in an array", ()=>{

	let number = [2,3,4];
	let result = arraySum(number);
	let expected = [2,3,5]
                    
                    
    
	expect(result).toEqual(expected);
});






