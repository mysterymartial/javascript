const  {printObject}= require("./objectlesson.js");

test("check if function can print a objects keys and value", ()=>{

	const car = {
			make: "Toyota",
			model: "Camry",
			year: 2021
			}

	let result = printObject(car);
	let expected = "make:Toyota model:Camry year:2021 ";
	expect(expected).toEqual(result);
});

//test("check if function can print a objects keys and value", ()=>{

	//let count = 0;
	//let step = 1;
	//let result = counter(count,step);
	//let expected = 1;
	//expect(expected).toEqual(result);
//});


	