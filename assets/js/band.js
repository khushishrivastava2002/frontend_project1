$(document).ready(function(){
    $(".MySlider").owlCarousel();
  });
    $('.MySlider').owlCarousel({
              margin: 0,
              autoplay: true,
              autoplayTimeout: 5000,
              loop: true,
              navText: ["<",">"],
              nav: true,
              responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 1
                  },
                  1000: {
                      items: 1
                  }}
          });