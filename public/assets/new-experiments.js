
/* ================================= RESPONSIVE NAVIGATION =================================*/

    $('.handle').on('click', function(event) {
      $('nav ul').toggleClass('showing');
    });

    $(document).ready(function() {
        
      $('.set > a').on('click', function() {
        var panelSymbol = $(this).find('i');
        if (panelSymbol.hasClass('fa-plus')) {
          $(panelSymbol).removeClass('fa-plus').addClass('fa-minus');
        } else {
          $(panelSymbol).removeClass('fa-minus').addClass('fa-plus');
        }

        $(this).toggleClass('active').next().toggle(200);
      });

    });
