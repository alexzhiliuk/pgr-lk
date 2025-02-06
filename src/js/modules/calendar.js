function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


// Функция для заполнения календаря
function fillCalendar(year, month, isInitial=false) {
    const calendarHeader = $('.calendar__header');
    const calendarBody = $('.calendar__body');
    const calendarOutput = calendarBody.parents(".input").find("input[type='text']")
    const selectedValue = calendarBody.parents(".input").find("input[type='date']").val()
    
    calendarBody.attr("data-selected", selectedValue)
    calendarOutput.val(selectedValue).prop("readonly", true)
    calendarBody.empty(); // Очищаем календарь

    if (isInitial && selectedValue) {
        let [selectedYear, selectedMonth, selectedDay] = selectedValue.split("-")
        year = Number(selectedYear)
        month = Number(selectedMonth) - 1
    }

    const firstDay = new Date(year, month, 1); // Первый день месяца
    const lastDay = new Date(year, month + 1, 0); // Последний день месяца
    const daysInMonth = lastDay.getDate(); // Количество дней в месяце
    const startDayOfWeek = firstDay.getDay() || 7; // День недели первого дня (1-7, Пн-Вс)

    // Определяем количество дней предыдущего месяца
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    let prevMonthDay = prevMonthLastDay - (startDayOfWeek - 2); // Начинаем с нужного дня предыдущего месяца

    let day = 1; // Счетчик дней текущего месяца
    let nextMonthDay = 1; // Счетчик дней следующего месяца
    let html = ''; // HTML для строк календаря

    // Заполняем календарь (6 строк по 7 дней)
    for (let i = 0; i < 6; i++) {
        html += '<div class="calendar__row">';

        for (let j = 1; j <= 7; j++) {
            if (i === 0 && j < startDayOfWeek) {
                // Дни предыдущего месяца
                const prevMonthDate = new Date(year, month - 1, prevMonthDay);
                const prevMonthDateString = formatDate(prevMonthDate);
                html += `<div class="calendar__day ${j == 6 || j == 7 ? 'calendar__weekend' : ''} ${prevMonthDateString === selectedValue ? 'calendar__day_selected' : ''} ${formatDate(new Date()) === prevMonthDateString ? 'calendar__day_today' : ''} calendar__day_out-of-month" data-date="${prevMonthDateString}">${prevMonthDay}</div>`;
                prevMonthDay++;
            } else if (day > daysInMonth) {
                // Дни следующего месяца
                const nextMonthDate = new Date(year, month + 1, nextMonthDay);
                const nextMonthDateString = formatDate(nextMonthDate);
                html += `<div class="calendar__day ${j == 6 || j == 7 ? 'calendar__weekend' : ''} ${nextMonthDateString === selectedValue ? 'calendar__day_selected' : ''} ${formatDate(new Date()) === nextMonthDateString ? 'calendar__day_today' : ''} calendar__day_out-of-month" data-date="${nextMonthDateString}">${nextMonthDay}</div>`;
                nextMonthDay++;
            } else {
                // Дни текущего месяца
                const currentDate = new Date(year, month, day);
                const currentDateString = formatDate(currentDate);
                html += `<div class="calendar__day ${j == 6 || j == 7 ? 'calendar__weekend' : ''} ${currentDateString === selectedValue ? 'calendar__day_selected' : ''} ${formatDate(new Date()) === currentDateString ? 'calendar__day_today' : ''}" data-date="${currentDateString}">${day}</div>`;
                day++;
            }
        }

        html += '</div>';
    }

    updateHeader(calendarHeader, year, month)
    updateArrows(calendarHeader, year, month)
    calendarBody.html(html); // Вставляем HTML в таблицу

    $(".calendar__day").click(function() {
        const value = $(this).attr("data-date")
        $(".calendar__day").removeClass("calendar__day_selected")
        $(this).addClass("calendar__day_selected").parents(".input").find("input[type='date']").val(value)
        $(this).parents(".input").find("input[type='text']").val(value)

        if ($(this).hasClass("calendar__day_out-of-month")) {
            const [year, month, day] = value.split("-")
            fillCalendar(Number(year), Number(month) - 1)
        }
    })
    
}

// Обновляем месяц и год
function updateHeader(calendarHeader, year, month) {
    const monthsRu = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    calendarHeader.attr("data-month", `${month}-${year}`)
    calendarHeader.find(".calendar__month").text(monthsRu[month]).append('<span class="calendar__year"> ' + year  + '</span>')
}

// Обновляем данные в стрелках
function updateArrows(calendarHeader, year, month) {
    
    const prevMonth = new Date(year, month, 0)
    const nextMonth = new Date(year, month + 1, 1)
    
    calendarHeader.find(".calendar__arrow_prev").attr("data-month", `${prevMonth.getMonth()}-${prevMonth.getFullYear()}`)
    calendarHeader.find(".calendar__arrow_next").attr("data-month", `${nextMonth.getMonth()}-${nextMonth.getFullYear()}`)
}

// Пример вызова функции для текущего месяца
const currentDate = new Date();
fillCalendar(currentDate.getFullYear(), currentDate.getMonth());

$(".calendar__arrow").click(function() {
    const [month, year] = $(this).attr("data-month").split("-")
    fillCalendar(Number(year), Number(month))
})

$(".input_date input[type='text']").on("keyup", function(e) {
    if (e.key === "Enter") { 
        $(".calendar").removeClass("active")
    }
})

$(".input_date .input__icon").click(function() {
    $(this).parents(".input").find(".calendar").toggleClass("active")

    const currentDate = new Date();
    fillCalendar(currentDate.getFullYear(), currentDate.getMonth(), true);
})

$(window).click(function() {
    $(".calendar").removeClass("active")
});
$('.calendar, .input_date input, .input_date .input__icon').click(function(event){
    event.stopPropagation();
});