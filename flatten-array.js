/*
 * Write a function that takes an array of any level of nesting
 * and returns the flattened version
 * For example: 
 * flatten([1,5,6,[2,5,[10,12,15,[]],3,8],6,7); // [1,5,6,2,5,10,12,15,3,8,6,7]
 */

/*
 * @description flattens array
 * @param {array}
 * @returns array without "[" and "]" of nested arrays
 */
function flatten(array){
	return JSON.parse("[" + (array.toString().replace(",,", ",")) + "]");
}
flatten([1,5,6,[2,5,[10,12,15,[]],3,8],6,7]); // (12) [1, 5, 6, 2, 5, 10, 12, 15, 3, 8, 6, 7]