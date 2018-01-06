/*
* Awesome triangle:
*  Write a javascript function that every time you call it
*  returnes 3 values representing the angles of a triangle 
*  but you do not need any of these angles to be less than 30 degrees
*  and the sum of them should be 180
*/

function triangle() {
    // define triangle's max size
    let max = 180;
    // generate first angle value betweem 30 and 60
    let a = Math.floor(Math.random() * (120 - 30 + 1) + 30);
    // generate second angle value between 30 and 60
    let b = Math.floor(Math.random() * (150 - a + 1) + 30);
    // calculate third angle as the remainder
    let c = max - a - b;
    return a + " and " + b + " and " + c;
}
