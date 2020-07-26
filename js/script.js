$(document).ready(function () {
    "use strict";
    // Parallax // 
    $('.parallax').scrolly({bgParallax: true});
    // Container Gap // 
    var container_gap = $(".container").offset().left;
    $(".contact-head").css({
        'left': container_gap
    });
    // Hash Location // 
//    function scrollTo(hash) {
//        location.hash = "#" + hash;
//    }



    // Responsive Header //
    $(".responsive-btn").on("click", function () {
        $(".responsive-menu").addClass("slidein");
        return false;
    });
    $(".close-btn").on("click", function () {
        $(".responsive-menu").removeClass("slidein");
        return false;
    });
    $(".responsive-menu li.menu-item-has-children > a").on("click", function () {
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().children("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    // Sticky Header// 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".stick").addClass("sticky");
        } else {
            $(".stick").removeClass("sticky");
        }
    });
    var menu_height = $("header").height();
    if ($("header").hasClass("stick")) {
        $(".theme-layout").css({"padding-top": menu_height});
    } else {
        $(".theme-layout").css({"margin-bottom": "0"});
    }


    // Scroll Bar //
    $('.responsive-menu, .modal-dialog1, .modal-dialog2').perfectScrollbar();
    
    // Responsive Header Sec
    $(".top-sec-btn").on("click", function () {
        $(".responsive-top-sec").toggleClass("active");
        return false;
    });
   
    //** Partners **//
    $("#partners").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        loop: true,
        dots: false,
        nav: true,
        margin: 90,
        items: 5,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            900: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
});