$(document).ready(function(){
    $('.top-search-search-button').click(function(){
        $(this).hide();
        $('.top-search-close-button').show();
        $('.top-search-rounded-box input[type="text"]')
        .addClass('af-search-input-open')
        .animate(
            {
                width: '100%',
                padding: '0 17px 0 2px'
            },
            500,
			function(){
				$(this).addClass('af-search-input-placeholder');
			}
        );
    });
    $('.top-search').on('click', function(e){
      e.stopPropagation();
    });

    $('.top-search').submit(function(){
        if($('.top-search input[type="text"]').val().length <= 0 ){
            $('.top-search input[type="text"]').addClass("is-empty");
            return false;
        }
    });
    function CloseTopSearch(element) {
        $(element).on('click', function(){
            $('.top-search-search-button').show();
            $('.top-search-close-button').hide();
    		$('.top-search-rounded-box input[type="text"]').removeClass('af-search-input-placeholder is-empty');
            $('.top-search-rounded-box input[type="text"]')
            .animate(
                {
                    width: '0%',
                    padding: '0'
                },
                500,
                function(){
                    $(this).removeClass('af-search-input-open');
                }
            );
        });
    }
    CloseTopSearch('body');
    CloseTopSearch('.top-search-close-button');
    $('.header-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('.header-slider-slide-prev').click(function(){
        $('.header-slider').slick('slickPrev');
    });
    $('.header-slider-slide-next').click(function(){
        $('.header-slider').slick('slickNext');
    });
    function InitSlickSlider (element) {
        $('.'+element+'__content').on('init', function(event, slick){
            $('.'+element+'__content .slick-dots').appendTo($('.'+element+'__dots'));
        });
        $('.'+element+'__content').slick({
            arrows:false,
            fade:true,
            speed:1,
            dots:true
        });
        $('.'+element+'__prev').click(function(){
            $('.'+element+'__content').slick('slickPrev');
        });
        $('.'+element+'__next').click(function(){
            $('.'+element+'__content').slick('slickNext');
        });
    }
    InitSlickSlider('most-popular');
    InitSlickSlider('time-tested');
    InitSlickSlider('most-interesting');
});
