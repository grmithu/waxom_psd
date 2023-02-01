// Banner slider
$(function(){
    $('.banner-slider').slick({
        SlidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        fade:true,
        autoplaySpeed: 2000,
    });


    $('.back-top').click(function(){
        $('html, body').animate({scrollTop:0},1500); 
     });    
         
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    
    // $('.service-slider').slick({
    //     SlidesToShow: 4,
    //     SlidesToScroll: 1,
    //     autoplay: true,
    //     arrows: false,
    //     speed: 1500,
    //     autoplaySpeed: 2000,
    // });

    //Venobox video
    $('.venobox').venobox();

    //Count
    $('.counter').counterUp({
        delay: 6,
        time: 1000
    });


    // Blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        speed:1500,
        nextArrow:'.right',
        prevArrow:'.left',
        centerMode:true,
        centerPadding:false,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
                centerMode:false,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            }
        }  
        ]       
    }); 


    //Filter
    var containerEl = document.querySelector('.gal-main');
    var mixer = mixitup(containerEl);

});

