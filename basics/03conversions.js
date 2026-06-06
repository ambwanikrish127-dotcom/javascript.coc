let score = "33"

// console.log(typeof score);      // string
// console.log(typeof(score));     // string

let valueInNumber = Number(score) // capital me Number 

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);        // 33

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// JavaScript Type Coercion Examples

console.log("1" + 2);     
// "12"
// String + Number => Number ko string me convert karke concatenate karta hai

console.log(1 + "2");     
// "12"
// Number + String => Number string ban jata hai

console.log("1" + 2 + 2); 
// "122"
// Left to Right evaluation
// "1" + 2 => "12"
// "12" + 2 => "122"

console.log(1 + 2 + "2"); 
// "32"
// 1 + 2 => 3
// 3 + "2" => "32"

console.log((3 + 4) * 5 % 3);
// 2
// (3 + 4) => 7
// 7 * 5 => 35
// 35 % 3 => 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//strict check ===
