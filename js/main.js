// ---------------------mobile menu

let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.header__menu-mobile');
let menuLinks = document.querySelectorAll('.item-link');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMenu();
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ----------------------end mobile menu
document.addEventListener('DOMContentLoaded', function () {
    var showMoreButton = document.querySelector('.products__btn');
    var showMoreItems = document.querySelectorAll('.products__card');

    // Показываем изначально 6 элементов
    var initiallyVisibleItems = Array.from(showMoreItems).slice(0, 6);
    initiallyVisibleItems.forEach(function (item) {
        item.style.display = 'block';
    });

    showMoreButton.addEventListener('click', function (event) {
        event.preventDefault();
        var hiddenItems = Array.from(showMoreItems).filter(function (item) {
            return window.getComputedStyle(item).display === 'none';
        });
        var i;
        for (i = 0; i < 3 && i < hiddenItems.length; i++) {
            fadeIn(hiddenItems[i]);
        }
        if (hiddenItems.length < 1) {
            showMoreButton.style.display = 'none';
        }
    });

    function fadeIn(element) {
        var opacity = 0;
        element.style.opacity = opacity;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            opacity += 0.1;
            element.style.opacity = opacity;
        }, 80);
    }
});


// --------SPLIDE SLIDER-----------

const splide = new Splide('#slider__wrap', {
    type: 'loop',
    perPage: 3,
    pagination: true,
    perMove: 1,
    gap: '30px',
    breakpoints: {
        768: {
            perPage: 2,

        },
        375: {
            perPage: 1,

        },
    }
});

splide.mount();