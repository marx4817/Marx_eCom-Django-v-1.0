let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

setInterval(showSlides, 5000);