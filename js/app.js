const burger = document.querySelector('.header__burger-icon'), // Иконка бургер
      navBlock = document.querySelector('.header__navigation-items'); // Блок навигации


burger.addEventListener('click', function() { // Вешаем событие клик на иконку бургера
    
    toggleElem();

        if(!document.querySelector('.overlay')) {
            document.body.insertAdjacentHTML('beforebegin', '<div class="overlay"></div>'); // Добавляем оверлей в DOM
            document.querySelector('.overlay').addEventListener('click', closeNav); // Подвешиваем событие клик на оверлей, чтобы при клике, на оверлей, навигация закрывалась
        } else {
            document.querySelector('.overlay').remove(); // Удаляем оверлей из DOM, если он уже есть
        }

});

function closeNav() { // Функция срабатывающая при клике на оверлей и закрывающая мобильное меню, удаляющая оверлей из DOM
    this.remove();
    toggleElem();
}

function toggleElem() { // Функция добавляющая или удаляющая классы из элементов. Используется для открытия и закрытия мобильного меню
    burger.classList.toggle('header__burger-icon--show');
    burger.classList.toggle('header__burger-icon--fixed');
    navBlock.classList.toggle('header__navigation-items--show');
}