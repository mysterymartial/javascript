function objectOfNumber(array){
    let obj = {};
    for(index in array){
        let key = array[index]
        if(key in obj){
            obj[key]++
        }
        else{
            obj[key]= 1;
        }
    }
    return obj
}
module.exports = objectOfNumber;