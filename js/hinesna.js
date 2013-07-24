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
        mTop = parseInt(mBottom) + 4 + 12, // Hardcoded header padding-bottom.
        bWidth = $('body').outerWidth();

    // Set right margin top.
    if (bWidth > 750) {
      $('.menu--dropdown', $menuMain).css({ marginTop: mTop });
    };

    // Expand dropdown.
    $('> li > a', $menuMain).click(function(e) {
      var $dropdownMenu = $(this).next('.menu--dropdown');

      if ($dropdownMenu.is(':visible')) {
        $('b', this).attr('class', 'ui-arrow-down');
        $dropdownMenu.dropdownHide();
      }
      else {
        $('b', this).attr('class', 'ui-arrow-up');
        $dropdownMenu.dropdownShow();
      }

      e.preventDefault();
    });

    // Close dropdown when clicking outside the menu.
    $('html').click(function() {
      $('.menu--dropdown:visible', $menuMain).fadeOut('fast');
    });
    $('a', $menuMain).click(function(event) {
      event.stopPropagation();
    });

    // Toggle
    $('.menu--toggle').click(function() {
      $(this).next().fadeToggle();
    });
  };

  $.fn.adjustDropdownMargin = function() {
    var leftOffset = Math.round($(this).parent().offset().left),
        totalWidth = leftOffset + $(this).outerWidth(),
        bodyWidth = $('body').outerWidth();

    if (totalWidth > bodyWidth && bWidth > 750) {
      $(this).css({ left: bodyWidth - totalWidth });
    };
  };

  $.fn.dropdownHide = function() {
    var bodyWidth = $('body').outerWidth();

    if (bodyWidth < 750) {
      $(this).slideUp('fast');
    }
    else {
      $(this).fadeOut('fast');
    }
  };

  $.fn.dropdownShow = function() {
    var menu = $(this),
        bodyWidth = $('body').outerWidth();

    if (bodyWidth < 750) {
      menu.slideDown('fast');
    }
    else {
      menu.adjustDropdownMargin();
      $('.menu--main .menu--dropdown:visible').hide();
      menu.fadeIn('fast');
    }
  };
});
