import Swiper, {Autoplay, Navigation, Pagination, Manipulation} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Manipulation]);

const swiperNotifications = new Swiper('#notificationsSlider', {    
    slidesPerView: "auto",
    spaceBetween: 12,
    
    breakpoints: {
        576: {
            
        }
    },

    navigation: {
        prevEl: "#notificationsSliderPrev",
        nextEl: "#notificationsSliderNext"
    },

});

swiperNotifications.on('slideChange', function(){
    if (swiperNotifications.isEnd) {
        $(swiperNotifications.el).parents(".slider").removeClass("slider_start")
        $(swiperNotifications.el).parents(".slider").addClass("slider_end")
        return
    }
    if (swiperNotifications.isBeginning) {
        $(swiperNotifications.el).parents(".slider").removeClass("slider_end")
        $(swiperNotifications.el).parents(".slider").addClass("slider_start")
        return
    }
    $(swiperNotifications.el).parents(".slider").removeClass("slider_start")
    $(swiperNotifications.el).parents(".slider").removeClass("slider_end")
});

$(".notification__close").click(function() {
    let container = $(this).parents(".notifications").parents(".container")
    let index = $(this).parents(".swiper-slide").index()
    swiperNotifications.removeSlide(index)

    if (!swiperNotifications.allowSlideNext) { $(swiperNotifications.el).parents(".slider").addClass("slider_end") }
    if (!swiperNotifications.allowSlidePrev) { $(swiperNotifications.el).parents(".slider").addClass("slider_start") }
    if (swiperNotifications.slides.length === 0) {
        container.remove()
    }
    // $(this).parents(".swiper-slide").remove()
})