// $(window).scroll(function () {
// 	$("nav").toggleClass("scrolling-active", $(this).scrollTop() > 150);
// });

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 50;
    header.classList.toggle("scrolling-active", windowPosition);
    let logo = document.querySelector("img")
    windowPosition ? logo.src = ("images/logo-dark.png") : logo.src = ("images/logo-light.png");

});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class = "fas fa-angle-left  left_arrow"></i>',
    nextArrow: '<i class = "fas fa-angle-right  right_arrow"></i>',
    mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
        }
    }]

});

// var iWidth = window.innerWidth;
// if (iWidth < 768) {
//     $('.slider').slick({
//         slidesToShow: 1
//     });
// }


