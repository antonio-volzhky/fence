'use strict';

(function() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
        const noLink = document.querySelectorAll('.js-no-link');

        noLink.forEach((item) => {
            item.addEventListener('click' , (event) => {
                event.preventDefault();
            })
        })
    }
}());
