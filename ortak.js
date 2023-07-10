let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');

let currentImageIndex = 0;

prevButton.addEventListener('click', function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener('click', function() {
  currentImageIndex++;
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  let translateXValue = -currentImageIndex * 100;
  slider.style.transform = `translateX(${translateXValue}%)`;
}

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
