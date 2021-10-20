
// let name = 'Nathan';
// console.log(name);

// // Cannot be a reserved keyword.
// // Should be meaningful.
// // Cannot start with a number. (1name)
// // Cannot contain a space or hyphen. (-)
// //Variables are case sensitive.



// let firstName = 'Nathan'; // String Literal.
// let lastName = 'Lee'; // String Literal.
// let age = 30; // Number Literal.

// const intrestRate = 0.3;
// intrestRate = 1;
// console.log(intrestRate);

// // primitive value types
// // String
// // Number
// // Boolean
// // undefined
// // null
// let firstName = 'Nathan'; // String Literal.
// let lastName = 'Lee'; // String Literal.
// let age = 30; // Number Literal.
// let isApproved = true; //Boolean Literal.
// let firstName = undefined; // Undefined value.
// let selectedColor = null; // Clear the value of the variable.

// // Dynamic vs Static Languages.

// // Static Languages or Statically typed languages like C or Java.
// // When you define a variable, the variable cannot be changed later.

// // In a dynamic language like Javascript, the type of a variable can change at runtime. 

let lastName = 'Nathan'; 
let age = 30; 
let isApproved = true; 
let firstName = undefined; 
let selectedColor = null; 

// Reference Types.
// Objects.
// Array.
// Function.


// An Object in JavaScript is like an object in real life.
// Like a person, who has a name, age, address etc these are all properties of an object.


let person = {
    name: "Nathan",
    age: 24,
};

// Dot Notation.
person.name = 'Steven';

// Bracket Notation.
person['name'] = 'Mary';

// Dot Notation is a bit more concise, and it's shorter so it should be your default.
//

console.log(person.name);

// List

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Function performs a task or calculation.
// This Function below is performing a task.

function greet(name, lastName) {
    // This is the body of the function.
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Nathan', 'Lee');
greet('Madisson', "O'Herron");


// Parameter vs Argument.
// Parameter is the "name" at the function definition.
// Argument would be the 'Nathan' when the function is called.


// Types of Functions.
// A function that performs a task.
// A function that calculates a value.

function square (number) {
    return number * number;
    
}

let number = square(2);

console.log(square(2))


