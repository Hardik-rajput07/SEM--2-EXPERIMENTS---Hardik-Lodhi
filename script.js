// Primitive DataTypes
let x;
console.log("X = ", x, "\t| TypeOf X: ", typeof(x));    // Undefined

x = 69;
console.log("X = ", x, "\t| TypeOf X: ", typeof(x));    // Number

x = "Hello JS";
console.log("X = ", x, "\t| TypeOf X: ", typeof(x));    // String

x = true;
console.log("X = ", x, "\t| TypeOf X: ", typeof(x));    // Boolean

x = null;
console.log("X = ", x, "\t| TypeOf X: ", typeof(x));    // Null


let sym1 = Symbol(4);
let sym2 = Symbol(4);

console.log(sym1, sym2)

(sym1 == sym2) ? console.log("Same") : console.log("Not Equal Symbol")