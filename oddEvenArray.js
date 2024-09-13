function totalOfEvenOddNumbers(numbers){
	new_Array = []
	let evenCounter = 0
	let oddCounter = 0
	for(let count of numbers ){
	
		if (count % 2 == 0){
			evenCounter++;
		
		}

		else{
			oddCounter++
			
		
		}
		 

}

	new_Array.push(evenCounter,oddCounter)
	return new_Array;

}


let number = [2,1,5,7,8]
let num = [4,1,5,7,9]
result = totalOfEvenOddNumbers(number);
result1 = totalOfEvenOddNumbers(num)
console.log(result)
console.log(result1)
	

	