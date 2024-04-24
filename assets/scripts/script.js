/*function Gallery() {
    if (position < pictures.length - 1) {
        position++
        pictures[position].classList.add("gallery-img"); //vložení nové třídy do elementu
        pictures[position-1].classList.remove("gallery-img"); //odstranění třídy "gallery-img" z obrázku
        pictures[0].src = "assets/images/img"+ position +".png"; //cesta k novému
    } else {
        position = 1;
        pictures[1].classList.add("gallery-img")
        pictures[pictures.length-1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/img1.png"; // první obrázek
    }
}

function prevImage () {
    if (position === 1) {
        position = pictures.length - 1;
        pictures[1].classList.remove("gallery-img"); //vložení nové třídy do elementu
        pictures[pictures.length - 1].classList.add("gallery-img"); //odstranění třídy "gallery-img" z obrázku
        pictures[0].src = "assets/images/img"+ (pictures.length - 1) +".png"; //cesta k novému
    } else {
        position--;
        pictures[position].classList.add("gallery-img")
        pictures[position + 1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/img"+ position +".png"; // první obrázek
    }
}

 */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Gallery");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}