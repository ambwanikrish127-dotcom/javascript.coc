// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

// console.log(typeof score);       // number
// console.log(typeof isLoggedIn);  // boolean
// console.log(typeof outsideTemp); // object
// console.log(typeof userEmail);   // undefined
// console.log(typeof id);          // symbol
// console.log(typeof heroes);      // object
// console.log(typeof myObj);       // object
// console.log(typeof myFunction);  // function
// *************//
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Objects Heap memory me store hote hain

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
// userTwo ko object ki copy nahi mili
// sirf Heap memory ke object ka reference (address) mila

let userTwo = userOne

// Heap me stored same object modify ho raha hai
userTwo.email = "hitesh@google.com"

// userOne aur userTwo dono same Heap object ko point karte hain
console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com