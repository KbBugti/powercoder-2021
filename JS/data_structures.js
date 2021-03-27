
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
// console.log(lastName);


var firstLetterOfLastName = "L";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName);

// This will change Jello world to Hellow World
var myStr = "Jello World";
myStr = "Hello World";

// console.log(myStr);


// To find "Alphabet" in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
// console.log(lastName);

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
// console.log(lastName);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";


var wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
// console.log(wordBlanks);

// An array
var myArray = ["my age is ", 19];
// console.log(myArray);

// How to change Array's Num
var myArray = [18,64,99];
myArray[0] = 45;
// console.log(myArray);

// How to find a bracket and inside the bracket a num 
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
// console.log(myData);


// How to add a new narray in an array
var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);
// console.log(myArray);


// How to Remove an Array
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(1);
// console.log(myArray);