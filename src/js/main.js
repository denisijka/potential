'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.Hambar__menu'),
        menuItem = document.querySelectorAll('.Hambar__menu-item '),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('Hambar__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('Hambar__menu_active');
        });
    });

    // -------------------------------------------------------------
    //     const navbar = document.querySelector('.header__navbar'),
    //         menuList = navbar.querySelectorAll('.header__menu'),
    //         logo = navbar.querySelector('.header__logo'),
    //         form = document.querySelector('.footer__subscribe-form'),
    //         input = form.querySelector('.footer__text-field'),
    //         btn = form.querySelector('.footer__form-btn');

    //     console.log(form);
    //     console.log(btn);




    //     btn.addEventListener('click', (event) => {
    //         event.preventDefault();

    //     });

});