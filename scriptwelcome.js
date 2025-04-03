const button1 = document.getElementById("welcomeButton");
const button2 = document.querySelector("footer div > button");

button2.disabled = true;
button2.style.opacity = "0.5";

button1.addEventListener("click", function () {
  button2.disabled = false;
  button1.innerHTML = "✔";
  button2.style.opacity = "1";
});
