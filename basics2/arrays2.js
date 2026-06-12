// ===============================
// Combining Arrays
// ===============================

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// ===============================
// push() with Array
// ===============================

// push() adds the entire array as a single element
marvel_heros.push(dc_heros);

console.log(marvel_heros);

/*
Output:
[
  "thor",
  "Ironman",
  "spiderman",
  ["superman", "flash", "batman"]
]
*/

// Accessing elements of nested array
console.log(marvel_heros[3][1]); // flash



// ===============================
// concat() Method
// ===============================

// concat() returns a new array, it does not modify original arrays

const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros);

/*
Output:
[
 "thor",
 "Ironman",
 "spiderman",
 "superman",
 "flash",
 "batman"
]
*/


// ===============================
// Spread Operator (...)
// ===============================

// Spread operator merges multiple arrays into one

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);



// ===============================
// flat() Method
// ===============================

// flat() removes nested arrays and converts them into a single array
// Infinity means remove nesting at all levels

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

/*
Output:
[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
*/


// ===============================
// Array Utility Methods
// ===============================


// Array.isArray() checks if a value is an array or not

console.log(Array.isArray("Hitesh")); // false


// Array.from() converts iterable/string into an array

console.log(Array.from("Hitesh"));

/*
Output:
["H", "i", "t", "e", "s", "h"]
*/


// For objects, Array.from() needs to know whether
// to create an array from keys or values

console.log(Array.from({ name: "hitesh" }));

// Output: [] (empty array)



// ===============================
// Array.of() Method
// ===============================

// Array.of() creates an array from multiple values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

/*
Output:
[100, 200, 300]
*/