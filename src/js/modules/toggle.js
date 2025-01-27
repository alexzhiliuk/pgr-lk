function toggleItems(i, el) {
    let toggleItemId = $(this).attr("data-check-toggle")
    if ($(el).is(":checked")) {
        $(`#${toggleItemId}`).show()
    } else {
        $(`#${toggleItemId}`).hide()
    }
}
$("[data-check-toggle]").each(toggleItems)

function toggleItemsByClass(i, el) {
    let toggleItemClass = $(this).attr("data-check-class-toggle")
    if ($(el).is(":checked")) {
        $(`.${toggleItemClass}`).show()
    } else {
        $(`.${toggleItemClass}`).hide()
    }
}
$("[data-check-class-toggle]").each(toggleItemsByClass)

function toggleAnyItems() {
    let toggleItems = []
    $("[data-check-any-toggle]").each(function() {
        let toggleItemId = $(this).attr("data-check-any-toggle")
        toggleItems.push(toggleItemId)
    })
    toggleItems = new Set(toggleItems)
    
    for (let toggleItem of toggleItems) {
        if ($(`[data-check-any-toggle='${toggleItem}']:checked`).length != 0 && $("[data-check-any-toggle]").is(":visible")) {
            $(`#${toggleItem}`).show()
        } else {
            $(`#${toggleItem}`).hide()
        }
    }
}
toggleAnyItems()

$("[type='radio'], [type='checkbox']").change(function() {
    $("[data-check-toggle]").each(toggleItems)
    $("[data-check-class-toggle]").each(toggleItemsByClass)
    toggleAnyItems()
})
