'use strict';

(function () {
  if (window.matchMedia('(max-width: 1024px)')) {
    jQuery('.nav__two').hide();
    jQuery('.nav__item').on('click' , function () {
        jQuery(this).toggleClass('active');
        jQuery(this).find('.nav__two').slideToggle();
    })
  }
})();
