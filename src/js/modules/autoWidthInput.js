// Отслеживание ввода текста
$('.auto-width-input').on('input', function() {
    $(this).width(($(this).val().length) + 'ch'); 
});

// Инициализация ширины при загрузке страницы
$('.auto-width-input').each(function(i, el) {
    $(el).width(($(el).val().length) + 'ch'); 
})