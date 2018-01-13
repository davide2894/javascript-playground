/*
 * @description flattens array
 * @param {array}
 * @returns array without "[" and "]" of nested arrays
 */
/*
 *@description shits capital letter in string for n times
 *@param {array, number}
 *@returns string with letters shifted n times
 */
function shiftCapital(str, num){

    let len = str.length;
    let capitalIndex;
    let indexToGo;

    str = str.split("");

    // find uppercase letter and store the index
    for (let i = 0; i < len; i++) {
        if (str[i] == str[i].toUpperCase()) {
            capitalIndex = i;
        }   
    }
    
    // iterate over array from capital letter index n times
    for (i = capitalIndex, nOfSwaps = i + num; i < nOfSwaps; i++) {

        // find index to go
        indexToGo = i % (len - 1);
            
        // swap values at the two indexes
        let temp = str[indexToGo];
        str[indexToGo] = str[capitalIndex];
        str[capitalIndex] = temp;

        // update index of capital letter
        capitalIndex = indexToGo;
    }
    
    // convert string into array    
    return str.join("");
}

shiftCapital("Udacity", 2) // daUcity


