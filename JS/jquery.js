



// DOM 
// window.onload = function(){
//     const heading = document.createElement("h2");
//     const heading_text = document.createTextNode("Big Head");
//     heading.appendChild(heading_text);
//     document.body.appendChild(heading);
// }

// window.onload = function(){
//     const h2_tag = document.createElement("h3");
//     const insert_text = document.createTextNode("H3 Heading");
//     h2_tag.appendChild(insert_text);
//     document.body.appendChild(h2_tag);
// }


//value from 0 to 1
// function getColor(value){
//     var hue=((1-value)*120).toString(2);
//     return ["hsl(",hue,",100%,50%)"].join("");
// }
// var len=20;
// for(var i=0; i<=len; i++){
//     var value=i/len;
//     var d=document.createElement('div');
//     d.textContent="value="+value;
//     d.style.backgroundColor=getColor(value);
//     document.body.appendChild(d);
// }


// jQuery

// $("h1"); // selects all the h1s
// $("#heading"); // selects the element with id of "heading"
// $(".warning"); // selects all the elements with class name of "warning"

// All the headers of h1 will be changed by these texts
$("h1").text("jQuery is the greatest!");

// How to div class name in jQuery
$(".note").text("jquery is very easy to learn!")

var headingText = $("#heading").text();
console.log(headingText);
$("#heading").text("jQuery is the one best framwork of JavaScript!" + headingText + "!");

// Math discoveries
var math = $("#math-heading");
console.log(math);
math.text(math.text() + " " + "amazing!" + " "  + math);

// Science discoveries
var science = $("#science-heading");
science.text(science.text() + " " + science + " " + "jQuery is amazaing!");

// How to add a class in div element with jQuery
$(div.surprise).addClass("omg").show("slow");

// when you click on the button it will pop up
$("button").click(function () {
    alert("The paragraph was clicked!");
});