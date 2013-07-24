$(document).ready(function(){
  $('html').addClass('js');

  $('.form--search input[type=submit]').click(function(ev) {
    $(this).parent('form').find('input[type=text]').fadeToggle();
    ev.preventDefault();
  });

  // Dropdown menu.
  if ($('.nav--main').length > 0) {
    var $menuMain = $('.menu--main'),
        mBottom = $('.nav--main').css('margin-bottom').replace('px', ''),
        mTop = parseInt(mBottom) + 4 + 12; // Hardcoded header padding-bottom.

    $('.menu--dropdown', $menuMain).css({ marginTop: mTop });

    $('a', $menuMain).click(function(event) {
      event.stopPropagation();
    });

    $('> li > a', $menuMain).click(function(e) {
      var $dropdownMenu = $(this).next('.menu--dropdown');

      if ($dropdownMenu.is(':visible')) {
        $('b', this).attr('class', 'ui-arrow-down');
        $dropdownMenu.fadeOut('fast');
      }
      else {
        $('b', this).attr('class', 'ui-arrow-up');
        $dropdownMenu.adjustDropdownMargin();
        $('.menu--dropdown:visible', $menuMain).hide();
        $dropdownMenu.fadeIn('fast');
      }

      e.preventDefault();
    });

    $('html').click(function() {
      $('.menu--dropdown:visible', $menuMain).fadeOut('fast');
    });
  };

  $.fn.adjustDropdownMargin = function() {
    var leftOffset = Math.round($(this).parent().offset().left),
        totalWidth = leftOffset + $(this).outerWidth(),
        bodyWidth = $('body').outerWidth();

    if (totalWidth > bodyWidth) {
      $(this).css({ left: bodyWidth - totalWidth });
    };
  };
});
