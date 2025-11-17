// String
let userName  = "Jesper";
let username: string = "Jesper";

// Number
let age: number = 32;

// Boolean
let isStudent: boolean = true;

// Array
const Jesper: object = {
  age: 13,
  name: "Jesper"
}
let numbers: number[] = [1, 2, 3, 4];
let objectarray: object[] = [Jesper];

// Tuple 
//(Arrays more strict cousin) How many and of what type in which order. Good for when returning MULTIPLE values from a function.
// Better for Typescript since it know what is the right value during compile time.
let person: [string, number] = ["Bob", 46];

function getNameAndAge(): [string, number] {
  return ["Bob", 46];
};

let row: [number, string, boolean] = [1, "type", true];

//-------------------------------------------------------------------------------------------------------------------------------



// Variable annotation
let message: string = "Message"

// Function parameter and return type annotations
function greet(name: string):string {
  console.log(`${name}`)
  return `Hello ${name}`
};


// Arrow function annotation
const multiply: (a:number, b:number) => number = (a,b) => (a * b);



// Typescript infers types
// While inferring is nice, excplicit annotation can make your code more readable, and can catch errors when the inferred typ is not what you intended
let inferred = "This is a string";
let moreNumbers = [1, 2, 3];
let mixed = [1, "two", 3];


// Interfaces
// A compile-time type definition, is removed adter compilation

interface User {
  name: string;
  age: number;
  email: string;
  isActive?: boolean; //Optional property
};

let newPerson: User = {
  name:"Jesper",
  age: 32,
  email: "Bla",
  isActive: true
};

let anotherPerson: User = {
  name:"Anna",
  age: 342,
  email: "Bla",
};

// Extended interface. It extends the original interface.

interface Employee extends User {
  employerId: number;
  department: string;
};

let newEmployee: Employee =  {
  name:"Jesper",
  age: 32,
  email: "Bla",
  isActive: true,
  employerId: 55,
  department: "Skatteverket"
};

// Practical example
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean; 
};

function displayProduct(product: Product): string {
  return `${product.name} - ${product.price} kr - ${product.name} (${product.inStock ? "In Stock" : "Out of Stock"}) `;
}

let laptop: Product = {
  id: 12345,
  name: "TUF-GoldBird-497",
  price: 11599,
  inStock: false
}

// Generic types. Like a type variable it could represent anything

let arrayOfStrings: string[] = ["hello", "baby", "darling"];
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
let arrayMixed: any[] = [1, "Yes", arrayOfStrings[0]];

function firstElement<T>(arr: T[]):T | undefined {
  return arr[2];
};

//console.log(firstElement(arrayOfStrings));
//console.log(firstElement(arrayOfNumbers));
//console.log(firstElement(arrayMixed));


// A generic box interface
interface Box<T> {
  content: T;
  describe(): string;
};

// A specific class box for numbers. The class must provide its own implementation of everything in the interface. Implementation is like a contract for the class.
// It needs to contain everything from Box<number>, but not exclusively though.
class NumberBox implements Box<number> {

  // The constructor takes a number parameter
  constructor (public content: number) {};

  // Implementation of the required describe method
  describe(): string {
    return `Box containing number: ${this.content}`;
  }
}
const numberInABox: NumberBox = new NumberBox(4);

//console.log(numberInABox.describe());


// Function that swaps between two types

let twoStringTuple: [string, string] = ["Hello", "Goodbye"];

function swap<T,U> (pair: [T, U]): [U, T] {
  return [pair[1], pair[0]]
}

console.log(swap(twoStringTuple));