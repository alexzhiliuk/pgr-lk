import Swiper, {Autoplay, Navigation, Pagination, Manipulation} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Manipulation]);

const swiperMortgages = new Swiper('#mortgagesSlider', {    
    slidesPerView: "auto",
    spaceBetween: 24,
    
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
    },

    navigation: {
        prevEl: "#mortgagesSliderPrev",
        nextEl: "#mortgagesSliderNext"
    },

});
