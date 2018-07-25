$( document ).ready(function() {
   // Same height videoblocks
  $('.mod-vid .content').matchHeight();
    
  // Video 
  $('.js-watchvideo').on( "click", function(event) {
    // stop all video
    $('.mod-vid').removeClass('playing');
    $('video').each(function() {
      $(this).get(0).pause();
    });
    // start this video
    $(this).closest('.mod-vid').addClass('playing');
    $(this).closest('.mod-vid').find('video').get(0).play();
    
    

  });
});