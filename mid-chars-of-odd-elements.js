unction midChars(array){
	
	// declare empty string
	let string = "";
	
	// iterate over array elements
	for(let i=0; i<array.length; i++){

		// if element has odd number of letters
        if(array[i].length % 2 !== 0){

			// store it in the string
            string += array[i].charAt(array[i].length / 2);

        }
    
	}
	
	// return newly created string
	return string;
}

midChars(["Happy","New","Year","All","Friends"]); // "pele"
