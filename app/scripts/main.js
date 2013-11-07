console.log('\'Allo \'Allo!');

!function ($) {
  // Handler for .ready() called
  $(function(){
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
      type: 'image' // this is default type
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
      type: 'image' // this is default type
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
      type: 'image' // this is default type
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
      type: 'image' // this is default type
    });
  });
}(window.jQuery);
