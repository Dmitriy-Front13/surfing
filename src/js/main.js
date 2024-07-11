
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


  $(window).on('scroll resize', function () {
    const scrollY = $(window).scrollTop();
    const width = $(window).width();

    if (scrollY > 0) {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
      $svgElement.css('fill', '#00B2A0');
    } else {
      $svgElement.css('fill', '#fff');
    }

    if (scrollY > $(window).height()) {
      header.css('background-color', '#00B2A0');
    } else {
      header.css('background-color', 'transparent');
    }

    if (width <= 860) {
      if (scrollY > $(window).height()) {
        $('.menu__list-link').css('color', 'black');
        $('.menu__list').css('paddingTop', '70px');
      } else {
        $('.menu__list-link').css('color', 'white');
        $('.menu__list').css('paddingTop', '60px');
      };
    } else {
        $('.menu__list-link').css('color', '');
        $('.menu__list').css('paddingTop', '');
    }
  });
 
  var mixer = mixitup('.gallery__content');
});
