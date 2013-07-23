$(document).ready(function(){
  $('html').addClass('js');

  $('.form--search input[type=submit]').click(function(ev) {
    $(this).parent('form').find('input[type=text]').fadeToggle();
    ev.preventDefault();
  });
});
