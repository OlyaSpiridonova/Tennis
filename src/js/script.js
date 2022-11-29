window.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.prices__slaider-photo'),
        prev = document.querySelector('.prices__arrows-prew'),
        next = document.querySelector('.prices__arrows-next');

    let slideIndex = 1;

    showSlides(slideIndex);
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlaides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlaides(-1);
    });
    next.addEventListener('click', () => {
        plusSlaides(1);
    });

});