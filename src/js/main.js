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
    // const navbar = document.querySelector('.header__navbar'),
    //     menuList = document.querySelector('.promo__interactive-list'),
    //     logo = navbar.querySelector('.header__logo'),
    //     form = document.querySelector('.footer__subscribe-form'),
    //     input = form.querySelector('.footer__text-field'),
    //     btn = form.querySelector('.footer__form-btn');

    // const wishDB = {
    //     wishes: [
    //         "Я`Скотт Пилигрим против...",
    //         "Логан",
    //         "Гарри поттер",
    //         "Lord of the rings",
    //         "Лига справедливости",
    //         "Матрица",
    //         "Patriot"
    //     ]
    // };


    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();

    //     let newWish = input.value;

    //     if (newWish) {
    //         if (newWish.length > 21) {
    //             newWish = `${newWish.substring(0, 22)}...`;
    //         }
    //         wishDB.wishes.push(newWish);
    //         sortArray(wishDB.wishes);
    //         creatWishList(wishDB.wishes, menuList);
    //     }
    //     event.target.reset();
    // });



    // const sortArray = (array) => {
    //     array.sort();
    // };

    // function creatWishList(wish, parent) {
    //     parent.innerHTML = '';

    //     sortArray(wish);

    //     wish.forEach((wish, i) => {
    //         parent.innerHTML += `
    //         <li class="promo__interactive-item">${i + 1}. ${wish}
    //         <div class="delete"></div>
    //         </li>
    //         `;
    //     });

    //     document.querySelectorAll('.delete').forEach((btn, i) => {
    //         btn.addEventListener('click', () => {
    //             btn.parentElement.remove();
    //             wishDB.wishes.splice(i, 1);
    //             creatWishList(wish, parent);
    //         });
    //     });
    // }



    // creatWishList(wishDB.wishes, menuList);

    const A = document.querySelectorAll('a');
    console.log(A);





});