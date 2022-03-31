(function($){
    $(document).ready(function(){
        $('select').niceSelect();

        $('button.menu-toggle').on('click', function(){
            $('.drowdown-menu').toggleClass('active-nav');
        });

        $('.dm-time').on('click', function(){
            $('.drowdown-menu').removeClass('active-nav');
        });


        $('.video-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });

        $('.service-step').on('click', function(){
            $('.service-step').removeClass('active-step');
            $(this).addClass('active-step');
        });

        $('.invest-btn').on('click', function(){
            var index = $(this).index();
            $('.invest-btn').removeClass('active-invest');
            $(this).addClass('active-invest');

            $('.investor-outer').hide();

            $('.investor-outer').eq(index).show();
        });

        $('.accordion-head').on('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active-faq');
        });

        

        $('#select-city').on('change', function(){
            var selectVal = $(this).val();
            var baseurl = window.location.origin;
            var path = window.location.pathname;
            
           window.location.replace(baseurl+'/rekab9/'+selectVal+'.html');
           
        });

        $('.city-filter-item').on('click', function(){
            $('.city-filter-item').removeClass('active-city-filter');
            $(this).addClass('active-city-filter');
        });

        $('.position-filter-item').on('click', function(){
            $('.position-filter-item').removeClass('active-position');
            $(this).addClass('active-position');
        });


        $('.news-slider').slick({
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        AOS.init({
            offset: 0,
          });

          $('.safe-box-outer').on('click', function(){
              var index = $(this).index();
            $('.safe-box-outer').removeClass('active-box');
            $(this).addClass('active-box');
            $('.safe-content').hide();
            $('.safe-content').eq(index).show();
          });

          
        
           
        $('.footer-accor-head').on('click', function(){
            $(this).toggleClass('active-faccor');
            $(this).next().slideToggle();
        });
          

          
        
    });
})(jQuery);