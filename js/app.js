//переменные
const BurgerButton = document.querySelector('.burger-menu')
const BurgerSpan = document.querySelector('.menu-span')

//работа с кнопкой меню

BurgerButton.addEventListener('click', () => {
    BurgerButton.classList.toggle('active')
    BurgerSpan.classList.toggle('active')
})