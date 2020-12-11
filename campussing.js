$(document).ready(function() {
    $('.carousel').slick({
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: true,
        responsive: [{
            breakpoint: 1900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1230,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
});