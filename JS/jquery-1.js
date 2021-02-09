// Modifying elements with jQuery
$("h2").text("CROCODILE ATTACKED!");
$("p").html(" The crocodiles are coming - <strong>Oh noess</strong>!");

// Add CSS roules
$("p").css("color", "green");

// Add a class in an element
$("h2").addClass("crocodile");

$("a").attr("href", "https://en.wikipedia.org/wiki/Crocodile");
$("img").attr("src", "https://www.kasandbox.org/programming-images/animals/crocodiles.png");

// You can also change the sizes, like this
$("img").width(300).height(200);

// Creating elements with jQuery
let newP = $("<p>");
newP.text("The crocodiles have eaten all the cats!");
newP.addClass("crocodiles");
// append prepend after
$("div").append(newP);


// jQuery Collections vs. DOM Nodes

headingFromD = document.getElementById("cute");

// DOM NODE

headingFromD.innerHTML = ("Setting .innerHTML");
var headingFromJ = $("#cute");  // jQuery Collection
headingFromJ.html("Using .html()");

var $heading = $("#cute");
$heading.html("Using jQuery again!");
var headingD = $heading[0];

var $headingJ = $(headingD);
