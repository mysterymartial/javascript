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
    let answer = []
     return array.filter((time)=>{
        for(let index = 0; index < array; array++){
            if(time[index] == "P")
                answer.push(time)
            else{
                return 0
            }
        }
        return answer;
        
            
        }
        
       

    )};
     
     
    
     
     
    
    
    
    

















module.exports = {studentGradeAbove70, addPointToStudentScore, squareOfStudentScores,bookStore,checkIfIsAfternoon}