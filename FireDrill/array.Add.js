

function arraySum(array){
    let add = ""
    let newArray = []
    for(let numbers of array){
        add += String(numbers)
        
    

    }
    let output = Number(add)
    output = output+1
    let newOutput = String(output)
    for(num of newOutput){
        let result = Number(num)
        newArray.push(result)

    }
        
    


    

     
    
    
    
    return newArray;
}






module.exports = {arraySum}

