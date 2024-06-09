$(function () {
  $('.slider__items').slick({
    arrows: false,
    dots: true,
    });
    
    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
      });
    var mixer = mixitup('.gallery__content');
});
