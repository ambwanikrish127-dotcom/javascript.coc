// Math is a built-in JavaScript object that provides
// mathematical constants and functions.

console.log(Math);

// abs() -> Returns absolute (positive) value
console.log(Math.abs(-4)); // 4

// round() -> Rounds to the nearest integer
console.log(Math.round(4.6)); // 5

// ceil() -> Always rounds UP to the next integer
console.log(Math.ceil(4.2)); // 5

// floor() -> Always rounds DOWN to the previous integer
console.log(Math.floor(4.9)); // 4

// min() -> Returns the smallest value
console.log(Math.min(4, 3, 6, 8)); // 3

// max() -> Returns the largest value
console.log(Math.max(4, 3, 6, 8)); // 8

// Math.random() -> Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random number between 1 and 10 (decimal value)
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
// floor() removes decimal part
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Random integer between min and max (both inclusive)
// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);