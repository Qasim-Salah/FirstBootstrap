$(function () {
    // Start Slider
    'use strict';
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
// Start Father
    $('.featured-work ul li ').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.father .col-md').css('opacity', 1);
        } else {
            $('.father .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });
});