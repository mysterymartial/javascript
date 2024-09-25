const { number } = require("yargs");

 

function studentGradeAbove70(array){
    return array.filter((number)=>number > 70) 
}

function addPointToStudentScore(array){
    return array.map((number)=> number + 5)
}

function squareOfStudentScores(array){
    return array.map((number)=> number * number);
}

function bookStore(array){
    let obj ={}
    book = "Gladitor"
    for(key of array){
        if(key in obj){
            obj[key]++
        }
        else{
            obj[key] = book;
        }
    }
    return obj
}

function checkIfIsAfternoon(array){
    let timeFormat = "PM";
    let result = array.filter((element)=> element.includes(timeFormat));
    return result;
}
function calculateExpenses(items){
    let total = 0;
    for(keys in items){
        total += items[keys]

    }
    return total;
}
    
     
    
     
     
    
    
    
    

















module.exports = {studentGradeAbove70, addPointToStudentScore, squareOfStudentScores,bookStore,checkIfIsAfternoon,calculateExpenses}