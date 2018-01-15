/*
 * Remove All Copies
 * Write a function that removes all repeated elements of an array
 * 
 * removeCopies([5,8,4,8,3,2,1,5]); // [4,3,2,1]
 * removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]
*/

/*
 * @description removes characters that occure more than once in the array
 * @param {array}
 * @returns array containing only unique characters
**/
var removeDuplicates = function removeDuplicates(array) {
	return array.filter(function (element) {
		return array.indexOf(element) === array.lastIndexOf(element);
	});
};
removeDuplicates([5, 8, 4, 8, 3, 2, 1, 5]); // [4,3,2,1]