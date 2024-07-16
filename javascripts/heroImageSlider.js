var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");
var carouselContainer = document.querySelector(".image_slider");
let intervalId;

function changeSlide(newIndex = index) {
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  if (newIndex > slides.length - 1) {
    newIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active_dot");
  }

  slides[newIndex].style.display = "block";
  dot[newIndex].classList.add("active_dot");

  index = newIndex;
}

function startCarousel() {
  intervalId = setInterval(function() {
    changeSlide(++index);
  }, 4000);
}

function pauseCarousel() {
  clearInterval(intervalId);
}

dot.forEach((dotElement, dotIndex) => {
  dotElement.addEventListener("click", () => {
    changeSlide(dotIndex);
  });
});

carouselContainer.addEventListener("mouseenter", pauseCarousel);
carouselContainer.addEventListener("mouseleave", startCarousel);

startCarousel();