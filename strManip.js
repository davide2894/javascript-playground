/*
 * Write a function that takes a string as an argument 
 * and returns another string exactly like the examples below
 *
 * strManip("abcd")    // AbAc-BcBd-CdC-DD
 * strManip("hello")  // HeHl-ElEl-LlLo-LoL-OO
 * strManip("hi")    // HiH-II
 * strManip("A")    // AA
 * strManip("cAt") // CaCt-AtA-TT
 */

function strManip(str){
	
	let output = "";
	
    for(let i=0, len=str.length; i<len; i++){
        // create new string
        if (i < len-1){
            output += str[i].toUpperCase() + str[i+1] + str[i].toUpperCase();
            if (str[i+2]){ output += str[i+2]; }
            output += "-";
        }
        else { output += str[i].toUpperCase().repeat(2); }
    }
	
	console.log(output);
}
strManip("abcd")    // AbAc-BcBd-CdC-DD
strManip("hello")  // HeHl-ElEl-LlLo-LoL-OO
strManip("hi")    // HiH-II
strManip("A")    // AA
strManip("cAt") // CaCt-AtA-TT
