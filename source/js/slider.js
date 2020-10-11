let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");

function on1() {
  slide1.classList.remove("slide-none");
  slide2.classList.add("slide-none");
  slide3.classList.add("slide-none");

  btn1.classList.add("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
}

function on2() {
  slide2.classList.remove("slide-none");
  slide1.classList.add("slide-none");
  slide3.classList.add("slide-none");

  btn2.classList.add("btn-active");
  btn1.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
}

function on3() {
  slide3.classList.remove("slide-none");
  slide1.classList.add("slide-none");
  slide2.classList.add("slide-none");

  btn3.classList.add("btn-active");
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
}

