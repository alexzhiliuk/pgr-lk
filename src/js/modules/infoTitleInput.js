$(".info__edit-title").click(function() {
    let $input = $(this).parents(".info__title_editable").find("input")
    $input.prop("disabled", false).focus();
    var len = $input.val().length;
    $input[0].setSelectionRange(len, len);
    $(this).hide()
})
$(".info__title_editable input").on('blur', function() {
    let value = $(this).val().trim()
    if (value === "") { $(this).focus(); return; }

    $(this).prop('disabled', true)
    update(value)
    $(".info__edit-title").show()
});
$(".info__title_editable input").on('keydown', function(e) {
    if (e.key === 'Enter') {
        let value = $(this).val().trim()
        if (value === "") { return }

        $(this).prop('disabled', true)
        update(value)
        $(".info__edit-title").show()
    }
});

function update(value) {
    $(".credit-card_active .credit-card__title").html(value)
}