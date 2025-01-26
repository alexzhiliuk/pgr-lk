$(".tooltip-item_absolute").each(function(index, el) {
    $(el).attr("data-tooltip-id", index)
    $(el).find(".tooltip").attr("data-tooltip-id", index)
})

$(".tooltip-item_absolute").on("mouseenter", function() {
    let $tooltip = $(this).find(".tooltip"), 
        left = $(this).offset().left + $(this).outerWidth() / 2,
        top

    if ($tooltip.hasClass("tooltip_top")) {
        top = $(this).offset().top - $tooltip.outerHeight() - 12
    } else {
        top = $(this).offset().top + $(this).outerHeight() + 12
    }
    
    $tooltip.css("opacity", "1").css("top", `${top}px`).css("bottom", `unset`).css("z-index", `3`).css("left", `${left}px`)

    $("body").append($tooltip)
})
$(".tooltip-item_absolute").on("mouseleave", function() {
    let tooltipId = $(this).attr("data-tooltip-id"),
        $tooltip = $(`.tooltip[data-tooltip-id=${tooltipId}]`)

    
    $tooltip.css("opacity", "").css("top", ``).css("bottom", ``).css("z-index", ``).css("left", ``)

    $(this).append($tooltip)
})