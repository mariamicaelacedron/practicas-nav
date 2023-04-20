const menuHamIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');

menuHamIcon.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
  
function hideMenu(){
    mobileMenu.classList.remove('active')
};

function showMenu() {
     mobileMenu.classList.add('active');
};