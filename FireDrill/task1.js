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

				return numbers[count];
			}
		}
	}
	return -1;
}
 

 





		





module.exports = {sumOfEvenNumber,findMax,countOddNumbers,isPrime,findFirstDuplicate};