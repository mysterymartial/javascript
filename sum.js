function add(number1, number2){

	return number1 + number2;
}

function subtract(number1, number2){

	return number1  - number2;
}
function evenArray(array){
	let new_Array = []

	for(let count of array){
		if(count % 2==0){
		new_Array.push(count);
}

}

	
	return new_Array;
}

module.exports = {add, subtract,evenArray};