let currentSection = 0;
const totalSections = 3;

function scrollUp() {
    if (currentSection > 0) {
        currentSection--;
        scroll();
    }
}

function scrollDown() {
    if (currentSection < totalSections - 1) {
        currentSection++;
        scroll();
    }
}

function scroll() {
    const container = document.querySelector('.container');
    container.style.transform = `translateY(-${currentSection * 100}vh)`;
}

// Soporte táctil
let startY;

document.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = startY - endY;

    if (deltaY > 50) {
        scrollDown();
    } else if (deltaY < -50) {
        scrollUp();
    }
});

// Soporte para clics y teclas de flecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        scrollUp();
    } else if (event.key === 'ArrowDown') {
        scrollDown();
    }
});

document.querySelector('.container').addEventListener('click', (event) => {
    if (event.clientY < window.innerHeight / 2) {
        scrollUp();
    } else {
        scrollDown();
    }
});
