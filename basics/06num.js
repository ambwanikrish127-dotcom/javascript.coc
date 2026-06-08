const score = 400
console.log(score); // 400

// Number object create kiya
const balance = new Number(100)

console.log(balance); // [Number: 100]

// Number ko string me convert kiya
// Fir string ki length nikali
console.log(balance.toString().length); // 3

// Decimal places fix karta hai
console.log(balance.toFixed(2)); // "100.00"

const otherNumber = 123.8966;
// toPrecision(n)
// -> Total n significant digits (starting from first non-zero digit)
// -> Rounds the number if needed
// -> Returns a string
console.log(otherNumber.toPrecision(3)); // "124"
const hundreds = 1000000;

// Converts number into locale-specific readable format
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


