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


// Property Accordeon 
$(".property-accordeon__header").click(function(e) {
    $(this).parents(".property-accordeon").toggleClass("property-accordeon_open")
})

$("[data-table-nested-btn]").click(function(){
    const tr = $(this).parents("tr").first()
    tr.toggleClass("open-nested")

    tr.hasClass("open-nested") ? tr.find("span").html("Свернуть") : tr.find("span").html("Развернуть")
    tr.hasClass("open-nested") ? $(this).find("svg").css("rotate", "180deg") : $(this).find("svg").css("rotate", "")
    
})