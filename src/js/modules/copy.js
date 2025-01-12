$(".copy").click(function() {
    $(this).find(".tooltip").text("Скопировано")

    window.navigator.clipboard.writeText($(this).attr("data-copy"))

    setTimeout(() => {
        $(this).find(".tooltip").text("Копировать")
    }, 1000)
})