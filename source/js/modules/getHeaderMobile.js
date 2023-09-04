'use strict';

(function () {
    var btn = document.querySelectorAll('.js-btn');
    var block = document.querySelectorAll('.js-block');

    btn.forEach(function (btnItem) {
        btnItem.addEventListener('click' , function() {
            var t = this;
            btn.forEach(function (item) {
                if (!(item === t)) {
                    item.classList.remove('js-btn-active');
                }
            });
            btnItem.classList.toggle('js-btn-active');
            block.forEach(function (blockItem) {
                if (btnItem.dataset.block === blockItem.dataset.block) {
                    blockItem.classList.toggle('js-block-inactive');
                } else {
                    blockItem.classList.add('js-block-inactive');
                }
            });
        });
    });
})();

