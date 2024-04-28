$(document).ready(function(){

    $("#slider-hero").owlCarousel({
        loop:true,
        nav: true,
        //mouseDrag: false,
        items: 1,
        margin:0,
        navText: [
            "<i class='fa fa-angle-left'><i>",
            "<i class='fa fa-angle-right'><i>",
        ],
        navContainer: "#slider-hero-nav",

    });

    $("#tenaga-pendidik-slider").owlCarousel({
        loop:true,
        nav: true,
        //mouseDrag: false,
        items: 2,
        dots:false,
        margin:20,
        navText: [
            "<i class='fa fa-angle-left'><i>",
            "<i class='fa fa-angle-right'><i>",
        ],
        navContainer: "#slider-tools-1",

    });

    $("#alumni-slider").owlCarousel({
        loop:true,
        nav: true,
        //mouseDrag: false,
        items: 2,
        dots:false,
        margin:20,
        navText: [
            "<i class='fa fa-angle-left'><i>",
            "<i class='fa fa-angle-right'><i>",
        ],
        navContainer: "#slider-tools-2",

    });

    $("#galeri-slider").owlCarousel({
        loop:true,
        nav: true,
        //mouseDrag: false,
        items: 3,
        dots:false,
        margin:20,
        navText: [
            "<i class='fa fa-angle-left'><i>",
            "<i class='fa fa-angle-right'><i>",
        ],
        navContainer: "#slider-tools-3",

    });


});

