//= require angular
//= require angular-material
//= require angular-aria.min
//= require angular-messages.min
//= require angular-route.min
//= require svg-assets-cache

(function(global, $){
  $('.mobile-menu').click(function(){
    $('.sidebar-menu').toggleClass('show-menu');
    $('.content').toggleClass('darker-content');
  });

  $('.content').click(function(){
    $('.sidebar-menu').removeClass('show-menu');
    $('.content').removeClass('darker-content');
  });
})(window, jQuery);
