'use strict';

(function () {
    var sliderContainers = document.querySelectorAll('.slider');

    var getBlockSlider = function (slider) {
        if (slider) {
            var container = slider.querySelector('.swiper-container');
            var slides = slider.querySelectorAll('.swiper-slide');
            var prev = slider.querySelector('.js-btn-next');
            var next = slider.querySelector('.js-btn-prev');
            var pagination = slider.querySelector('.swiper-pagination');
            var loop = true;
            var allowTouchMove = true;
            var direction = 'horizontal';
            var autoHeight = false;
            var breakpoints = {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 7,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
            };
            if (slides.length >= 2) {
                return new window.Swiper(container, {
                    direction: direction,
                    allowTouchMove: allowTouchMove,
                    loop: loop,
                    autoHeight: autoHeight,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    // updateOnWindowResize: false,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    breakpoints: breakpoints,
                });
            }
        }
    };

    sliderContainers.forEach(function (currentValue) {
        getBlockSlider(currentValue);
    });

    var swiper = new Swiper(".big-gallery__min-slider", {
        spaceBetween: 0,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 6,
            },
        }
      });
      var swiper2 = new Swiper(".big-gallery__big-slider", {
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".js-btn-next",
          prevEl: ".js-btn-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

})();
