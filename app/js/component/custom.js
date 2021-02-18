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
        
        
        mySwiper[0].on('slideChangeTransitionEnd', function() {
            if($('.js_product_card-product--body_slider').length){
                $('.js_product_card-product--body_slider__small li').removeClass("js_active");
                let slider_big_index = $(`.js_product_card-product--body_slider .swiper-slide-active`).index() - 1;
                $(".js_product_card-product--body_slider__small li:eq("+ slider_big_index  +")").addClass("js_active");
            }
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
    function articlesBestSlider() {
        
        let count_of_slides = 1;

        if($(window).width() > 640){
            count_of_slides = 4;
        }

        var mySwiper = new Swiper('.swiper_articles-container', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: count_of_slides,
            spaceBetween: 20,
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })


        $(".js_swiper-left").on("click", function(){
            $(this).closest(".article_title-bar").next().find(".swiper-button-prev").trigger("click");
        })
        $(".js_swiper-right").on("click", function(){
            $(this).closest(".article_title-bar").next().find(".swiper-button-next").trigger("click");
        })
    }
    function productCardRecent() {
        
        let count_of_slides = 1;

        if($(window).width() > 640){
            count_of_slides = 3;
        }

        var mySwiper = new Swiper('.swiper_product-card--container', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: count_of_slides,
            spaceBetween: 20,
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next-card',
                prevEl: '.swiper-button-prev-card',
            },
        })

        
        mySwiper.on('slideChangeTransitionEnd', function() {
            if($('.js_product_card-product--body_slider').length){
                $('.js_product_card-product--body_slider__small li').removeClass("js_active");
                let slider_big_index = $(`.js_product_card-product--body_slider .swiper-slide-active`).index();
                $(".js_product_card-product--body_slider__small li:eq("+ slider_big_index +")").addClass("js_active");
            }
        })


        $(".js_swiper-left").on("click", function(){
            $(".swiper-button-prev-card").trigger("click");
        })
        $(".js_swiper-right").on("click", function(){
            $(".swiper-button-next-card").trigger("click");
        })
    }

    function productCardSliderSmall(){
        $(".js_product_card-product--body_slider__small li").on("click", function(){
            $(".js_product_card-product--body_slider__small li").removeClass("js_active");

            $(this).addClass("js_active");

            $(".swiper-pagination-bullet:eq(" + $(this).index() + ")").trigger("click");
        })
    }

    function triggerCountOfProduct(){
        $(".js_product_card-count--plus").on("click", function(){
            let input_val = +$(this).closest(".js_product_card-product--body_content__footer").find("input[type=number]").val();
            input_val++;
            $(this).closest(".js_product_card-product--body_content__footer").find("input[type=number]").val(input_val);
        })
        $(".js_product_card-count--minus").on("click", function(){
            let input_val = +$(this).closest(".js_product_card-product--body_content__footer").find("input[type=number]").val();
            if(input_val > 1){
                input_val--;
                $(this).closest(".js_product_card-product--body_content__footer").find("input[type=number]").val(input_val);
            }
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

    function asideCategory(){
        
        $(".js_aside_category-item").on("click", function(e){
            let $this = $(this);

            if($this.has(".js_aside_category-item--has")){
                if($this.find("ul").has(e.target).length === 0){
                    $this.toggleClass("js_active");
                    $this.find("ul").toggle("300");
                }
            }
            
            if($this.find("li").is(e.target) || $this.find("p").is(e.target)){
                if($this.find("p").is(e.target)){
                    $(e.target).closest("li").toggleClass("js_active");
                }else{
                    $(e.target).toggleClass("js_active");
                }
            }
        })

    }

    function activateTooltipster(){
        

        $(".js_btn_empty").on("mouseover", function(){
            let a = $(this).parent().find(".js_tooltipster_text").html();

            $(this).tooltipster({
                position: "bottom",
                side: "top",
                trigger: 'hover',
                contentAsHTML: true,
                interactive: true,
                content: $(a)
            });
        })
    }

    function openDatePicker(){
        $('.js_icon-open-date').click(function() {
            $('input[name="datetimes"]').daterangepicker({
                timePicker: true,
                opens: "center"
              });
        });
    }

    function inputTypeFile(){
        $(".js_icon-file").on("click", function(){
            $(this).closest(".js_input-file").find("input").trigger("click");
        })
    
        $("input[type=file]").on("input", function(){
            let $this = $(this);
            let $wrapper = $this.closest(".js_input-file");
            $wrapper.find("input").trigger("click");
            if($wrapper.find("input").val() !== ""){
                let value = $wrapper.find("input").val().split("\\")[$wrapper.find("input").val().split("\\").length-1];
                $wrapper.find("p").text(value);
            }
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

        articlesBestSlider();

        activateTooltipster();
        
        openDatePicker();

        asideCategory();

        inputTypeFile();

        productCardRecent();

        productCardSliderSmall();

        triggerCountOfProduct();
    });
})(window.jQuery, window, document);