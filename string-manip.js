function stringManipulation(str) {
    
    
    let result = "";

    //  if
    for (let i = 0, len = str.length; i < len; i++) {

        // if it's first character
        if (i === 0) {
            
            // store it
            result += str.charAt(0).toUpperCase() + "-";

        } else {
                
            // iterate over char for n times
            // where n depends on letter's number
            for (let j = 0; j <= i; j++) {

                // if it's first iteration
                if (j === 0) {

                    // store letter as upper case
                    result += str.charAt(i).toUpperCase();

                } else {
                    
                    // repeat letter n times 
                    // where n is given by letter index
                    result += str.charAt(i);
                }

            }

            // if it's not last letter
            if (i != len - 1) {

                // separate letter with "-"
                result += "-";

            } else {}

        }
    }
    console.log(result); 
}

stringManipulation("Hello"); // H-Ee-Lll-Llll-Ooooo
