export function getNumberValue(input) {
	return input.value.replace(/\D/g, "")
}

export function addSpaces(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}


$("[data-ruble-input]").on("input", function() {
    let value = addSpaces(getNumberValue(this))

    if (!value) { 
        $(this).val(""); 
        return; 
    }

    $(this).val(addSpaces(getNumberValue(this)) + " ₽")
    this.setSelectionRange(value.length, value.length);
})

$("[data-disable-check]").on("input change", function() {
    const disabledItemId = $(this).attr("data-disable-check")
    const disabledItem = $(`#${disabledItemId}`)
    let isDisabled = false

    $(`[data-disable-check=${disabledItemId}]`).each(function(i, el) {
        
        if (($(el).is('input[type="radio"]') || $(el).is('input[type="checkbox"]')) && !$(el).is(':checked')) {
            isDisabled = true;
            return;
        }

        if ($(el).val().trim() === '') {
            isDisabled = true;
            return;
        }

    })

    disabledItem.prop("disabled", isDisabled)
})