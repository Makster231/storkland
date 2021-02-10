"use strict";

(function ($, window, document) {
  $(function () {
    $(window).on("load", function () {
      $("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />');
    });
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function ChooseSlides() {
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

  function modalSlider() {
    var mySwiper = new Swiper('.swiper-container-modal', {
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

  function burgerMenu() {
    $(".icon_burger-toggle").on("click", function () {
      $("body").toggleClass("js_active_burger_menu");
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
    $(document).on('afterShow.fb', function (e, instance, slide) {
      if (!$(".swiper-container-modal").hasClass("swiper-container-initialized")) {
        modalSlider();
      }
    });
    ChooseSlides();
    burgerMenu();
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
