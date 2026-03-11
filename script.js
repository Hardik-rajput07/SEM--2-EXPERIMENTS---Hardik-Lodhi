"use strict"

// FOR LOOP

document.write("<h1>FOR LOOP</h1>")
for (var count = 0; count < 6; count++) {
    console.log(count);
    document.write("Current Count: " + count + "</br>");
}


document.write("</br>");


// FOR IN LOOP

document.write("<h1>FOR IN LOOP</h1>")
let person = {
    fname : "Rohan",
    lname : "Das",
    age : 25
}

console.log("Person Details:");
document.write("<h2>Person Details: </h2>");
for(let x in person){
    console.log( x + " : " + person[x]);
    document.write( x + " : " + person[x] + "</br>");
}


document.write("</br>");


// WHILE LOOP

document.write("<h1>WHILE LOOP</h1>")
var count = 0;
while (count < 6) {
    console.log(count);
    document.write("Current Count: " + count + "</br>");
    count++;
}
