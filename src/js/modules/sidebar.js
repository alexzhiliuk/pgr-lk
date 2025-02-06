$("[data-sidebar-open]").click(function(e) {
    e.preventDefault()
    let id = $(this).attr("data-sidebar-open")
    $(`[data-sidebar=${id}]`).addClass("sidebar-wrapper_open")
})

$(".sidebar__close, .js-sidebar-close").click(function() {
    $(this).parents(".sidebar-wrapper").removeClass("sidebar-wrapper_open")
    
    $(this).parents(".sidebar-wrapper").find("[data-step]").hide()
    $(this).parents(".sidebar-wrapper").find("[data-step=1]").show()
})


// Sidebar Form
$(".form").on("submit", function(e) {
    e.preventDefault()
})

$("[data-next-step]").on("click", function(e) {
    e.preventDefault()
    
    const nextStep = Number($(this).attr("data-next-step"))

    $(this).parents("[data-step]").hide().parents(".form").find(`[data-step='${nextStep}']`).show()
})
$("[data-prev-step]").on("click", function(e) {
    e.preventDefault()
    
    const prevStep = Number($(this).attr("data-prev-step"))

    $(this).parents("[data-step]").hide().parents(".form").find(`[data-step='${prevStep}']`).show()
})

$(window).click(function() {
    $(".sidebar-wrapper").removeClass("sidebar-wrapper_open")
});
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $(".sidebar-wrapper").removeClass("sidebar-wrapper_open")
    }
});
$('.sidebar, [data-sidebar-open]').click(function(event){
    event.stopPropagation();
});
