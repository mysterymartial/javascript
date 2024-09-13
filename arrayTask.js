
function max_min_guy(array){
let output= []
let temp = 0
for(let index= 0; index < array.length; index++){
for(let count = index + 1; count < array.length; count++){
	if(array[count] > array[index]){
		array[index] = array[index] + array[count]
		array[count] = array[index] - array[count]
		array[index] = array[index] - array[count]
		output[0] = array[array.length-1]
		output[1] = array[0]


}

}
}
	return output;
}
var array1 = [2,3,6,7,8]
var array2 = [5,3,6,9,8]
result = max_min_guy(array2)
result1 = max_min_guy(array1)



console.log(result);
console.log(result1);	
	
