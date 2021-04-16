'use strict';
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.defaultPrevented();
});
