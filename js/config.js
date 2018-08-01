
$( document ).ready(function() {

  $('.burger-menu a').click(function(){
    $('.slide-menu').toggleClass('slide-open');
  });

  //preventing default anchors
  $('.burger-menu a').click(function(e){
    e.preventDefault();
  })

  //code for sticky menu

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();
    var topHeader = $('.test-top-header').outerHeight();
    if(scroll >= topHeader){
      $('.test-menu-header').addClass('sticky');
    }else{
      $('.test-menu-header').removeClass('sticky');
    }
  });
});
