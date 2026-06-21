// ===============================
// JavaScript Variables Demo
// ===============================

// const -> Value cannot be changed after initialization.
// Used when the variable should remain constant.
const accountId = 14433;

// accountId = 2; // ❌ Not Allowed
// This will throw an error because const variables cannot be reassigned.

// let -> Used for variables whose values may change later.
// Preferred over var in modern JavaScript.
let accountEmail = "krish@123";

// var -> Older way of declaring variables.
// Avoid using var because of scope-related issues.
var password = "123";

// Variable declared without let/const/var.
// JavaScript creates it globally (not recommended).
city = "Jaipur";

// Declared but not initialized.
// Default value is undefined.
let accountState;


// ===============================
// Updating Variable Values
// ===============================

accountEmail = "kk@123";
password = "3";
city = "Bombay";


// ===============================
// Output
// ===============================

// Prints a single value
console.log(accountId);

// Prints data in table format
console.table([
    accountId,
    accountEmail,
    password,
    city,
    accountState
]);