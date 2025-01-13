$("[data-sidebar-open]").click(function() {
    let id = $(this).attr("data-sidebar-open")
    $(`[data-sidebar=${id}]`).addClass("sidebar-wrapper_open")
})

$(".sidebar__close").click(function() {
    $(this).parents(".sidebar-wrapper").removeClass("sidebar-wrapper_open")
})