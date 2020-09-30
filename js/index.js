// Your code goes here
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

// event type: mouseover
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", (event) => {
  event.target.style.color = "red";
});

// event type: mouseleave
logo.addEventListener("mouseleave", (event) => {
  event.target.style.color = "black";
});
logo.style.cursor = "default";

// event type: keydown

// Why do both ways work with click, but only the first way works with keydown
// Which way is the correct way? which way should we be using
// in the first one, the background-color  -
// is applied to a bigger portion of the site than in the second one

const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");

body.addEventListener("keydown", function () {
  nav.style.backgroundColor = "mistyrose";
});

// const nav = document.querySelector(".main-navigation");
// nav.addEventListener("keydown", function (event) {
//   event.target.style.backgroundColor = "mistyrose";
// });

// ----------------------------------------------

// const imgScale = document.querySelector(".content-destination");

// imgScale.addEventListener("mouseover", e => {
//   console.log(`,mouseover happened!!`);
// imgScale.style.transfrom = 'scale(1.1)';
// imgScale.style.transition = 'transform 0.5s';
// });

// event type: click
// I want to give the image a border when I click it
const imgOne = document.querySelector("imgOne");
imgOne.addEventListener("click", (event) => {
  event.target.style.borderImage = "black";
});

// event type: load
window.addEventListener("load", (event) => {
  alert("Welcome To Fun Bus!!!");
});

// focus
// resize
// scroll
// select
// dblclick
// drag / drop
