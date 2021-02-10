(function ($, window, document) {

  function sharesChooseSlides() {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    })
  };

  function burgerMenu(){
    $(".icon_burger-toggle").on("click", function(){
      $("body").toggleClass("js_active_burger_menu");
    })  
  }

  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    
    sharesChooseSlides();

    burgerMenu();
   
  });
})(window.jQuery, window, document);

