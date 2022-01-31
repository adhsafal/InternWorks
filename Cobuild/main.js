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