!function ($) {
  // Handler for .ready() called
  $(function(){

    // filmstrip holder, photos, and sides
    var $filmstripHolder = $('.filmstrip-holder'),
      $filmstripHolder2 = $('.filmstrip-holder2'),
      $filmstripPhotos = $('.filmstrip-holder > img'),
      $filmstripPhotos2 = $('.filmstrip-holder2 > img'),
      $filmstripSides = $('.filmstrip-sides'),
      $filmstripSides2 = $('.filmstrip-sides2'),
      filmstripHeight = $filmstripHolder.height(),
      filmstripHeight2 = $filmstripHolder2.height(),
      filmstripSpeed = 20000,
      filmstripEasing = 'linear',
      preloadedImages = [
        {
          src: 'images/elissa-aron-purple2.jpg'
        },
        {
          src: 'images/elissa-aron-jacket1.jpg'
        },
        {
          src: 'images/elissa-aron-orange2.jpg'
        },
        {
          src: 'images/elissa-aron-purple1.jpg'
        },
        {
          src: 'images/elissa-aron-white3.jpg'
        },
        {
          src: 'images/elissa-aron-jacket2.jpg'
        },
        {
          src: 'images/elissa-aron-black2.jpg'
        },
        {
          src: 'images/elissa-aron-white1.jpg'
        },
        {
          src: 'images/elissa-aron-purple3.jpg'
        },
        {
          src: 'images/elissa-aron-yellow2.jpg'
        },
        {
          src: 'images/elissa-aron-blue.jpg'
        }
      ],
      filmstripTimeout;

    $(preloadedImages).each(function() {
      $('<img />')[0] = this;
    });

    $filmstripHolder.css('top', '0');
    $filmstripHolder2.css('top', -filmstripHeight2 );



    /**
     * runFilmstrip() recursively calls jQuery animate on
     * each img in $filmstripPhotos and $filmstripSides;
     * upon completion the animation is reset
     */
    function runFilmstrip() {


        $.each($filmstripPhotos, function ( index, value ) {
          $(value).animate({
            'top': filmstripHeight
          },{
            duration: filmstripSpeed,
            easing: filmstripEasing,
            complete: function() {
              $(this).css({'top': '0'});
            }
          })
        });

        $.each($filmstripPhotos2, function ( index, value ) {
          $(value).animate({
            'top': filmstripHeight2
          },{
            duration: filmstripSpeed,
            easing: filmstripEasing,
            complete: function() {
              $(this).css({'top': '0'});
            }
          })
        });

        $filmstripSides.animate({
          'top': filmstripHeight
        },{
          duration: filmstripSpeed,
          easing: filmstripEasing,
          complete: function() {
            $(this).css({'top': '0'});
          }
        });

        $filmstripSides2.animate({
          'top': filmstripHeight2
        },{
          duration: filmstripSpeed,
          easing: filmstripEasing,
          complete: function() {
            $(this).css({'top': '0'});
          }
        });

        clearTimeout(filmstripTimeout);
        filmstripTimeout = setTimeout(runFilmstrip, filmstripSpeed);
    }
    runFilmstrip();

    //initialization for magnificPopup
    $('.video-clips1').magnificPopup({
      items: [
        {
          src: 'http://www.youtube.com/watch?v=c-AekgYA8Zk',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=01O10YjaVAY',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=gjrHo9wGah0',
          type: 'iframe'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('.video-clips2').magnificPopup({
      items: [
        {
          src: 'http://www.youtube.com/watch?v=01O10YjaVAY',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=gjrHo9wGah0',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=c-AekgYA8Zk',
          type: 'iframe'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('.video-clips3').magnificPopup({
      items: [
        {
          src: 'http://www.youtube.com/watch?v=gjrHo9wGah0',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=c-AekgYA8Zk',
          type: 'iframe'
        },
        {
          src: 'http://www.youtube.com/watch?v=01O10YjaVAY',
          type: 'iframe'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('.photos-headshots').magnificPopup({
      items: [
        {
          src: '/images/elissa-aron-adorable.jpg'
        },
        {
          src: '/images/elissa-aron-black1.jpg',
        },
        {
          src: '/images/elissa-aron-black2.jpg',
        },
        {
          src: '/images/elissa-aron-blue.jpg',
        },
        {
          src: '/images/elissa-aron-flower.jpg',
        },
        {
          src: '/images/elissa-aron-jacket1.jpg',
        },
        {
          src: '/images/elissa-aron-jacket2.jpg',
        },
        {
          src: '/images/elissa-aron-jacket3.jpg',
        },
        {
          src: '/images/elissa-aron-orange1.jpg',
        },
        {
          src: '/images/elissa-aron-orange2.jpg',
        },
        {
          src: '/images/elissa-aron-orange3.jpg',
        },
        // {
        //   src: '/images/elissa-aron-purple1.jpg',
        // },
        {
          src: '/images/elissa-aron-purple2.jpg',
        },
        {
          src: '/images/elissa-aron-purple3.jpg',
        },
        // {
        //   src: '/images/elissa-aron-purple4.jpg',
        // },
        {
          src: '/images/elissa-aron-teal.jpg',
        },
        {
          src: '/images/elissa-aron-white1.jpg',
        },
        {
          src: '/images/elissa-aron-white2.jpg',
        },
        {
          src: '/images/elissa-aron-white3.jpg',
        },
        {
          src: '/images/elissa-aron-white4.jpg',
        },
        {
          src: '/images/elissa-aron-yellow1.jpg',
        },
        // {
        //   src: '/images/elissa-aron-yellow2.jpg',
        // },
        {
          src: '/images/elissa-aron-yellow3.jpg',
        },
        // {
        //   src: '/images/elissa-aron-yellow4.jpg',
        // },
        {
          src: '/images/elissa-aron-yellow5.jpg',
        },
        // {
        //   src: '/images/elissa-aron-yellow6.jpg',
        // },
        {
          src: '/images/elissa-aron-yellow7.jpg',
        },
        {
          src: '/images/elissa-aron-yellow8.jpg',
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
  });

  // on resize reset and then restart the animation
  $( window ).resize(function() {
    $filmstripSides.stop();
    $filmstripSides2.stop();
    $.each($filmstripPhotos, function ( index, value ) {
      $(value).stop();
    });
    $.each($filmstripPhotos2, function ( index, value ) {
      $(value).stop();
    });
    $filmstripHolder = $('.filmstrip-holder');
    $filmstripHolder2 = $('.filmstrip-holder2');

    $filmstripPhotos = $('.filmstrip-holder > img'),
    $filmstripPhotos2 = $('.filmstrip-holder2 > img'),
    $filmstripSides = $('.filmstrip-sides'),
    $filmstripSides2 = $('.filmstrip-sides2'),
    filmstripHeight = $filmstripHolder.height(),
    filmstripHeight2 = $filmstripHolder2.height(),

    $filmstripHolder.removeAttr('style');
    $filmstripHolder2.removeAttr('style');
    $filmstripHolder.css('top', '0');
    $filmstripHolder2.css('top', -filmstripHeight2);
    $filmstripSides.removeAttr('style');
    $filmstripSides2.removeAttr('style');
    $filmstripSides.css({'top': '0'});
    $filmstripSides2.css({'top': '0'});
    $.each($filmstripPhotos, function ( index, value ) {
      $(value)
        .removeAttr('style')
        .css({'top': 0});
    });
    $.each($filmstripPhotos2, function ( index, value ) {
      $(value)
        .removeAttr('style')
        .css({'top': 0});
    });
    clearTimeout(filmstripTimeout);
    runFilmstrip();
  });

}(window.jQuery);
