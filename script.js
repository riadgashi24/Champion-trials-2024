// Lëvizja e slider-it
let currentSlide = 0;
const slidesToShow = 3; // Numri i destinacioneve që do të shfaqen në të njëjtën kohë
const slideInterval = 3000; // Intervali në milisekonda për lëvizjen e slider-it

function moveSlide() {
  const slides = document.querySelectorAll('.destination-card');
  const totalSlides = slides.length;

  // Llogarit numrin e slide-ve që duhet të lëvizin
  currentSlide = (currentSlide + 1) % Math.ceil(totalSlides / slidesToShow);

  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
}

// Lëviz automatikisht çdo 3 sekonda
setInterval(moveSlide, slideInterval);

// Event listeners për butonat e slider-it
document.querySelector('.next-button').addEventListener('click', moveSlide);

document.querySelector('.prev-button').addEventListener('click', () => {
  const slides = document.querySelectorAll('.destination-card');
  const totalSlides = slides.length;

  // Llogarit numrin e slide-ve që duhet të lëvizin mbrapa
  currentSlide = (currentSlide - 1 + Math.ceil(totalSlides / slidesToShow)) % Math.ceil(totalSlides / slidesToShow);
  
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
});

