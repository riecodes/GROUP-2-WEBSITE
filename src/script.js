// HERO SLIDER
const sliderContainer = document.querySelector('.slider-container');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

let currentIndex = 0;
const slides = Array.from(sliderContainer.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const moveToSlide = (targetIndex) => {
  const position = -slideWidth * targetIndex;
  sliderContainer.style.transform = `translateX(${position}px)`;
  currentIndex = targetIndex;
};

const nextSlideHandler = () => {
  if (currentIndex === slides.length - 1) {
    moveToSlide(0);
  } else {
    moveToSlide(currentIndex + 1);
  }
  resetInterval();
};

const prevSlideHandler = () => {
  if (currentIndex === 0) {
    moveToSlide(slides.length - 1);
  } else {
    moveToSlide(currentIndex - 1);
  }
  resetInterval();
};

nextSlide.addEventListener('click', nextSlideHandler);
prevSlide.addEventListener('click', prevSlideHandler);

let intervalId = setInterval(nextSlideHandler, 9000);

const resetInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlideHandler, 9000);
};
//HERO SLIDER

//NAV BAR
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});

//NAV BAR

// PRODUCTS SWAPPING
const boxes = document.querySelectorAll('.box');
const desktops = document.querySelectorAll('.desktops');
const bigBoxes = document.querySelectorAll('.big-box');

boxes.forEach((box) => {
  const originalImage = box.querySelector('.og-img');
  const hoverImage = box.querySelector('.hv-img');

  box.addEventListener('mouseenter', () => {
    originalImage.style.opacity = 0;
    hoverImage.style.opacity = 1;
  });

  box.addEventListener('mouseleave', () => {
    originalImage.style.opacity = 1;
    hoverImage.style.opacity = 0;
  });
});
desktops.forEach((desktop) => {
  const originalImage = desktop.querySelector('.og-img');
  const hoverImage = desktop.querySelector('.hv-img');

  desktop.addEventListener('mouseenter', () => {
    originalImage.style.opacity = 0;
    hoverImage.style.opacity = 1;
  });

  desktop.addEventListener('mouseleave', () => {
    originalImage.style.opacity = 1;
    hoverImage.style.opacity = 0;
  });
});
bigBoxes.forEach((bigBox) => {
  const originalImage = bigBox.querySelector('.og-img');
  const hoverImage = bigBox.querySelector('.hv-img');

  bigBox.addEventListener('mouseenter', () => {
    originalImage.style.opacity = 0;
    hoverImage.style.opacity = 1;
  });

  bigBox.addEventListener('mouseleave', () => {
    originalImage.style.opacity = 1;
    hoverImage.style.opacity = 0;
  });
});
// PRODUCTS SWAPPING