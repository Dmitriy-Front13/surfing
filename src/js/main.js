$(function () {
  $('.slider__items').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.mobile__btn').on('click', function () {
    $('.mobile').fadeIn();
    $(this).fadeOut();
  });

  const $svgElement = $('.icon__svg');
  const header = $('.header__top')


  $(window).on('scroll', function () {
    const scrollY = $(window).scrollTop();

    if (scrollY > 50) {
      $svgElement.css('fill', '#00B2A0');
      header.css('background-color', '#00B2A0');
       
    } else {
      $svgElement.css('fill', '#fff');
      header.css('background-color', 'transparent');
    }
  }); 
  var mixer = mixitup('.gallery__content');
});
