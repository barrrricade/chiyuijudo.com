
    $(function(){
      $btnToggle = $('.btn--toggle');
      $submenuTrigger = $('.submenu--trigger');
      $thirdSubmenuTrigger = $('.third-submenu--trigger');


      $btnToggle.on('click', function(e) {
        let $target = $( $(e.currentTarget).attr('data-target') );
        $target.toggleClass('showing');
      });


      $submenuTrigger.on('click', function(e) {
        $(this).toggleClass('active');
      });

      $thirdSubmenuTrigger.on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
      })
    });

    let mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: false,
      speed: 1000,
      slidesPerView: 4,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        560: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 4,
        }
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
