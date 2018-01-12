

function shiftCapital(str, num){

    let len = str.length;
    let capitalIndex;
    let indexToGo;

    str = str.split("");

    // find uppercase letter and store the index
    for (let i = 0; i < len; i++) {
        if (str[i] == str[i].toUpperCase()) {
            capitalIndex = i;
        }
    }

    for (i = capitalIndex, nOfSwaps = i + num; i < nOfSwaps; i++) {

        indexToGo = i % (len - 1);

        let temp = str[indexToGo];
        str[indexToGo] = str[capitalIndex];
        str[capitalIndex] = temp;

        capitalIndex = indexToGo;

    }
    return str.join("");
}



