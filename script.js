let btn = document.getElementById("button1");
let secret = document.getElementById("secret");
let img = document.querySelector("img");

btn.addEventListener("click", function() {
    console.log("HELLO");
    secret.classList.toggle("hidden");
    img.classList.toggle("hidden");
});