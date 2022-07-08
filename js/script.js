let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

window.addEventListener('scroll',()=>{
    navbar.classList.remove('active');
})