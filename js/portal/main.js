(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // event carousel
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    function initializeMarqueeToggle(trackId, buttonId, iconId) {

        const marqueeTrack = document.getElementById(trackId);
        const toggleBtn = document.getElementById(buttonId);
        const toggleIcon = document.getElementById(iconId);
        let manuallyPaused = false;

        toggleBtn.addEventListener("click", () => {
            manuallyPaused = !manuallyPaused;
            if (manuallyPaused) {
                marqueeTrack.classList.add("paused");
                toggleIcon.classList.remove("bi-pause-fill");
                toggleIcon.classList.add("bi-play-fill");
            } else {
                marqueeTrack.classList.remove("paused");
                toggleIcon.classList.remove("bi-play-fill");
                toggleIcon.classList.add("bi-pause-fill");
            }
        });
    }
    // FUNCTION CALL
    initializeMarqueeToggle("marqueeTrack","toggleBtn","toggleIcon");
    initializeMarqueeToggle("marqueeTrack2","toggleBtn2","toggleIcon2");

})(jQuery);

