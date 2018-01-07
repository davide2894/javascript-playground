/*Now the problem of the day!!!

* Write a function that takes an array as an argument 
* and finds the lowest common multiple of the array's elements

* For example

* lcm([1,2,4,9]); // 36
* Assume all the elements of the array are positive
*/

/*
 * Returns lowest common multiple of the given array's elements
 * @param is the array
 * @returns lcm(array)
 * @author Davide Iaiunese
*/
(function lcm(array){ 
	let max = Math.max(...arr);
    while(arr.every(element => max % element === 0) === false){max++}
    return max;
})([1,2,4,9]); // 36