    // ===============================
// JavaScript Arrays - Complete Notes
// ===============================

// Arrays in JavaScript are objects.
// They are resizable and can store multiple data types.
// Arrays are zero-indexed (index starts from 0).


// ===============================
// Array Declaration
// ===============================

// Method 1: Using array literals
const myArr = [0, 1, 2, 3, 4, 5];

// Array can also store strings
const myHeros = ["shaktiman", "naagraj"];

// Method 2: Using Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing elements using index
console.log(myArr[0]); // Output: 0



// ===============================
// Basic Array Methods
// ===============================

// push() - Adds element at the end of array
myArr.push(6);
myArr.push(7);

// pop() - Removes last element from array
myArr.pop();

console.log(myArr);
// Output: [0, 1, 2, 3, 4, 5, 6]



// ===============================
// Adding/Removing from Start
// ===============================

// unshift() - Adds element at the beginning
myArr.unshift(9);

// shift() - Removes first element
myArr.shift();

console.log(myArr);
// Output: [0, 1, 2, 3, 4, 5, 6]



// ===============================
// Searching in Array
// ===============================

// includes() checks whether an element exists
console.log(myArr.includes(9));
// Output: false


// indexOf() returns index of the element
// Returns -1 if element does not exist
console.log(myArr.indexOf(3));
// Output: 3


console.log(myArr);



// ===============================
// join() Method
// ===============================

// Converts array into a string
const newArr = myArr.join();

console.log(myArr);
// Output: Array

console.log(newArr);
// Output: "0,1,2,3,4,5,6"

console.log(typeof newArr); // string



// ===============================
// Slice vs Splice
// ===============================

console.log("A", myArr);


// slice(start, end)
// Does NOT modify the original array
// End index is not included
const myn1 = myArr.slice(1, 3);

console.log(myn1); // [1, 2]

console.log("B", myArr); // Original array remains same


// splice(start, count)
// Removes elements from original array
// It modifies the original array
const myn2 = myArr.splice(1, 3);

console.log(myn2); // [1, 2, 3]

console.log("C", myArr); // Remaining array after splice