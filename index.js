// document.querySelector("h1").innerHTML = "Hello, welcome to JQuery journey!";
// here class selectror is used to change the text of h1
// $(".my-div h1").text("hi");
// here id selector is used to change the html of paragraph one and it's style
// $("#p1").html("<b>This is paragraph one.</b>");

// some text append to the previous paragraph text
// $("#p1").append(" This text is appended to the previous paragraph text.");

// some text prepend to the previous paragraph text
// $("#p1").prepend(" This text is prepended to the previous paragraph text.");

// create a new paragraph using JQuery and add before previous paragraph
// let mypara1 = $("<p></p>").text(
//   "This is a new paragraph created using JQuery."
// );
// $("#p1").before(mypara1.clone());
// // create a new paragraph using JQuery and add after previous paragraph

// $("#p1").after(mypara1.clone());

// Attribute Manipulation

//in js we used document.querySelector("a").getAttribute("href");
let attr = $("a").attr("href");
console.log("The href attribute of the link is: " + attr);
// in js we used document.querySelector("a").setAttribute("href", "https://www.example.com");
$("a").attr("href", "https://www.example.com");

// remove attribute
// in js we used document.querySelector("a").removeAttribute("target");
$("a").removeAttr("target");
console.log("The target attribute is removed.");
