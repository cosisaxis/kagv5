let menuItem = document.querySelector('#menu-bars');
let nav = document.querySelector('.navbar');

menuItem.onclick = () =>{
    menuItem.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll= () =>{
    menuItem.classList.remove('fa-times');
    nav.classList.remove('active');
}