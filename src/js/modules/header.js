$(".header__burger").click(function (e) {
    $(this).toggleClass("header__burger_active")
    $(".header").toggleClass("header_active")
    $("body, html").toggleClass("lock-clip")
})

$(".header__right").clone().addClass("header__right_mobile").insertAfter(".header__inner")
$(".header__nav").clone().addClass("header__nav_mobile").insertAfter(".header__inner")


$(window).scroll(function(event){

    var st = $(this).scrollTop();
    if (st > 50){
        $(".header").addClass("header_scrolled")
    } else {
        $(".header").removeClass("header_scrolled")
    }

});