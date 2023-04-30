//переменные
const BurgerButton = document.querySelector('.burger-menu')
const BurgerSpan = document.querySelector('.menu-span')

const intoLink = document.querySelector ('#startWord')
const gridLink = document.querySelector("#gridLink")
const typographyLink = document.querySelector('#typographyLink')
const UILink = document.querySelector('#UIlink')


//работа с кнопкой меню (добавление класса active для двух элиментов, которые будут менять своё положение и цвет)

BurgerButton.addEventListener('click', () => {
    BurgerButton.classList.toggle('active')
    BurgerSpan.classList.toggle('active')
})

//якоря 
//при клике на одну из ссылок sidebar страница плавно переместить к началу соответствующего блока

intoLink.addEventListener('click', () => {
    window.scrollTo({ top: 40, behavior: 'smooth' });
})

gridLink.addEventListener('click', () => {
    window.scrollTo({ top: 180, behavior: 'smooth' });
})

typographyLink.addEventListener('click', () => {
    window.scrollTo({ top: 2500, behavior: 'smooth' })
})

UI.addEventListener('click', () => {
    window.scrollTo({ top: 2700, behavior: 'smooth' })
})
