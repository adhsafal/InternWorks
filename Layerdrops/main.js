$('.slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fal fa-arrow-left  left_arrow"></i>',
    nextArrow: '<i class = "fal fa-arrow-right  right_arrow"></i>',



    // mobileFirst: true,
    // responsive: [{
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         centerMode: false
    //     }
    // }]

});

// $('.places_slider').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     centerMode: true,
//     autoplaySpeed: 2000,
//     prevArrow: false,
//     nextArrow: false,
//     dots: true,
// });

$('.handpicked_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
});


$('.envato_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 90;
    let windowPos = window.scrollY < 90;
    header.classList.toggle("scrolling-active", windowPosition);
    header.classList.toggle("scrolling-dactive", windowPos);
});


mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.transition = "all 2s";
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none"
        mybutton.style.transition = "all 2s";

    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ----------------Counter--------------

