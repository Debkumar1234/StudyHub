burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');
cancel = document.querySelector('.cancel');
logo = document.querySelector('.logo1');
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    burger.classList.toggle('burger-none');
    cancel.classList.toggle('cancel-none');
    logo.classList.toggle('logo-none');
})
cancel.addEventListener('click',()=>{
    burger.classList.toggle('burger-none');
    cancel.classList.toggle('cancel-none');
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('logo-none');
})