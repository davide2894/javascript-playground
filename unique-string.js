/*
 * Write a function that can take two or more strings as arguments 
 * and returns a string represent them all, 
 * all characters should stay in the same order as the original string 
 * but remove duplicates
 * 
 * For example:
 * uniqueStr("every","day","a problem") // evrydapoblm

*/

(function uniqueStr(...str){
	let input = "";
    // iterate over each string argument
	for(let i=0, len=arguments.length; i<len; i++){
        // concatenate string in input
		input += str[i];
	}
    // remove duplicates 
	let output = Array.from(new Set(input)).join("");
    // remove non-alphabetical characters and return string
	return output.replace(/[^a-zA-Z]/g,"");
})("every","day","a problem") // evrydapoblm