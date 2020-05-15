
$(document).ready(function(){
    $('.header__slick-slider').slick({
      dots: true
    });
    $('.news__slick-slider').slick({
      centerMode: true,
      arrows: true, 
      dots: true, 
      centerPadding: '30px',
      slidesToShow: 3,
      autoplay: true, 
      autoplaySpeed: 4000
    });
  });  