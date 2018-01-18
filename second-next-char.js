/*
 * @description take a string and for each letter return the letter two places next. 
 * special cases:
    if y add a;
    if Y add A;
    if z add b;
    if Z add B;
 * @param {string}
 * @return {string} with added letters as described above.
 * @author Davide Iaiunese
*/


function secNextChar(str) {

    var result = "";
    for (let i = 0; i < str.length; i++) {
        let addition = String.fromCharCode(str.charCodeAt(i)) + String.fromCharCode(str.charCodeAt(i) + 2);

        switch (str[i]) {

            case "y":
                result += String.fromCharCode(str.charCodeAt(i)) + "a"
                break;

            case "Y":
                result += String.fromCharCode(str.charCodeAt(i)) + "A"
                break;

            case "z":
                result += String.fromCharCode(str.charCodeAt(i)) + "b"
                break;

            case "Z":
            case "z":
                result += String.fromCharCode(str.charCodeAt(i)) + "B"
                break;

            default:
                result += addition
                break;
        }
    }
    
    return result;
}

secNextChar("aft"); // acfhtv
secNextChar("XyZ"); // XZyaZB
