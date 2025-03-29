AOS.init({
  once: true,
});

Fancybox.bind();


$('.slider-gallery').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1376,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 976,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
  ]

});

