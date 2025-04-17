const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 0;
const visibleSlides = 5;
const slideWidth = slides[0].getBoundingClientRect().width;

const updateSliderPosition = () => {
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSliderPosition();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Optional: Responsive resizing
window.addEventListener("resize", () => {
  updateSliderPosition();
});