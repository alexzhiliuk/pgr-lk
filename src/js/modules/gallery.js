$('.gallery-img').magnificPopup({
    type: 'image', // Тип контента
    gallery: {
      enabled: true // Выключить галерею
    },
    titleSrc: 'alt' // Подпись будет взята из атрибута alt
  });