function scrollToActive(sliderSelector, activeTabSelector) {
    const $slider = $(sliderSelector);
    const $activeItem = $slider.find(activeTabSelector);

    if ($activeItem.length) {
      const scrollLeft = $slider.scrollLeft();
      const activeOffset = $activeItem.position().left;
      const sliderWidth = $slider.width();
      const activeWidth = $activeItem.outerWidth(true);

      const targetScroll = scrollLeft + activeOffset - (sliderWidth / 2) + (activeWidth / 2);

      $slider.animate({ scrollLeft: targetScroll }, 500); // Анимация скролла
    }
}
scrollToActive(".details__tabs", ".details__tab_active")


// Payments 
$(".payment__header").click(function(e) {
    $(this).parents(".payment").toggleClass("payment_open")
})