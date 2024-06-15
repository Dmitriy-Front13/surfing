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

    if (scrollY > 0) {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
    }
  });
  $(window).on('scroll', function () {
    if (scrollY > $(window).height()) {
      $svgElement.css('fill', '#00B2A0');
      header.css('background-color', '#00B2A0');
      $('.menu__list-link').css('color', 'black');
      $('.menu__list').css('paddingTop', '70px')

    } else {
      $svgElement.css('fill', '#fff');
      header.css('background-color', 'transparent');
      $('.menu__list-link').css('color', 'white');
      $('.menu__list').css('paddingTop', '60px')
    };
  });

  var mixer = mixitup('.gallery__content');
});
