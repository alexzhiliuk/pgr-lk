$(".copy").click(function() {
    let tooltip;

    if ($(this).hasClass("tooltip-item_absolute")) {
        let tooltipId = $(this).attr("data-tooltip-id")
        tooltip = $('.tooltip[data-tooltip-id=' + tooltipId +  ']')
    } else {
        tooltip = $(this).find(".tooltip")
    }

    tooltip.text("Скопировано")
    window.navigator.clipboard.writeText($(this).attr("data-copy"))
    setTimeout(() => {
        tooltip.text("Копировать")
    }, 1000)

    
})