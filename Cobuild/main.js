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
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<i class = "fas fa-angle-left  left_arrow"></i>',
    nextArrow: '<i class = "fas fa-angle-right  right_arrow"></i>',
});

// var iWidth = window.innerWidth;
// if (iWidth < 768) {
//     $('.slider').slick({
//         slidesToShow: 1
//     });
// }


