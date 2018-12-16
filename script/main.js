$(function(){
    $("#phone").mask("7(999) 99-999-99");
  });

new WOW().init();

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
});

$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1
          }
      },
      {
        breakpoint: 1100,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
  ]
});
});