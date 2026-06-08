// Current date & time create karna
let myDate = new Date();

// Different formats me date print karna
console.log(myDate.toString());       // Full date + time
console.log(myDate.toDateString());   // Readable date only
console.log(myDate.toLocaleString()); // Local date & time format

// Date object ka type check karna
console.log(typeof myDate); // "object"


// --------------------------------------------------
// Different ways to create Date object

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");

// MM-DD-YYYY format
let myCreatedDate = new Date("01-14-2023");

// Local format me print karna
console.log(myCreatedDate.toLocaleString());


// --------------------------------------------------
// Current timestamp (milliseconds since 1 Jan 1970)
let myTimeStamp = Date.now();

console.log(myTimeStamp);

// Specific date ka timestamp
console.log(myCreatedDate.getTime());


// --------------------------------------------------
// Current timestamp ko seconds me convert karna
// Date.now() milliseconds deta hai, isliye 1000 se divide kiya
// Math.floor decimal part hata deta hai
console.log(Math.floor(Date.now() / 1000));

// Current date & time
let newDate = new Date();

console.log(newDate); // Complete Date object

// getMonth() 0 se start hota hai
// January = 0, February = 1, ..., December = 11
console.log(newDate.getMonth() + 1); // Human-readable month

// Week ka day return karta hai
// Sunday = 0, Monday = 1, ..., Saturday = 6
console.log(newDate.getDay());


// Template literals ka use karke custom string banana
console.log(
  `${newDate.getDay()} and the time is ${newDate.getTime()}`
);