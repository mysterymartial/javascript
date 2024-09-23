function arrayIndexSum(numbers){
    let sumArray = []
    let sum = 0
    let counter = 0
    for(let index = 0; index < numbers.length; index+=2){
             sum = numbers[index] + numbers[index +1]
             
             sumArray.push(sum);

        }
    

    
        return sumArray

}









module.exports = arrayIndexSum;