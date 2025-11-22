let button = document.getElementById("clickMe");
let heading = document.querySelector("h1");


heading.addEventListener("click", function() {
    heading.textContent = "You clicked me!";
});
