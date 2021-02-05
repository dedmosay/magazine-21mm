$(document).ready(function(){
  
    $(".authorization-form form span input.email-input").change (function () {
        $(".authorization-form form span.email").css({ "background": "#f5f5f5" });
    });

    $(".authorization-form form span input.password-input").change (function () {
        $(".authorization-form form span.password").css({ "background": "#f5f5f5" });
    });




    // $(".registration-form form span input.email-input").change (function () {
    //     $(".registration-form form span.email").css({ "background": "#f5f5f5" });
    // });

    // $(".registration-form form span input.password-input").change (function () {
    //     $(".registration-form form span.password").css({ "background": "#f5f5f5" });
    // });

    // $(".registration-form form span input.password-confirm-input").change (function () {
    //     $(".registration-form form span.password-confirm").css({ "background": "#f5f5f5" });
    // });


    // $(".registration-form form span input").change (function () {
    //     $(".registration-form form span").addClass("grey-bg");
    //     $("#registration-form_navbar ul li.current").removeClass("current") .addClass("next");
    // });

    // $(".registration-form form span input").change (function () {
    //     $(".registration-form form span").addClass("grey-bg");
    //     //$("#registration-form_navbar ul li.current").removeClass("current") .addClass("next");
    // });

    // $(".registration-form form span input.password-input").change (function () {
    //     $(".registration-form form span.password").addClass("grey-bg");
    // });

    //  $(".registration-form form span input.password-confirm-input").change (function () {
    //     $(".registration-form form span.password-confirm").addClass("grey-bg");
    // });


    // if ($(".registration-form form span.email").hasClass("grey-bg"))
    //     $("#registration-form_navbar ul li.current").removeClass("current") .addClass("next");

   /* var spanInput = $(".registration-form form span input");
    spanInput.each(function(){
        $(this).focus(function(){
            $(this).parent().addClass("focus");
        });
        $(this).blur(function(){
            $(this).parent().removeClass("focus");
        });
        $(this).change(function () {
           $(this).parent().addClass("grey-bg");
             if (spanInput.parents(".password-confirm").hasClass("grey-bg") &&
            spanInput.parents(".password").hasClass("grey-bg") &&
            spanInput.parents(".email").hasClass("grey-bg")) {
	    if(!emailError && !pasError) {
            // $("#registration-form_navbar ul li.current").removeClass("current").addClass("filled");
            // $(".registration-form form .go-next").css("visibility", "visible");
		//$('#registration-form').find('[href="#profile"]').parent().addClass('current');
	    }
          }  
        });
    })


    var spanInput2 = $(".profile form span input");
    spanInput2.each(function(){
        $(this).focus(function(){
            $(this).parent().addClass("focus");
        });
        $(this).blur(function(){
            $(this).parent().removeClass("focus");
        });
        $(this).change (function () {
           $(this).parent().addClass("grey-bg");
             if (spanInput2.parents(".name").hasClass("grey-bg") &&
            spanInput2.parents(".last-name").hasClass("grey-bg") &&
            spanInput2.parents(".birth").hasClass("grey-bg")) {
            // $(".profile-form_soc ul li.current").removeClass("current").addClass("filled");
             $(".go-next").css("visibility", "visible");
          }  
        });
    })


    var spanInput3 = $(".profile form span input");
    spanInput3.each(function(){
        $(this).focus(function(){
            $(this).parent().addClass("focus");
        });
        $(this).blur(function(){
            $(this).parent().removeClass("focus");
        });
        $(this).change (function () {
           $(this).parent().addClass("grey-bg");
             if (spanInput3.parents(".university").hasClass("grey-bg") &&
            spanInput3.parents(".profession").hasClass("grey-bg") &&
            spanInput3.parents(".town").hasClass("grey-bg")) {
             //$(".profile-form_soc ul li.current").removeClass("current").addClass("filled");
             $(".go-next").css("visibility", "visible");
          }  
        });
    })

*/
    $('.top').on('click', function() {
        $parent_box = $(this).closest('.box');
        $parent_box.siblings().find('.bottom').hide();
        $parent_box.find('.bottom').toggle();
    });

 

    $('.archive.slider').slick({
        arrows: false,
        asNavFor: '.slider-nav',
        //infinite: false,
        initialSlide: $('.slider-nav .first').index()
    });
                    
    $('.slider-nav').slick({
        asNavFor: '.archive',
        slidesToShow: 5,
        centerMode: true,
        //infinite: false,
        initialSlide: $('.slider-nav .first').index()
    });

   
});
