(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Calcula mis años según el año
  $('#edad').html(new Date().getFullYear() - 1990 + " años")

  //Muestra el certificado según el ID
  $('a').on('mouseover', function(){
    switch (this.getAttribute('id')){
      case 'desarrollo':
        $(".titulo").append("<img src='img/desarrolloweb.jpg' />").hide().fadeIn(300);
        break;

      case 'cms':
        $(".titulo").append("<img src='img/cms.jpg' />").hide().fadeIn(300);;
        break;
    }
  });

  $('a').on('mouseleave', function(){
    $('.titulo img').remove();
  });

})(jQuery); // End of use strict
