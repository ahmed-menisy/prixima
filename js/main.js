// plugns
$(document).ready(function () {
   // slider
   $(".slider-wraper").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      dots: false,
      navText: ["PREV", "NEXT"],
      responsive: {
         0: {
            nav: false,
         },
         700: {
            nav: true,
         },
      },
   });
   // slider 2
   $(".slider-work").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 10,
      responsive: {
         600: {
            items: 2,
         },
      },
   });
   //slider 3
   $(".team-info__slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      dots: true,
   });
});

wow = new WOW(
   {

      offset: 150,

   }
)
wow.init();

new PureCounter();

// Form
$('form').submit(function (e) {
   e.preventDefault();
   this.submit()
   this.reset()
});
