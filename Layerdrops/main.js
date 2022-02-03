


// $('.slider').slick({
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     prevArrow: '<i class = "fas fa-angle-left  left_arrow"></i>',
//     nextArrow: '<i class = "fas fa-angle-right  right_arrow"></i>',
//     // mobileFirst: true,
//     // responsive: [{
//     //     breakpoint: 1024,
//     //     settings: {
//     //         slidesToShow: 1,
//     //         slidesToScroll: 1,
//     //         centerMode: false
//     //     }
//     // }]

// });

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 90;
    header.classList.toggle("scrolling-active", windowPosition);
});