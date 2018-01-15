/*
    17
    Remove All Copies
    Write a function that remove all repeated elements in array represents the argument of the function, the remaining elements should be in the same order as original one.

    For example

    removeCopies([5,8,4,8,3,2,1,5]); // [4,3,2,1]
    removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]
*/

/* 
    18
    Hi friends :slightly_smiling_face:

    Now the problem of the day :grinning:, it is easy, do not worry :grinning:

    Write a function that takes an array as argument, and returns true or false depending on the following

    Returns true if the first half of the array is containing the same elements present in the last half, and false if it does not

    If the array contains odd number elements ,the function returns true if the two parts around the middle element contain the same elements

    Elements in the two parts are not necessary to be in the same order

    For example

    check([1,4,6,8,8,6,1,4]); // true
    check(["a","b","d","g","f","b","g","d","a"])  // true
    check(["a","b","d","g","f","b","g","f","a"]);// false
    check([10,20,30,40,10,20,50])  // false
*/

/*
    19
    
    Now the problem of the day :grinning:
    
    write a function that takes two arguments,the first represents a flattened array and the second is a number

    the function should covert the the array to a Two dimensional one, every array inside have a length equal to the number that passed as argument if there are still excess elements

    For example

    grouping([1,2,3,4,5,6],3);  // [[1,2,3],[4,5,6]]
    grouping([6,8,10,15,4],2) //  [[6,8],[10,15],[4]]
    grouping([12,8,15,20,38,40,60],7) // [[12,8,15,20,38,40,60]]
*/