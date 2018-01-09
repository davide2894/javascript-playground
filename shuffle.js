/* Finds numbers between min and max of array and pushes them
 * then shuffles the array
 * then joins array's elements into one string
 * return string parsed into integer
 * @param is array
 * @returns shuffled number
 * @author Davide Iaiunese
 */
function shuffle(arr){
	// define min, max, num
	let max = Math.max(...arr);
	let min = Math.min(...arr);

	// populate array with numbers in range max-min
	for(let i=min; i<max; i++){ arr.push(i); }
	
	// use Fisher-Yates algorithm to shuffle array
	// read more at https://www.frankmitchell.org/2015/01/fisher-yates/
	var i = 0
	,	j = 0
	,	temp = null
	
	for(i=arr.length-1; i>0; i--){
		// assign random index to j
		j = Math.floor(Math.random() * (i+1));
		// swap number at index i and the one at the random index
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	
	// join array's elements into one string
	// return string parsed into integer
	return parseInt(arr.join(""));
}

shuffle([5,9]); // 78965
shuffle([5,9]); // 85697
shuffle([5,9]); // 98657


