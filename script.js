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


// FAQ section
  
const minus = document.querySelectorAll(".minus-sign")
const plus = document.querySelectorAll(".plus-sign")
const question = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")

// question.forEach(element => {
//   element.addEventListener("click", () => {
//     answer.forEach(ans => ans.style.display = "none")
//     if (element == question[0]) {
//       const isVisible = answer[0].style.display === "block";
//       if(!isVisible) {
//         answer[0].style.display = "block"
//       } else {
//         answer[0].style.display = "none"
//       }
      
//     } else if (element == question[1]) {
//       const isVisible = answer[1].style.display === "block";
//       answer[1].style.display = isVisible ? "none" : "block";
     
//     } else if (element == question[2]) {
//       const isVisible = answer[2].style.display === "block";
//       answer[2].style.display = isVisible ? "none" : "block";
     
//     } else if (element == question[3]) {
//       const isVisible = answer[3].style.display === "block";
//       answer[3].style.display = isVisible ? "none" : "block";
      
//     } else if (element == question[4]) {
//       const isVisible = answer[4].style.display === "block";
//       answer[4].style.display = isVisible ? "none" : "block";
      
//     } else if (element == question[5]) {
//       const isVisible = answer[5].style.display === "block";
//       answer[5].style.display = isVisible ? "none" : "block";
     
//     } 
//   })
// });

question.forEach((element, index) => {
  element.addEventListener("click", () => {
    const isVisible = answer[index].style.display === "block"; 

    const plusVisible = plus[index].style.display === "none"
    const minVisible = minus[index].style.display === "block"
    
    if (!plusVisible) {  
      plus[index].style.display = "none"
    } else {
      plus[index].style.display = "block"
    }

    if (!minVisible) {
      minus[index].style.display = "block"
    } else {
      minus[index].style.display = "none"
    }   
    answer.forEach(ans => ans.style.display = "none");

    if (!isVisible) {
      answer[index].style.display = "block";
    }   
    
  });
});

