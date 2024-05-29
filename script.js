document.querySelector("h1").innerText = "i wrote this using js";

document.querySelector("img").src = "artworks-q5HGyebdxtmw91lH-jncarA-t500x500.jpg";

let paragraph = document.querySelector("p");
let old_text = paragraph.innerText;
paragraph.innerText = old_text + ", also this using js";

let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<div></div>";

let div = document.querySelector("div");
div.style.width = "100px";
div.style.height = "100px";

div.setAttribute("style", "width: 100px; height: 100px; border: 2px solid #1d1d1d; background:red");

div.innerHTML = "<p>WOWOOW</p>";