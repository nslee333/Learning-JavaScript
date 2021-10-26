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
console.log(outerWear);

// If you run this code, you'll see that the console will output Sweater and T-Shirt. Indicating that the local variable will take precedence
// in a function, and the global variable will stay the same.
// This is a great example of local variable taking precedence over the global variable.

// ------------------------------------------------------------

// Return Keyword in functions.

// You can retrieve value from a function using the return keyword.

function reFunction(a, b) {
    return (a + b);
}

console.log(reFunction(2, 2));
// Output is 4, the return keyword returns the value of the calculation in the function.


// Functions don't have to have a return keyword, there is a possibility than your function may return undefined.

// E.g.

function unFunction(a, b) {
    a + b;
}

console.log(unFunction(2, 2));

// This is the same function as before, with the function renamed and the return keyword removed.
// This function has an output of undefined, confirming that you don't need to have a return keyword to perform a calculation.


// ------------------------------------------------------------

// Assignment with a returned value.

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3 / 5);
}
 
processed = processArg(7);

// this is an example of assigning a returned value to a variable, this allows us to reference a specific value/answer.


// ------------------------------------------------------------

// Stand in line.

// In computer science, a cue is an abstract data structure where items are kept in order.

// New items can be added to the back of the cue and old items are taken off of the front of the cue.

//  We are going to simulate that right now. 

// Some of the functionality of a cue using this nextInLine function.

// Basically we built using the push method adding the method argument into the array.

//



function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// JSON.stringify() method converts JS object or value to a JSON string, 
// - optionally replacing values if a replacer function is 
// - specified or optionally including only the specified properties if a replacer array is specified. 

// Definition taken from MDN web docs 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

//----------------------------------------------

// Boolean values.
// Boolean values are true or false,

function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans());



//----------------------------------------------

// Use Conditional logic with If statements.

// An If statement is used to make decisions in code.

// The Keyword if tells JS to execute the code in the curly braces if a certain condition is met, which is defined in the 
// Parenthesis.

// Example.

function ourTrueOrFalse(isItTrue) {
    if(isItTrue) {
        return "Yes, it is true.";
    }
    return "No, it is false.";
}

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true.";
    }
    return "No, that was false.";
}


console.log(trueOrFalse(true));

// if/else statements is the beginning of learning control flow in programming, its one of the building blocks to get started. 
// if/else is a great example of conditional statements in programming.

// --------------------------------------------------------------------

// Comparison with the equality operator.

// There are many comparison operators in Javascript that will return a boolean of true or false.
// The most common is the equality operator.

function testEqual(val) {
    if(val == 12) {
        
        return "Equal.";
    }
    return "Not Equal.";
};

console.log(testEqual(10));


// One thing to note is the "==" or double equal sign here. Why not the single equal sign just like in other languages? 
// Well a single equal sign is "=", is used as an assignment operator. E.g. var X = 2. It's used for assigning the variable.


// JavaScript being an interpreted language comes in to play here.

// One thing to note in JavaScript, it is an interpreted language. What that means loosely is that the code goes
// Through an interpreter.

// A double equal sign is "==",  also known as the equality operator, a Javascript engine, or interpreter, will attempt to convert
// data into the same type before proceeding. 
// So as an example above, whatever the argument passed into "val" above will be checked to loosely mean the same thing.
// The other thing to note is that the JavaScript engine will convert data to loosely the same thing, which I think is pretty
// damn cool honestly.



function equalsIt(num, num2) {
    if (num == num2) {
        console.log("1 is equal to '1' ;)");
    }
    return "They are not equal."
};

equalsIt(1, "1");

// So this is an example of the equality operator in action, it converts the '1' with the quotes into an integer, whereas
// in a non-interpreted language, it would've printed out 
// The next topic we're going to talk about the strict equality operator or "===".

// -----------------------------------------------------------------------

// Comparison with the strict equality operator.
// or "===".

// We learned about the equality operator which is the double equal sign, there is also the strict equal operator, the
// triple equal sign or "===".

// The double equal sign attempts to convert both values being compared to a common type.
// While the strict equality operator does not do the type conversion.

// Here's some examples:

3 === 3; 

// This will equal to true, since they are the same type and number.
// 3 would be an example of a integer, '3' would be an example of a string 3.
3 === '3'; 

// this will not equal true, since they are the same number, but the quotations around them make them different types.

function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "Not Equal.";
}

console.log(testStrict(10));

// --------------------------------------

// Practice comparing different values. 


// We will do another review of the equality operator and the strict quality operator.

function compareEquality(a, b,) {
    if (a == b) {
        return "Equal.";
    }
    return "Not Equal.";
}
 
console.log(compareEquality(10, "10"))

// The equality operator in Javascript or "==", performs a type conversion on the arguments being provided to the function.

// In the above example, the string 10 is converted to an integer data type instead of a string, then it compares the 
// two numbers and returns the answer.

// Now if we change the equality operator to the strict equality operator, we will get an answer of not equal, since the strict
// Equality operator does not perform type conversion.

//--------------------------------------------------------------------------------

// Comparison with the inequality operator.

function notEqual(a, b) {
    if (a != b ) {
        return "True, the two integers are unequal to each other.";
    }
    return "False, the two integers are equal to each other.";
};

console.log(notEqual(1, 2));

// This inequality operator helps us to identify whenever two integers are unequal to each other.

// This will come in handy with more complex logic paths later on.

// ---------------------------------------------------------------------------------------

// Comparison with the strict inequality operator.

function strictNotEqual(a, b) {
    if (a !== b) {
        return console.log("True, the two integers are strictly unequal to each other.");
    }
    return console.log("False, the two integers are strictly equal to each other.");
};

strictNotEqual(10, 10);






























