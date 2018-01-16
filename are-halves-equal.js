/*
 * @description checks if the two halves of the array contain the same characters
 * @param {array}
 * @result returns true if the two halves contain the same characters, otherwise false
 * @author Davide Iaiunese
 */

function check(arr){
    
	let halfIndex = Math. round(arr.length/2);
    let leftHalf = [];
    let rightHalf = [];
    let verdict = true;

    // in case array.lenth is even
    if(halfIndex % 2 === 0){

        for(let i=0; i<halfIndex; i++){
            leftHalf.push(arr[i]);
        }
        for(let i=halfIndex; i<arr.length; i++){
            rightHalf.push(arr[i]);
        }
    // in case array.length is odd
    } else{

        for(let i=0; i<halfIndex-1; i++){
            leftHalf.push(arr[i]);
        }
        for(let i=halfIndex; i<arr.length; i++){
            rightHalf.push(arr[i]);
        }

    }
    // compare two halves
    for(i=0; i<leftHalf.length; i++){
        if(leftHalf[i] !== rightHalf[i]){
            verdict = false;
            break;
        } else{ verdict = true; }
    }

    return verdict;

}

check([1,4,6,8,8,6,1,4]); // true;
check(["a","b","d","g","f","b","g","d","a"]);  // true
check(["a","b","d","g","f","b","g","f","a"]); // false
check([10,20,30,40,10,20,50]) // false
