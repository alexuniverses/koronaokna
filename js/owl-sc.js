var $homeSlider = $(".home-slider");

$(window).resize(function () {
    showHomeSlider();
});

function showHomeSlider() {
    if ($homeSlider.data("owlCarousel") !== "undefined") {
        if (window.matchMedia("(max-width: 768px)").matches) {
            initialHomeSlider();
        } else {
            destroyHomeSlider();
        }
    }
}
showHomeSlider();

function initialHomeSlider() {
    $homeSlider.addClass("owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000
    });
}

function destroyHomeSlider() {
    $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}