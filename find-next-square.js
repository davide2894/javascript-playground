function findNextSquare(n) {
    
    // calculate square of n
    let sqrt = Math.sqrt(n);
    
    // if result is integer
    if (Number.isInteger(sqrt)) {
    
        // increase it by 1
        sqrt++;
        
        // calculate power of 2
        let power = Math.pow(sqrt, 2);
        
        return power;
    
    } else {
     
        return "Sqare root of input number is not an integer!\n Please retry"
    
    };
}

findNextSquare(4); // 9
findNextSquare(20); // "Sqare root of input number is not an integer!
                    //  Please retry "
