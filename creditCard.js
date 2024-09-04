function validator(card_number){
	let correctCard = true;
	let inCorrectCard = false;
	 

	let correctCondition = card_number.length== 19 && card_number.charAt(0)== "4" || card_number.charAt(0)== "5" || card_number.charAt(0)=="6" && card_number.charAt(4)=="-" && card_number.charAt(9)=="-" && card_number.charAt(14)=="-";
	if(correctCondition){

	
		return correctCard;


}else{
	return inCorrectCard;

 	

	}
}

let result = validator("4567-8910-1112-1315");
console.log(result);
