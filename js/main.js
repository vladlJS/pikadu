//Кнопка menu
let menuToggle = document.querySelector('#menu-toggle');
//Переменная, в которую положим меню
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(event) {
    event.preventDefault();//отмена стандартного поведения ссылки
    menu.classList.toggle('visible');//добавление класса кнопке меню при клике
})