let slideIndex = 1;
visaSlides(slideIndex);

function plusSlides(n) {
  visaSlides(slideIndex += n);
}

function visaSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";  
}


setInterval(function() {
  plusSlides(1);
}, 5000);
