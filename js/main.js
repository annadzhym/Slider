'use strict';

(function ($) {
    $('.carousel').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        slide: 'div',
        prevArrow: '.prev',
        nextArrow: '.next',
        dotsClass: 'slick-dots carousel__dots',
    });
    $(document).ready(function () {
        $('.home').on('click', function () {
            e.preventDefault();

            $('.carousel').slickGoTo(1);
        })
    });
    $('.carousel').click(function next() {
        $('.carousel').slick('slickNext');
    })


})(jQuery);