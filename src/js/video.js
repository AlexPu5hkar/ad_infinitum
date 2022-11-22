const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin:10,
    startPosition: 1,
    items: 2,
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});