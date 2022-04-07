const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlideIdx = 0;

leftBtn.addEventListener('click', () => {
    activeSlideIdx--;

    if (activeSlideIdx < 0) {
        activeSlideIdx = slides.length - 1;
    }
    update();
});

rightBtn.addEventListener('click', () => {
    activeSlideIdx++;
    
    if (activeSlideIdx === slides.length) {
        activeSlideIdx = 0;
    }
    update();
});

setBgToBody();

function update() {
    setBgToBody();
    changeActiveImage();
}

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlideIdx].style.backgroundImage;
}

function changeActiveImage() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlideIdx].classList.add('active');
}

