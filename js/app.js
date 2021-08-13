// navbar toggler

var burger = document.querySelector(".menu-bar");
const navbar = document.querySelector('.nav-ul');
const items = document.querySelector('.items');

burger.addEventListener("click", showNav);
items.addEventListener("click", showNav);

function showNav() {
    navbar.classList.toggle("show-menu");
}


// navbar toggler