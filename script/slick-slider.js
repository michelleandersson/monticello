
$(document).ready(function(){
    $('.header__slick-slider-container').slick({
      dots: true,
      arrows:false
    });
    $('.news__slick-slider').slick({
      infinite: true,
      centerMode: true, 
      arrows: false, 
      dots: true, 
      centerPadding: '30px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 4000, 
      variableWidth: true, 
     });
  }); 

  $('#go-back').click(function(){
    $('.news__slick-slider').slick('slickPrev');
  })
  
  $('#go-forward').click(function(){
    $('.news__slick-slider').slick('slickNext');
  })