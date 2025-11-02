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
let person: [string, number] = ["Bob", 46];

function getNameAndAge(): [string, number] {
  return ["Bob", 46];
};

let row: [number, string, boolean] = [1, "type", true];





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