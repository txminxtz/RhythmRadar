let slideIndex = 1;
showSlide(slideIndex);

function mudarSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const legendas = document.getElementsByClassName("legenda");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        legendas[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    legendas[slideIndex - 1].style.display = "block";
}
    