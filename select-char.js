var arr = ["Umbrella", "drum", "aka", "cartz", "ini", "toon", "young"];
var first = "";
var last = "";


function select(array){
    
	// iterate over array elements based on index
	
    for(let i=0; i<array.length; i++){
	
        // select first character of each element
		
        first += array[i].charAt(0);
		
        // select last character of each element
		
        last += array[i].charAt(array[i].length-1);
	}
    
    // form a new string with the selected characters
	
    console.log(first + " is " + last);
}

select(arr); // Udacity is amazing