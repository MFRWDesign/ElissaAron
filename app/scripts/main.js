!function ($) {
  // Handler for .ready() called
  $(function(){

    // filmstrip holder, photos, and sides
    var $filmstripHolder = $('.filmstrip-holder'),
      $filmstripHolder2 = $('.filmstrip-holder2'),
      $filmstripPhotos = $filmstripHolder.find('img'),
      $filmstripSides = $('.filmstrip-sides'),
      filmstripHeight = $filmstripHolder.height(),
      filmstripSpeed = 10000,
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

    $filmstripHolder2.css('top', -filmstripHeight);


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
              $(this).css({'top': 0});
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

        clearTimeout(filmstripTimeout);
        filmstripTimeout = setTimeout(runFilmstrip, filmstripSpeed);
    }
    runFilmstrip();

    $(window).on('resize', function(){
      clearTimeout(filmstripTimeout);
      filmstripTimeout = setTimeout(runFilmstrip, filmstripSpeed);
    });

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
        {
          src: '/images/elissa-aron-purple1.jpg',
        },
        {
          src: '/images/elissa-aron-purple2.jpg',
        },
        {
          src: '/images/elissa-aron-purple3.jpg',
        },
        {
          src: '/images/elissa-aron-purple4.jpg',
        },
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
        {
          src: '/images/elissa-aron-yellow2.jpg',
        },
        {
          src: '/images/elissa-aron-yellow3.jpg',
        },
        {
          src: '/images/elissa-aron-yellow4.jpg',
        },
        {
          src: '/images/elissa-aron-yellow5.jpg',
        },
        {
          src: '/images/elissa-aron-yellow6.jpg',
        },
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
}(window.jQuery);
