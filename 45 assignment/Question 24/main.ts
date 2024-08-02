//Question no 24

// Equality with strings
let a : string = "mango"
let b : string = "Mango"
console.log("Testing equality with strings:");
console.log(a == a); // True
console.log(a == b); // False

//Using Lowercase Function
console.log(`Testing With Lower Case Function`);
console.log("Apple".toLowerCase() == "apple"); //True

//Numerical Test
console.log(`Greater Than`);
console.log(10 > 6 ); // True
console.log(`Less Than`);
console.log(10 < 6 ); // False
console.log(`Greater Than or Equal`);
console.log(6 >= 6 ); // True
console.log(`Less Than or Equal`);
console.log(7 <= 6 ); // False

//Using "AND" and "OR"
console.log(`Testing with AND`);
console.log( false && true); // False
console.log(`Testing with OR`);
console.log(false || false || true); // True

//Using Array
console.log(`Is "Muneeb" in array`);
let Arr = ["Muneeb","Adeel","Wahab"]
console.log(Arr.includes("Muneeb")); // True

console.log(`Is "Muneeb" not in array`);
let Arr2 = [,"Adeel","Wahab"]
console.log(!Arr2.includes("Muneeb")); // True








