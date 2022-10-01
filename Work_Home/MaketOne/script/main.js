$(function(){
    $('.header__content-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/arrows-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/arrows-right.svg" alt=""></button>',
        appenArrows: $('.header__slider-arrows')
    });

});