
$(document).ready(function(){
    $('.header__slick-slider-container').slick({
      dots: true,
      arrows:false
    });
    $('.news__slick-slider').slick({
      infinite: true,
      centerMode: true, 
      arrows: true, 
      dots: true, 
      centerPadding: '30px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 4000, 
      variableWidth: true, 
    });
  });  