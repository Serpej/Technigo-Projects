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
;
let newEmployee = {
    name: "Jesper",
    age: 32,
    email: "Bla",
    isActive: true,
    employerId: 55,
    department: "Skatteverket"
};
;
function displayProduct(product) {
    return `${product.name} - ${product.price} kr - ${product.name} (${product.inStock ? "In Stock" : "Out of Stock"}) `;
}
let laptop = {
    id: 12345,
    name: "TUF-GoldBird-497",
    price: 11599,
    inStock: false
};
// Generic types. Liek a type variable it could represent anything
let arrayOfStrings = ["hello", "baby", "darling"];
let arrayOfNumbers = [1, 2, 3, 4, 5];
let arrayMixed = [1, "Yes", arrayOfStrings[0]];
function firstElement(arr) {
    return arr[2];
}
;
;
// A specific class box for numbers. The class must provide its own implementation of everything in the interface. Implementation is like a contract for the class.
// It needs to contain everything from Box<number>, but not exclusively though.
class NumberBox {
    content;
    // The constructor takes a number parameter
    constructor(content) {
        this.content = content;
    }
    ;
    // Implementation of the required describe method
    describe() {
        return `Box containing number: ${this.content}`;
    }
}
const numberInABox = new NumberBox(4);
//console.log(numberInABox.describe());
// Function that swaps between two types
let twoStringTuple = ["Hello", "Goodbye"];
function swap(pair) {
    return [pair[1], pair[0]];
}
console.log(swap(twoStringTuple));
//# sourceMappingURL=script.js.map