  $(document).ready(function(){
    $('.portfolio-content').each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        var link = $(this).attr('rel');
        $('.sidebar').removeClass('active-sidebar');
        $('.custom-popup').fadeIn();
        $('html').addClass('shown-sidebar');
        $('div#' + link).addClass('active-sidebar');
      });
    });
    $('.custom-popup, .close-popup').click(function(e){
      e.preventDefault();
      $('.custom-popup').fadeOut();
      $('html').removeClass('shown-sidebar');
        $('.sidebar').removeClass('active-sidebar');
    })
    if($('.testimonials-slider').length > 0){
      $('.testimonials-slider').flexslider({
        animation: 'slide'
      });
    }
    if($('.parallax').length > 0){
      $('.parallax').parallax();
    }


  })