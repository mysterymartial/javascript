function sumOfEvenNumber(numbers){
	let sum = 0;

	for(let count of numbers){

		if(count % 2==0){
			
		sum += count;
}

}

	return sum;
}

function findMax(numbers){
let large = 0
for(let count of numbers){
if(count > large){
large = count;
}
}
return large;
}

function countOddNumbers(numbers){
let oddNumberCounter = 0;
for(let count of numbers){
	if (count % 2 != 0){
		oddNumberCounter++;
}
}
 return oddNumberCounter;
}

function isPrime(number){
let counter = 1
while(counter <= number){

	if(counter % number == 0 && counter != 1){
		return false;

	}else{
		return true;
}

	counter = counter + 1
}
}

function findFirstDuplicate(numbers){
	for(let count =0; count < numbers.length; count++){
		for(let counter = count + 1; counter < numbers.length; counter++){
			if(numbers[count] == numbers[counter]){

				return numbers[count]}
		}
	}
	return -1;
}
 
function reversedArray(numbers){
	let reversedArrays = [];
	
	for(let index =numbers.length-1; index >=0; index--){
		reversedArrays.push(numbers[index]);

		
	}

		return reversedArrays;

		}
function factorial(number){
	let factorial = 1;
	for(let count =1; count <= number; count++){
		factorial *= count;
}

	return factorial;
}

function isPalindrome(word){
	let reverse =""
	
	for(let character = word.length-1; character >= 0; character--){
		reverse = reverse + word[character]
		
		
}
	if(word != reverse){
		return false;

}
 
	else{
		return true;

	}


	}

	function sumMultipleOf3And5(number){
		let add = 0;
	
		for(let counter = 1; counter < number; counter++){
		if(counter % 3 == 0 && counter % 5 == 0){

		 add += counter

}

}

return add;
}

function isLeapYear(year){

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {

	return true;

}
else{

	return false
}

}

           

				
	

	

	
	

	

	
		
		
		
		
	

 





		





module.exports = {sumOfEvenNumber,findMax,countOddNumbers,isPrime,findFirstDuplicate,reversedArray,factorial,isPalindrome,sumMultipleOf3And5,isLeapYear};