$(document).ready(function() {
  
  $(".navbar-toggler").on('click', function(e) {
    e.stopPropagation();
    $(".menu").toggleClass('menu-active');
  })
  $('body').on('click',function(){
    $(".menu").removeClass('menu-active');
  });
});