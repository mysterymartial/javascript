const book = { title: "the Great Gatsby", author: "F.Scott Fitzgerald", yearPublished: 1925};

function extract (book){
	const{title,author} = book;
	return title +  "  " + author;
}

let result = extract(book);
console.log(result);


function printObject(car){
	let result = "";

	for(let key in car){
		result = result + key + ":" + car[key] + " ";
	}


	return result;		

}

function counter(){
		
		return{	
			count: 0,
			step: 1,
			increase: function increament(){
					this.count += this.step
					return this.count;

				},


			decrease: function decreasement(){

					this.count -= this.step
					return this.count;
			}

			}
			}

			

const human = {

		firstName: "bola",
		lastName: "shola"
		};


	function fullName(human){

	const{firstName , lastName} = human;

	return firstName + "  " + lastName;

}

const person = {

		firstName: "bola",
		lastName: "shola",
		age: 25
		};

	function show(person){
		let result = "";

		for(let key in person){
			result +=  key + ":" + person[key] + " ";
	}


			return result;
		}
		const array = new Array(3)
		array.push(5)
		array.push(6)
		array.push(7);
		array.push(12)
		array.push(8)
		array.push(10)
		console.log(array)
		
			


				
answer = fullName(human);
answer1 = show(person);
console.log(answer1);
console.log(answer);					





	







module.exports = {printObject}

	
	




