let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactinfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#info-btn").addEventListener("click", () => {
  contactinfo.classList.add("active");
});
document.querySelector("#close-contact-info").addEventListener("click", () => {
  contactinfo.classList.remove("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactinfo.classList.remove("active");
});

var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
