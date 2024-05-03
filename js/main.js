
document.addEventListener('DOMContentLoaded', function () {
    var showMoreButton = document.querySelector('.products__btn');
    var showMoreItems = document.querySelectorAll('.products__card');

    
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
    // fixedWidth: "250px",
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

// -----------video------------
let video = document.getElementById('video-frame');

video.controls = false;
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    video.controls = true;
});