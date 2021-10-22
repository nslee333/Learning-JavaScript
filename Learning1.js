// Example.

var firstLetterOfFirstName = '';
var firstName = 'Ada';

firstLetterOfFirstName = firstName[0];

// Setup.

var firstLetterOfLastName = '';
var lastName = "Lovelace";

// Only change code below this line.

firstLetterOfLastName = lastName[1];
console.log(firstLetterOfLastName);

// Computers start counting with 0, this is called Zero Based Indexing.
// Bracket based Indexing helps with finding a specfic part of a string getting specific information
// from an array.


// String Immutability.

// Strings are Immutable. Meaning they cannot be altered once they are created.
// This does not mean they cannot be changed, just that the individual characters of a string 
// literal cannot be changed.


// The code below is attempting to use bracket notation to change the 
// first character in the string, but it will throw an error because of the 
// immutability of the string.

// You cannot change the individual characters of the string, but you can change the whole string itself.

// Setup.

var myStr = "Jello World";

// Only change the code below this line.

myStr = "Hello World" // Fix me.

// Bracket Notation to find the last character in a string.
// 

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]

console.log(lastLetterOfFirstName)

//We're going to use our knowledge of strings to creat a Mad Libs game.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;

};

console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Storeing Multiple values with Arrays.

var ourArray = ["Nathan", 24];

var myArray = ["Allison", 26];

// Nested Arrays.

// When you see smaller arrays inside of each other, this is called nested arrays or multi-dimensional array.

var nateArray = [["The Universe", 37], ["Everything", 101010]];

var allieArray = [["Bulls", 24], ["Red Sox", 45]];

// You can use bracket notation to acess specific parts of an array.

// Modify Array Data with Indexes.

// With Bracket Notation, you cannot modify specific parts of a string, but with an array you can use a specific
// index to remove or replace that character or element.

var eeArray = [18,32,64];

eeArray[1] = 54;

console.log(eeArray);

// Access nested arrays with Indexes.


var eaArray = [[1,2,3], [4,5,6], [7,8,9,], [[10,11,12], 13, 14]];



var myData = eaArray[2][1];
// ^ Double Bracket Notation.
console.log(myData);

// Manipulate Arrays with push().

// the .push() method adds elements into the end of the array.

var esArray = ["Jameson", "J", "Editor"];
esArray.push(["I Want Spiderman!", "Cigar"]);

var edArray = [["Peter", 18,], ["MJ", 17]];

edArray.push(["Gwen", 17]);

console.log(edArray)

// .Pop() function, it removes the last element in the array. The opposite of the .push method above.

// Shift() method, acts very similar to the .Pop method, it removes the first element instead of the last in .pop().

// Unshift.
// Similar to push method - except it adds an element onto the beginning of the array.

var erArray = ["Nathan", "Irish",];

erArray.unshift("John");

console.log(erArray);

// Shopping List - Nested arrays.

var ewArray = [["Cereal", 3], ["French Bread", 2] ["Milk", 2], ["Chicken", 2], ["Eggs", 12]];
// Array of Arrays! Yay!

// Reusable code with functions.

function ourReusableFunction() {
    console.log("Hey, World");
}

ourReusableFunction();

function reusableFunction() {
    console.log("Howdy World!");
}

reusableFunction();


// Passing Values to Functions with Parameters.

// Functions are variables that act as place holders for the values that are to be input to the function when it is called.

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
} 

ourFunctionWithArgs(10, 5);

// Global scope with functions.

// Scope refers to the visibility of variables. 
// Variables which are defined outside of a function block have global scope.
// Global scope means that the variables can been seen everywhere in your code.

uVar = 0;

function globalValue() {
    uVar += 1;
    return console.log(uVar);
};

globalValue();

// This code above is an example of Global Scope, the function is able to access the value of uVar because it is defined outside
// the function. 
// The flipside of this is that the local variable is defined inside the variable.

// Local Scope and functions.

// Variables which have been declared within a function as well as the function parameters have local scope.
// Local Scope means that they are only visible from within the function.

function localVariable() {
    let pVar = 0;
    pVar += 2;
    string = "pVar: " + pVar;
    return console.log(string);
};

localVariable();


// console.log(pVar); 
// When the above code is commented in, it throws a reference error, saying that the pVar value is not defined. 
// This is a clear example of Local Scope.

// ------------------------------------------------------------

// Global vs. Local scope in functions.

// It's possible to have a local and a global variable with the same name.
// When you do this, the Local variable takes precedence over the global variable.

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater";
    return outerWear
}

console.log(myOutfit());


// Return Keyword in functions.

// You can retrieve value from a function using the return keyword.

// Functions don't have to have a return keyword, there is a possibility than your function may return undefined.




// Assignment with a returned value.


