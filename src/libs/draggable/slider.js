try {

    let mouseDown = false;
    let isDragging = false;
    let startX, scrollLeft;
    const slider = document.querySelector('.draggable');
    
    const startDragging = (e) => {
        mouseDown = true;
        isDragging = false; // сбрасываем флаг перетаскивания
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
    
    const stopDragging = (e) => {
        mouseDown = false;
    }
    
    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }
        
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
        
        if (Math.abs(scroll) > 5) { // если движение больше 5px, считаем, что началось перетаскивание
            isDragging = true;
        }
    }
    
    // Предотвращаем переход по ссылке, если было перетаскивание
    slider.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (isDragging) {
                e.preventDefault(); // отменяем переход по ссылке
            }
        });
    });
    
    // Добавляем обработчики событий
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
    
} catch {

}
