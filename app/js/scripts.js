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

  function closeModal() {
    $.fancybox.close();
  }

  $(".js_close_modal").on("click", function () {
    closeModal();
  });

  function burgerMenu() {
    $(".icon_burger-toggle").on("click", function () {
      $("body").toggleClass("js_active_burger_menu");
    });
  }

  function asideCategory() {
    $(".js_aside_category-item").on("click", function (e) {
      var $this = $(this);

      if ($this.has(".js_aside_category-item--has")) {
        if ($this.find("ul").has(e.target).length === 0) {
          $this.toggleClass("js_active");
          $this.find("ul").toggle("300");
        }
      }

      if ($this.find("li").is(e.target) || $this.find("p").is(e.target)) {
        if ($this.find("p").is(e.target)) {
          $(e.target).closest("li").toggleClass("js_active");
        } else {
          $(e.target).toggleClass("js_active");
        }
      }
    });
  }

  function activateTooltipster() {
    $(".js_btn_empty").on("mouseover", function () {
      var a = $(this).parent().find(".js_tooltipster_text").html();
      $(this).tooltipster({
        position: "bottom",
        side: "top",
        trigger: 'hover',
        contentAsHTML: true,
        interactive: true,
        content: $(a)
      });
    });
  }

  function openDatePicker() {
    $('.js_icon-open-date').click(function () {
      $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        opens: "center"
      });
    });
  }

  function inputTypeFile() {
    $(".js_icon-file").on("click", function () {
      $(this).closest(".js_input-file").find("input").trigger("click");
    });
    $("input[type=file]").on("input", function () {
      var $this = $(this);
      var $wrapper = $this.closest(".js_input-file");
      $wrapper.find("input").trigger("click");

      if ($wrapper.find("input").val() !== "") {
        var value = $wrapper.find("input").val().split("\\")[$wrapper.find("input").val().split("\\").length - 1];
        $wrapper.find("p").text(value);
      }
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
    activateTooltipster();
    openDatePicker();
    asideCategory();
    inputTypeFile();
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
