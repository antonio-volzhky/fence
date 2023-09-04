'use strict';

(function () {
    var sensorImg = document.querySelectorAll('.js-fancy-min');
    var sensorBigImg = document.querySelector('.js-fancy-big');

    if(sensorBigImg) {
        var bigImg = sensorBigImg.querySelector('img');
    }

    sensorImg.forEach(function (item , i) {
        if (item.classList.contains('active')) {
            bigImg.src = item.querySelector('img').getAttribute('src');
            sensorBigImg.dataset.index = i;
        }
    });

    sensorImg.forEach(function (item , i) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            sensorImg.forEach(function (item2) {
                item2.classList.remove('active');
            });
            item.classList.add('active');
            sensorBigImg.classList.add('inactive');
            var getToggleImg = function () {
                bigImg.src = item.querySelector('img').getAttribute('src');
                sensorBigImg.dataset.index = i;
                sensorBigImg.classList.remove('inactive');
            }
            setTimeout(getToggleImg, 500);
        })
    });
})();

