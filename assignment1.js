raw_array = [

		[{name: "Sydney"},
		{population: 1250000},
		{temp:3.0},
		{currency:"NG"}]

	]

	const inner_array = raw_array[0]
	 indexObjectName = -1

	for(let count = 0; count < inner_array.length; count++){
		if(inner_array[count].hasOwnProperty('name')){
			indexObjectName = count;
			break;

}
}


	console.log(inner_array[indexObjectName])
	console.log(inner_array[2])