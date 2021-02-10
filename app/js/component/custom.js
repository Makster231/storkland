(function($, window, document) {

    function ChooseSlides() {
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

    function modalSlider() {
        var mySwiper = new Swiper('.swiper-container-modal', {
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
    }

    function closeModal() {
        $.fancybox.close();
    }
    $(".js_close_modal").on("click", function() {
        closeModal();
    })


    function burgerMenu() {
        $(".icon_burger-toggle").on("click", function() {
            $("body").toggleClass("js_active_burger_menu");
        })
    }

    $(() => {
        //show content after loaded page
        $("body").css("opacity", "1");

        $(document).on('afterShow.fb', function(e, instance, slide) {
            if (!$(".swiper-container-modal").hasClass("swiper-container-initialized")) {
                modalSlider();
            }
        });

        ChooseSlides();

        burgerMenu();
    });
})(window.jQuery, window, document);