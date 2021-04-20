
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


// Switch replace a new value in the array 
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// console.log(myArray);


function testFun(){
    // console.log("Hello", "World");
  }
  
  function functionWithArgs(param1, param2){
    // console.log(param1+param2);
  }
  functionWithArgs(7,9);


  // Global Scope and Functions
var myGlobal  = 10;
oopsGlobal = 5;

function fun1() {
var output = "";
if(typeof myGlobal != "undefined"){
  output += "myGlobal: " + myGlobal;
}
if(typeof oopsGlobal != "undefined"){
  output += " oopsGlobal: " + oopsGlobal;
}
// console.log(output);
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
//   console.log(output);
}

function myLocalScope() {
  var myVar = "bob";
    // console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope

//   console.log('outside myLocalScope', myVar);


// Return a Value from a Function with Return
function timesFive(a){
    a*=5;
    return a;
}
timesFive(10);


// Understanding Undefined Value returned from a Function
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();


// Comparison with the Less Than Operator
function testLessThan(val) {
  // console.log(val);
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);



// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(13);


// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
  
}

// console.log(testLogicalOr(15));


// Else Statements
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 16) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

// console.log(testElseIf(7));


// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

if (strokes === 1){
  return "Hole-in-one!";
} else if(strokes <= par -2){
  return "Eagle";
} else if(strokes == par - 1){
  return "Birdie";
} else if(par == strokes){
  return "Par";
} else if(strokes == par + 1){
  return "Bogey";
} else if(strokes == par + 2){
  return "Double Bogey";
} else if(strokes >= par + 3){
  return "Go Home!";
} else{

  return "Change Me";
}
}
// console.log(golfScore(5, 4));



// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
    return "alpha";
     break;
    case 2:
    return "beta";
      break;
    case 3:
    return "gamma";
      break;
    case 4:
    return "delta";
      break;
  }
  return answer;
}

// console.log(caseInSwitch(1));



// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
case 1:
case 2:
case 3:
answer = "Low";
break;
case 4:
case 5:
case 6:
answer = "Mid";
break;
case 7:
case 8:
case 9:
answer = "High";
break;
}

  return answer;
}

sequentialSizes(1);



// Record Collection
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: ["He is", "Addicted to Love"]
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(object, id, prop, value) {
  if(prop != 'tracks' && value !== ""){
    object[id][prop] = value;
  }else if(prop === "tracks" && object[id].hasOwnProperty("tracks") === false){
    object[id][prop] = [value];
  }else if(prop == "tracks" && value !== ""){
    object[id][prop].push(value);
  } else if(value === ""){
    delete object[id][prop];
  }
  return object;
}

updateRecords(collection, 2548, 'artist', '');


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr[i].length; j++){
        product*=arr[i][j];
        console.log(arr[i][j]);
      }
    }
  // Only change code above this line
  return product;
}

// console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Change this line
let result = haRegex.test(haStr);
console.log(result);


