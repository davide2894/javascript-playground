/*
 *@description shits capital letter in string for n times
 *@param {array, number}
 *@returns {string} with letters shifted n times
 */
function shiftCapital(str, n){
	
	// find and store capital char
	let capitalChar = str.match(/[A-Z]/).toString();
	
	// store capital char's index
	let capitalIndex = str.indexOf(capitalChar);

	//create array from given string and remove capital char
    let arr = Array.from(str.replace(capitalChar, ""));

	// calculate index to shift to
    let toIndex = (str.indexOf(capitalChar)+n) % (arr.length);
	
	// add capital char to calculated index
    arr.splice(toIndex, 0, capitalChar);

	// convert array to string and return it
    return arr.join("");	
}
shiftCapital("Udacity",4) // daciUty
shiftCapital("leaRning",4) // Rleaning
shiftCapital("frienDs",6) // frienDs
shiftCapital("frienDs",3)  // frDiens