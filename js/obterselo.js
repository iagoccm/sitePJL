document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    const container = document.querySelector('.etapas-container');

    leftArrow.addEventListener('click', function () {
        container.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function () {
        container.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    });
});