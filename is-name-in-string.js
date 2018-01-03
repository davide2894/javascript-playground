 function isNameInString(name) {
     // this is the string to check the name in
     var string = "Hello all my great friends";
     // iterate over name characters
     for (let i = 0, len = name.length; i < len; i++) {
         // if letter is upper case
         if (name[i] === name[i].toUpperCase()) {
             // if it's not in string return false
             if (string.includes(name[i]) === false) {
                 return false;
             }
             // if letter is lower case
         } else if (name[i] === name[i].toLowerCase()) {
             // if letter is upper case
             if (string.includes(name[i]) === false) {
                 // if it's not in string return false
                 return false;
             }
         }

     }
     return true;
 }


 isNameInString("fran"); // true
 isNameInString("Fran"); // false
