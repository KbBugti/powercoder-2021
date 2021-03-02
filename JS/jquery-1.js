
var crocodilize = function(){
  // Modifying elements with jQuery
$("h2").text("CROCODILE ATTACKED!");
$("p").html(" The crocodiles are coming - <strong>Oh noess</strong>!");
 

// for loop
var $paragraphs = $('p');
for (var i = 0; i < $paragraphs.length; i++) {
    var element = $paragraphs[i]; // DOM node
    var $paragraph = $(element);
    $paragraph.html( $paragraph.html() + "..huzzah!");
}

// each()
$paragraphs.each(function(index, element) {
    var $paragraph = $(this);
    console.log(element === this);
    $paragraph.html( $paragraph.html() + "..Wow amazing!");
});

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


// Daisy Chain - Making Webpages Interactive with jQuery
for (var i = 0; i < 6; i++ ){
    $("<img>")
    .attr("src","https://upload.wikimedia.org/wikipedia/commons/2/29/English_Daisy_(Bellis_Perennis).jpg")
     .attr("width","50")
     .attr("alt","A white and yallow daisy")
     .appendTo("body")
}

}

$("#croc-button").on("click", function(){
    console.log("Click here!");
    crocodilize();
});

// When the user clicks on the page:
//   create a new image
//   position it according to where click happened


// $("body").on("click", function(event){
//     console.log(event);
//     var $img = $("<img>")
//     .attr("src", "https://www.kasandbox.org/programming-images/animals/crocodiles.png")
//     .width("100")
//     .css("position", "absolute")
//     .css("top", event.pageY + "px")
//     .css("left", event.pageX + "px")
//     .appendTo("body");
// });


// $("#pic").on("click", function(event) {
//     var mouseX = event.pageX;
//     var mouseY = event.pageY;
//  });


    // When the user submits the form,
    // Check what answer they picked
    // And tell them if they're correct

    // submit
    $("#quiz-form").on("submit", function(event){
        event.preventDefault();
        var $answer = $("#quiz-answer");
        var answer = $answer.val();
        console.log(answer);
        if (answer === "crocodile"){
            $("#result").text("Woweeee! You got it! WOOO PARTY!");
        } else {
            $("#result").text("Try again!");
        }
    });

// Maps croc species to image URLs
var crocImages = {
    "american": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg",
    "saltwater": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Crocodylus_porosus_4.jpg",
    "freshwater": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Australia_Cairns_18.jpg"
};

// When the user submits the form,
// Check what species they ordered
// and display an image of it

$("#croc-form").on("submit", function(event){
    event.preventDefault();
        var $crocSpecies = $(this).find("[name=species]"); // scoped
    var crocSpecies = $crocSpecies.val();
    var $img = $("<img>");
    $img.width(100);
    $img.attr("src", crocImages[crocSpecies]);
    $img.appendTo("body");
});


var calcDonuts = function(years) {
    return years * 3 * 365;
};

$("#calculator-form").on("submit", function(event) {
    event.preventDefault();
    var $age = $(this).find("[name=age]");
    var age = $age.val();
    var donuts = calcDonuts(age);

    $("#calculator-results").text("Winston ate " + donuts + " donuts");
    
});