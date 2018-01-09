/*
 * Write a function that can take two or more strings as arguments 
 * and returns a string represent them all, 
 * all characters should stay in the same order as the original string 
 * but remove duplicates
 * 
 * For example:
 * uniqueStr("every","day","a problem") // evrydapoblm

*/

function uniqueStr(){
	let input = "";
    // iterate over each string argument
	for(str in arguments){
        // concatenate string in input
		input += str;
	}
    // remove duplicates 
    // remove non-alphabetical characters and return string
	return Array.from(new Set(input)).join("").replace(/[^a-zA-Z]/g,"");

}
uniqueStr("every","day","a problem") // evrydapoblm