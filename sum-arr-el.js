function sum(array){
    
    // store max number in array
	let max1 = Math.max(...array);
    
    // remove it from array
	array.splice(array.indexOf(max1));
    
    // store current max number in array's left elements
	let max2 = Math.max(...array);

    // calculate and return sum of the two stored max numbers
	return max1 + max2;
}

sum([5,12,4,36]); // 48