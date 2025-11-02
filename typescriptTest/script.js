"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
let userName = "Jesper";
let username = "Jesper";
// Number
let age = 32;
// Boolean
let isStudent = true;
// Array
const Jesper = {
    age: 13,
    name: "Jesper"
};
let numbers = [1, 2, 3, 4];
let objectarray = [Jesper];
// Tuple 
//(Arrays more strict cousin) How many and of what type in which order. Good for when returning MULTIPLE values from a function.
let person = ["Bob", 46];
function getNameAndAge() {
    return ["Bob", 46];
}
;
let row = [1, "type", true];
// Variable annotation
let message = "Message";
// Function parameter and return type annotations
function greet(name) {
    console.log(`${name}`);
    return `Hello ${name}`;
}
;
// Arrow function annotation
const multiply = (a, b) => (a * b);
// Typescript infers types
// While inferring is nice, excplicit annotation can make your code more readable, and can catch errors when the inferred typ is not what you intended
let inferred = "This is a string";
let moreNumbers = [1, 2, 3];
let mixed = [1, "two", 3];
;
let newPerson = {
    name: "Jesper",
    age: 32,
    email: "Bla",
    isActive: true
};
let anotherPerson = {
    name: "Anna",
    age: 342,
    email: "Bla",
};
//# sourceMappingURL=script.js.map