$(window).load(function() {
    $('.flexslider').flexslider({
        controlNav: false
    });

    $("#portfolio-carousel").owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktopSmall: [1199, 2],
        itemsTablet: [768, 1]
    });


    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#parallax').parallax("50%", 0.1);


    // Magnific popup //
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }


    });


    // jQuery one page nav
    $('#menu').onePageNav({
        currentClass: 'active',
        scrollOffset: 80
    });



});
