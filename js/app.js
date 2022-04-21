 $(function ($){
   ("use strict");

   //  preloader
   $("body").loadingModal({
     position: "auto",
     opacity: 1,
     backgroundColor: "#1D2633",
     animation: "wave",
   });

   //  preloader hidden 
   $("body").loadingModal("hide");

  //  video modal
   $(".video-play").modalVideo();

   //  Navbar scroll addclass
   let nav = $(".navbar");
   window.onscroll = function () {
     document.documentElement.scrollTop > 250
       ? nav.addClass("header-scroll")
       : nav.removeClass("header-scroll");
   };

   // hidden navbar
   $(document).on("click", ".navbar-collapse", function (e) {
     if ($(e.target).is("a")) {
       $(this).collapse("hide");
     }
   });

   // totop start 
   $(".toTop").tottTop({
     scrollTop: 0,
   });

  //  active navbar
   $("#navBar").onePageNav({
     currentClass: "active",
     changeHash: false,
     scrollSpeed: 750,
     scrollThreshold: 0.5,
     filter: "",
     easing: "swing",
   });

   // counter 
   $(".counter").counterUp({
     time: 2000,
   });

   //  mixitup
   mixitup(".project");

   //  slick slider 
   $(".main-testimonials").slick({
     dots: true,
     autoplay: true,
     autoplaySpeed: 5000,
     slidesToShow: 2,
     slidesToScroll: 1,
     arrows: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   });

   //  slick slider 
   $(".main-clients").slick({
     dots: false,
     autoplay: true,
     autoplaySpeed: 6000,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
     prevArrow: "<i class='fa-solid fa-angle-left client-left-arrow'></i>",
     nextArrow: "<i class='fa-solid fa-angle-right  client-right-arrow'></i>",
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
     ],
   });

   //   animations
   new WOW().init();
   
 }(jQuery));
