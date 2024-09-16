$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });
    $(document).ready(function() {
    // Initialize WOW.js if necessary
    new WOW().init();

    // Toggle the navigation menu when the button is clicked
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(2000);  // Show or hide the navbar items
    });

    // Navbar background change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });
});

    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });
    // Throttle function to limit the number of times a function is executed
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

$(window).scroll(throttle(function() {
    let pos = $(window).scrollTop();
    if (pos >= 100) {
        $('.navbar').addClass('cng-navbar');
    } else {
        $('.navbar').removeClass('cng-navbar');
    }
}, 100)); // Throttled to run every 100ms
let ticking = false;

$(window).scroll(function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            let pos = $(window).scrollTop();
            if (pos >= 100) {
                $('.navbar').addClass('cng-navbar');
            } else {
                $('.navbar').removeClass('cng-navbar');
            }
            ticking = false;
        });
        ticking = true;
    }
});
$(document).ready(function() {
    new WOW().init();

    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // Throttle scroll event to reduce performance impact
    $(window).scroll(throttle(function() {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    }, 100)); // Throttle to run every 100ms
});

// Throttle function to limit the number of scroll executions
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}


});