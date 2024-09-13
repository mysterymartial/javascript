const user = [{
	firstName:"bola",
	lastName:"Agbaosi",
	age: 12,
	occupation:"software engineer",
	greet: greeter()
	},
	]


function greeter(){

	return "weldone senior engineer";
}

for(let index of user){
	console.log(index)
}

console.log(user[0].greet)