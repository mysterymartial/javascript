// const { default: expect } = require("expect");
const objectOfNumber = require("./classDrill.js");

test("add  numbers in the index of an  array to an object", ()=>{

	let number = [1,1,2,3,2];
	let result = objectOfNumber(number);
	let expected = {
					"1":2,
					"2": 2,
					"3": 1
	};
                    
	expect(expected).toEqual(result)
});

test("add  numbers in the index of an  array to an object", ()=>{

	let number = [5,4,5,6,7,6];
	let result = objectOfNumber(number);
	let expected = {"4":1, "5":2, "6":2, "7":1};
                    
                    
    
	expect(result).toEqual(expected);
});


