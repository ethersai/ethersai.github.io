let button = document.getElementById("clickMe");
let heading = document.querySelector("h1");


heading.addEventListener("click", function() {
    heading.textContent = "You clicked me!";
});

// Select the element by its ID
// const button = document.getElementById("clickMe");

// // Add a click event listener
// button.addEventListener("click", function() {
//     alert("You clicked me!");
// });


// heading.addEventListener("click", function() {
//     heading.textContent = "You clicked me!";
// });