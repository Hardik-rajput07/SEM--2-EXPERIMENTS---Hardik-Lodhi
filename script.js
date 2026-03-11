"use strict"

// FOR LOOP

document.write("<h1>FOR LOOP</h1>")
for (let count = 0; count < 6; count++) {
    console.log(count);
    document.write("Current Count: " + count + "</br>");
}


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



