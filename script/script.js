  $(document).ready(function(){
    if($('.testimonials-slider').length > 0){
      $('.testimonials-slider').flexslider({
        animation: 'slide'
      });
    }
    if($('.parallax').length > 0){
      $('.parallax').parallax();
    }
    if($('.type-wrap').length > 0){
      $(".type-wrap").typed({
        strings: ["website?", "logo?", "orice alt design?"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: false,
        backDelay: 2000,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 1500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: 'html'
      });
    }

  })