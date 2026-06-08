const name = "hitesh"
const repoCount = 50

// Old way (String Concatenation)
// console.log(name + repoCount + " Value");

// Modern way (Template Literals)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('hiteshhc')

// Access character using index
console.log(gameName[0]); // h

// Shows String object's prototype methods
console.log(gameName.__proto__);

console.log(gameName.length);        // 8
console.log(gameName.toUpperCase()); // HITESHHC
console.log(gameName.charAt('2'));   // t
console.log(gameName.indexOf('t'));   

const newStringOne = "    hitesh    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// replace(oldValue, newValue)
// %20 ko - se replace kar diya
console.log(url.replace('%20', '-'))
// https://hitesh.com/hitesh-choudhary


// includes() check karta hai ki substring present hai ya nahi
console.log(url.includes('sundar'))
// false
const hehe = new String('hiteshhc-ch-jj')
console.log(hehe.split('-'))