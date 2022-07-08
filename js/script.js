let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');

document.querySelector('#menu-btn').addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
}); 

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
}); 

window.addEventListener('scroll',()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
})