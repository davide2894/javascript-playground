/*
 * @description check if the sum of two values in the array equal to one of the   * values
 * @param {array}
 * @returns {boolean} true if sum in included, false otherwise
 * @author Davide Iaiunese
*/

function isSumInArray(arr) {

	let isTrue = false;	

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] !== arr[j]) {

                let sum = arr[i] + arr[j];

                if (arr.includes(sum)) {

					isTrue = true;
		
                }
				
            }

        }
    }
	
	return isTrue;
}

isSumInArray([5, 4, 6, 8, 3]);