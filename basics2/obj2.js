// =============================================
// JavaScript Objects - Complete Notes
// =============================================


// ---------------------------------------------
// Creating Objects
// ---------------------------------------------

const tinderUser = {
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
};

console.log(tinderUser);


// =============================================
// Merging Objects
// =============================================

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "a",
    4: "b"
};


// ---------------------------------------------
// Wrong Way
// ---------------------------------------------

const obj3 = { obj1, obj2 };

console.log(obj3);

/*
Output:

{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' }
}

Objects merge nahi hue,
nested object ban gaya.
*/


// ---------------------------------------------
// Object.assign()
// ---------------------------------------------

const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

/*
Output:

{
  '1': 'a',
  '2': 'b',
  '3': 'a',
  '4': 'b'
}
*/


// Syntax

// Object.assign(target, source1, source2);


// =============================================
// Spread Operator (Modern Way)
// =============================================

const obj5 = {
    ...obj1,
    ...obj2
};

console.log(obj5);

/*
Output:

{
  '1': 'a',
  '2': 'b',
  '3': 'a',
  '4': 'b'
}
*/


// =============================================
// Array of Objects
// =============================================

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    },

    {
        id: 3,
        email: "c@gmail.com"
    }
];


// ---------------------------------------------
// Accessing Array Object Data
// ---------------------------------------------

console.log(users[1].email);

/*
Output:

b@gmail.com
*/


// users[1]
// -> Second Object

// users[1].email
// -> Second Object ka email


// =============================================
// Object.keys()
// =============================================

console.log(Object.keys(tinderUser));

/*
Output:

[
  "id",
  "name",
  "isLoggedIn"
]
*/




// =============================================
// Object.values()
// =============================================

console.log(Object.values(tinderUser));

/*
Output:

[
  "123abc",
  "Sammy",
  false
]
*/


// =============================================
// Object.entries()
// =============================================

console.log(Object.entries(tinderUser));

/*
Output:

[
  ["id","123abc"],
  ["name","Sammy"],
  ["isLoggedIn",false]
]
*/


// =============================================
// hasOwnProperty()
// =============================================

console.log(
    tinderUser.hasOwnProperty("isLoggedIn")
);

/*
Output:

true
*/


console.log(
    tinderUser.hasOwnProperty("email")
);

/*
Output:

false
*/


// =============================================
// Interview Examples
// =============================================


// Example 1

const student = {
    name: "Krish",
    branch: "CSE",
    year: 3
};

console.log(Object.keys(student));

/*
Output:

["name","branch","year"]
*/


// Example 2

console.log(Object.values(student));

/*
Output:

["Krish","CSE",3]
*/


// Example 3

console.log(student.hasOwnProperty("name"));

/*
Output:

true
*/


// Example 4

console.log(student.hasOwnProperty("cgpa"));

/*
Output:

false
*/


// =============================================
// Most Asked Interview Questions
// =============================================

/*

Q1. What is Object.assign()?

Used to copy or merge properties from
one or more objects into a target object.



Q2. What is Spread Operator (...) ?

Used to expand or merge objects and arrays.



Q3. Difference between Object.keys()
and Object.values()?

Object.keys() -> Returns all keys.

Object.values() -> Returns all values.



Q4. What does Object.entries() return?

Returns key-value pairs in array form.



Q5. What does hasOwnProperty() do?

Checks whether a property exists
inside the object or not.



Q6. Best way to merge objects?

const merged = {
    ...obj1,
    ...obj2
};

(Modern JavaScript Approach)

*/


// =============================================
// Quick Revision
// =============================================

/*

Object.assign({}, obj1, obj2)
-> Merge Objects

{...obj1, ...obj2}
-> Modern Merge

Object.keys(obj)
-> Array of Keys

Object.values(obj)
-> Array of Values

Object.entries(obj)
-> Array of Key-Value Pairs

obj.hasOwnProperty("key")
-> Checks Property Exists or Not

users[1].email
-> Access Object inside Array

*/