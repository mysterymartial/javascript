const { name } = require("ci-info");
const { number } = require("yargs");

let result = Array.from("semicolon")
//let result1 = Array.to("semic")
let array = [1,3,4,6,7,[1,9,0,0]]
let arrays = [8,9,10]
let arrayofObj = [
     {
        name: "bola"

    },
    {
        name: "shola"
    }
    
]
let shop = [
    {
    friut :"mango"

    },
    {
        friut: "apple"
    }
]
//array.push([7,8,9])
//let new_Array = Array.of(1,2,4,6)
//let slice = array.slice(1,4)
//let backSlice = new_Array.slice(-2)
//let answer = array.splice(1,2) remove element with a splice
//console.log(answer)
//let answer = array.splice(1,0,6,9) insert with a splice
//console.log(array)
//let answer = array.splice(1,1,6,9) replace with a splice
//let answer = array.splice(1,0,6,9, ...arrays) splice with speard operator
//console.log(array)
arrays.forEach((element)=>{
    let answer = element * 2;
    //console.log(answer)

})
function evenNumber(arr){
    return arr.filter((number)=>number % 2 == 0)
}
function multiply(arr){
    return arr.map((number)=>number * 2)
}
function objPlay(arr){
    
        return arr.map((arr)=> arr.name)

    }
    function isApple(friuts){
        return friuts.friut = "apple";
    }
    //console.log(shop.find(isApple))
    //console.log(array.flat())
    //const getMax = (a,b)=>Math.max(a,b)
    //const myAnswer = [1,100].reduce(getMax, 200)//reduce implementation
    //console.log(myAnswer)
    //function reducer (accumulatot, intial, index){
        //const returns = accumulatot + intial;
        //console.log(`accumulator: ${accumulatot} intial: ${intial} index:${index}  returns: ${returns}`)
        //return returns;
    //}
    //arrays.reduce(reducer)//implementation of reduce
    //reducing = [8,9,10].reduce((accumulator, intial)=> accumulator + intial

    //);
    const numbers = [{num:3},{num:3},{num:3}]
    const sum = numbers.reduce((accumulator , intial)=> accumulator + intial.num,0,

    )
    console.log(sum)
    //console.log(reducing)
    
        

result1 = multiply(array)
result = evenNumber(array)
result2 = objPlay(arrayofObj)
//console.log(result)
//console.log(result1)
//console.log(result2)


//console.log(result)
//console.log(array)
//console.log(new_Array)
//console.log(slice)
//console.log(backSlice)
