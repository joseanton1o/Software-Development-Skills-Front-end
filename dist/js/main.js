// Select DOM Items (UI structure html tags attributes ...)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

// Return linked list with all the navItems, if we use just query selector we would be selecting just the first
const navItems = document.querySelectorAll('.nav-item'); 

// Set initial State of Menu, closed --> false

let showMenu = false; // let for reasignment
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        // add show clases to links and close class to button
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        // Arrow function, item is the variable to represent each item, same as:
        // for (int item : navItems){}; // c++ sintax
        navItems.forEach(item => item.classList.add('show'));

    } else {
        // add show clases to links and close class to button
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        // Arrow function, item is the variable to represent each item, same as:
        // for (int item : navItems){}; // c++ sintax
        navItems.forEach(item => item.classList.remove('show'));
    }

    showMenu = !showMenu;
}