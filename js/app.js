//переменные
const BurgerButton = document.querySelector('.burger-menu')
const BurgerSpan = document.querySelector('.menu-span')

const intoLink = document.querySelector ('#startWord')
const gridLink = document.querySelector("#gridLink")
const typographyLink = document.querySelector('#typographyLink')
const UILink = document.querySelector('#UIlink')
const accordions = document.querySelectorAll('.contentAccordion');
const label = document.querySelectorAll('.label');

//кнопки выпадащего списка
const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.selectTitle');
const selectSingle_labels = selectSingle.querySelectorAll('.select-label');

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

UILink.addEventListener('click', () => {
    window.scrollTo({ top: 2700, behavior: 'smooth' })
})

//Добавление функций клика для аккордиона

for (const accordion of accordions) {
        accordion.addEventListener('click', () => {
        accordion.classList.toggle('active')
    })

}

/**
 * Функция при клике убирает класс 'active' для одного из слайда аккордеона
 * @param {number} индекс слайда аккордиона из массива всех слайдов с классом active
 * @returns {number} слайд аккордиона без данного класса
 */
function clearActiveClasses() {
    accordions.forEach((accordion) => {
        accordion.classList.remove('active')
    })
}





// выпадащий список
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// выбор слайда по клику 
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}
