console.log('123')
// "use strict";$(document).ready(function(){$(".hamburger-menu").on("click",function(e){e.preventDefault(),$(".navbar-nav").toggleClass("active")})});
$(document).ready(function() {
    $('.showmenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
    });
   });