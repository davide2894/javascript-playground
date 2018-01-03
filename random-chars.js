function randomChars(number) {

    // declare string to check in
    let str = "Hi all udacity students";

    // remove white spaces
    str = str.replace(/\s+/g, "");

    // declare empty string that will host the random selection
    let selection = ""

    // iterate over str characters
    for (let i = 0; i < number; i++) {

        // select random char from str n times
        // where n is the number given by user
        selection += str.substr(Math.floor(Math.random() * str.length), 1);
    }
    return selection;
}
