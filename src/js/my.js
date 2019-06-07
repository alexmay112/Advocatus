$(document).ready(function () {
    $('.slider-box').slick({dots: true, arrows: false, autoplay: true});
    $("ul.tabs-caption").on("click", "li:not(.active)", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
        };
    $().UItoTop({
        // easingType: 'easeOutQuart'
    });
});
