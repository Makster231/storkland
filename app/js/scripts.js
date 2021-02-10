"use strict";

(function ($, window, document) {
  $(function () {
    $(window).on("load", function () {
      $("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />');
    });
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function sharesChooseSlides() {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  ;

  function burgerMenu() {
    $(".icon_burger-toggle").on("click", function () {
      $("body").toggleClass("js_active_burger_menu");
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
    sharesChooseSlides();
    burgerMenu();
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
