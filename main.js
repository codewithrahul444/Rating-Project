let rateBox = document.querySelector("#rateBox");
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("mouseenter", () => {
  btn1.style.color = "red";
});
btn1.addEventListener("mouseleave", () => {
  btn1.style.color = "black";
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("mouseenter", () => {
  btn1.style.color = "orangered";
  btn2.style.color = "orangered";
});
btn2.addEventListener("mouseleave", () => {
  btn1.style.color = "black";
  btn2.style.color = "black";
});

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("mouseenter", () => {
  btn1.style.color = "orange";
  btn2.style.color = "orange";
  btn3.style.color = "orange";
});
btn3.addEventListener("mouseleave", () => {
  btn1.style.color = "black";
  btn2.style.color = "black";
  btn3.style.color = "black";
});

let btn4 = document.querySelector(".btn4");
btn4.addEventListener("mouseenter", () => {
  btn1.style.color = "yellow";
  btn2.style.color = "yellow";
  btn3.style.color = "yellow";
  btn4.style.color = "yellow";
});
btn4.addEventListener("mouseleave", () => {
  btn1.style.color = "black";
  btn2.style.color = "black";
  btn3.style.color = "black";
  btn4.style.color = "black";
});

let btn5 = document.querySelector(".btn5");
btn5.addEventListener("mouseenter", () => {
  btn1.style.color = "#00ff00";
  btn2.style.color = "#00ff00";
  btn3.style.color = "#00ff00";
  btn4.style.color = "#00ff00";
  btn5.style.color = "#00ff00";
});
btn5.addEventListener("mouseleave", () => {
  btn1.style.color = "black";
  btn2.style.color = "black";
  btn3.style.color = "black";
  btn4.style.color = "black";
  btn5.style.color = "black";
});