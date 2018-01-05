function alternateEvenOdd(originArr) {

    var evArr = [];
    var odArr = [];
    var res = [];
    var el = "";

    // sort array into ascending order
    originArr.sort(function (a, b) {
        return a - b;
    });

    // create two arrays: 
    // one for even numbers 
    // one for odd numbers
    for (let i = 0, len = originArr.length; i < len; i++) {
        if (originArr[i] % 2 !== 0) {
            odArr.push(originArr[i]);
        } else {
            evArr.push(originArr[i]);
        }
    }

    // create result array
    for (let i = 0, len = originArr.length; i < len; i++) {
        if (res === undefined) {
            if (evArr != undefined) {
                el = evArr.shift();
                res.push(el);

            } else if (odArr != undefined) {
                el = odArr.shift();
                res.push(el);
            } else {
                console.log("arrays are empty");
            }
        // else if result's previous index has odd value
        } else if (res[i - 1] % 2 != 0) {

            // if even array is not empty
            if (evArr.length) {
                // add even number
                el = evArr.shift();
                res.push(el);
            }
            // else check if it's possible for odd array
            else if (odArr.length) {
                // add odd number
                el = odArr.shift();
                res.push(el);
            }
            // else it means they're both finished
            else {
                console.log("finshed");
            }
        }
        // if result's previous index has even value
        else {
            // if odd array is not empty
            if (odArr.length) {
                // add odd number
                el = odArr.shift();
                res.push(el);

            }
            // else if even array is not empty
            else if (evArr.length) {
                // add even number
                el = evArr.shift();
                res.push(el);
            } else {
                console.log("finished");
            }
        }
    }
    return (res);
}

alternateEvenOdd([72, 0, 12, 13, 22, 3, 28, 54, 42, 76, 50, 17, 53, 7]); // [0,3,12,7,2,13,28,17,42,53,50,54,72,76]
