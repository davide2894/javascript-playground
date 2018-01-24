/*
 * @description if sum of two elements are equal to one element in the array, remove those two elements     and insert the sum in their place. Otherwise, keep them.
 * @param {array, integer}
 * @returnsd array with substituted elements (if any) or array with untouched elements
 * @author Davide Iaiunese
 */
function reduce(arr, sum){
    let input = Array.from(arr);
	for(let i=0, len=input.length; i<len; i++){
        for(let j=0; j<len; j++){
			if(i !== j){
				if((input[i]+input[j]) === sum){
                    input.splice(i,1,sum);
                    input.splice(j,1);
            	}
			}       
        }
    }
	return input;
}
console.log(reduce([1,2,3],3)); // [3,3]
console.log(reduce([8,12,16,20,4],20)); // [20,20,20] // sum inserted in place of the number of the first index
console.log(reduce([14,8,6,8,3,5],16)); // [14,16,6,3,5]
console.log(reduce([1,6,9,8],25));  // return the array [1,6,9,8] as no sum