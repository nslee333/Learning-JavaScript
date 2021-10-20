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
    
}