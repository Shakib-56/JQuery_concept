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

/*
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
*/

// CSS Manipulation
/*
$("p").css("color", "white");
$("p").css("font-size", "20px");
$("p").css("background-color", "blue");
$("p").css("padding", "10px");
$("p").css("border", "2px solid black");

// multiple css properties at once
$("p").css({
  "text-align": "center",
  "border-radius": "10px",
  "box-shadow": "2px 2px 5px grey",
});
*/
// adding a class to the paragraph
// in javascript we used document.querySelector("p").classList.add("style1");
$("#p1").addClass("style1");
// multiple classes can be added at once
// in javascript we used document.querySelector("p").classList.add("style2", "style3");
$("#p1").addClass("style1 style2"); //here just use space to separate multiple classes
// removing a class from the paragraph
// in javascript we used document.querySelector("p").classList.remove("style1");
$("#p1").removeClass("style2");
// toggling a class from the paragraph
// in javascript we used document.querySelector("p").classList.toggle("style3");
$("#p1").toggleClass("style2");
// checking if a class is present in the paragraph
// in javascript we used document.querySelector("p").classList.contains("style1");
let hasClass = $("#p1").hasClass("style1");
console.log("Does paragraph have class 'style1'? " + hasClass);

// Event Handling
// in javascript we used document.querySelector("button").addEventListener("click", function() {...});

// document.querySelector("#btn1").addEventListener("click", function () {
//   alert("Button clicked! This is handled using JavaScript.");
//   document.querySelector("h1").innerHTML = "Button Clicked!";
// });

// using JQuery to handle button click event
// $("#btn1").click(function () {
//   alert("Button clicked! This is handled using JQuery.");
//   $("h1").text("Button Clicked!");
// });
// $("#btn1").click(() => {
//   alert("Button clicked! This is handled using JQuery.");
//   $("h1").toggleClass("style2");
// });

/*
let totalButtons = document.querySelectorAll(".myButton").length;
for (let i = 0; i < totalButtons; i++) {
  document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      let text = this.innerHTML;
      document.querySelector("h1").innerHTML = "You clicked " + text;
    });
}
*/
// $(".myButton").click(function () {
//   let value = this.innerHTML;
//   $("h1").text("You clicked " + value);
// });

$(".myButton").on("mouseover", function () {
  let value = this.innerHTML;
  $("h1").text("You clicked " + value);
});
