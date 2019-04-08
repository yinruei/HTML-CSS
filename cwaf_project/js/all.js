$(document).ready(function() {
  
  $(".navbar-toggler").on('click', function(e) {
    e.stopPropagation();
    $(".menu").toggleClass('menu-active');
  })
  $('.menu a').click(function(e) {
    e.stopPropagation();
    $(".menu").addClass('menu-active');
  });
  $('body').on('click',function(e){
    e.stopPropagation();
    $(".menu").removeClass('menu-active');
  });
});