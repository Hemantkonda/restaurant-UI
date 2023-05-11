$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear'
      });

      $('.autoplay_rev').slick({
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear',
        rtl: true,
      });
  });