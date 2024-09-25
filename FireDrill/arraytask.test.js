// const { default: expect } = require("expect");
const {studentGradeAbove70, addPointToStudentScore, squareOfStudentScores,bookStore,checkIfIsAfternoon,calculateExpenses} = require("./arraytask.js");

test("number of student that score above 70", ()=>{

	let number = [70,65,80,50,90];
	let result = studentGradeAbove70(number);
	let expected = [80,90]
                    
	expect(expected).toEqual(result)
});

test("add 5 point to each student", ()=>{

	let number = [85,92,78,88,95];
	let result = addPointToStudentScore(number);
	let expected = [90,97,83,93,100]
                    
                    
    
	expect(result).toEqual(expected);
});

test("get square of student score", ()=>{

	let number = [2,4,6,8,10];
	let result = squareOfStudentScores(number);
	let expected = [4,16,36,64,100]
                    
                    
    
	expect(result).toEqual(expected);
});



test("assign books to all students", ()=>{

	let names = ["Emily","Jack","Sophia","Daneil"];
	let result = bookStore(names);
	let expected = {
                "Emily": "Gladitor",
                "Jack": "Gladitor",
                "Sophia": "Gladitor",
                "Daneil": "Gladitor"

    }
                    
                    
    
	expect(result).toEqual(expected);
});

test("check if it is afternoon", ()=>{

	let listOfTime = ["11:00AM","1:00PM","3:00PM","5:00PM"];
	let result = checkIfIsAfternoon(listOfTime);
	let expected = ["1:00PM","3:00PM","5:00PM"]
                    
                    
    
	expect(result).toEqual(expected);
});

test("calculate user expenses", ()=>{

	let listOfExpenses = {"groceries": 150,"dining out":100,"transportation":50,"entertainment":80};
	let result = calculateExpenses(listOfExpenses);
	let expected = 380;
                    
                    
    
	expect(result).toEqual(expected);
});