// ============================================
// JavaScript Objects
// ============================================

// Singleton:
// Object.create() se object banane par Singleton object create hota hai.

// Object Literal:
// Sabse common way object create karne ka.
const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,

    // Array bhi object ke andar store kar sakte hain
    lastLoginDays: ["Monday", "Saturday"]
};


// ============================================
// Accessing Object Properties
// ============================================

// Dot Notation (Most Common)
console.log(JsUser.email);

// Bracket Notation
console.log(JsUser["email"]);

// Output:
// hitesh@google.com
// hitesh@google.com


// ============================================
// When to use Bracket Notation?
// ============================================

const User = {
    "full name": "Hitesh Choudhary"
};

// ❌ Invalid
// console.log(User.full name);

// ✅ Correct
console.log(User["full name"]);


// ============================================
// Symbols in Objects
// ============================================

// Symbol creates a unique value
const mySym = Symbol("key1");

const User2 = {
    name: "Krish",

    // Wrong way - treated as string key
    mySym: "myKey1"
};

console.log(typeof User2.mySym);
// Output: string


// Correct way to use Symbol as object key
const User3 = {
    name: "Krish",

    // Symbol key
    [mySym]: "myKey1"
};

console.log(User3[mySym]);
// Output: myKey1

console.log(typeof User3[mySym]);
// Output: string


// ============================================
// Updating Object Values
// ============================================

JsUser.email = "hitesh@chatgpt.com";

console.log(JsUser.email);
// Output: hitesh@chatgpt.com


// ============================================
// Object.freeze()
// ============================================

// Freeze object so no further changes are allowed
Object.freeze(JsUser);

// This update will NOT happen
JsUser.email = "hitesh@microsoft.com";

console.log(JsUser);

// Email remains:
// hitesh@chatgpt.com


// ============================================
// Functions inside Objects
// ============================================

// Adding a method to object
JsUser.greeting = function () {
    console.log("Hello JS User");
};

// Calling function
JsUser.greeting();


// ============================================
// Using 'this' Keyword
// ============================================

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
};

// 'this' refers to current object
JsUser.greetingTwo();


// ============================================
// Interview Questions
// ============================================

// Q1. Difference between Dot and Bracket Notation?
// Dot notation is simpler.
// Bracket notation is required for keys with spaces
// or dynamic property names.

// Q2. What is Object.freeze()?
// It prevents modification, addition, and deletion
// of object properties.

// Q3. What is a Symbol?
// A Symbol is a unique and immutable primitive value.

// Q4. What does 'this' refer to?
// In an object method, 'this' refers to the current object.

// Q5. What is Object Literal?
// A direct way of creating objects using {}.