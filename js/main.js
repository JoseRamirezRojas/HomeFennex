// change navbar color on scroll on large devices
var nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 250) {
      nav.classList.add('bg-nav');
    } else {
      nav.classList.remove('bg-nav'); 
    }
});

// slightly move banner image with cursor
const img = document.getElementById('fennex-image');
const imgWidth = img.offsetWidth;

img.addEventListener('mousemove', e => {
    const xPos = e.clientX;
    const xPercent = (xPos / window.innerWidth) * 100;
    const xMovement = (xPercent - 50) / 10;

    img.style.transform = `translate(${xMovement}px, 0`;  // movement acording to cursor position
});
img.addEventListener('mouseleave', e => {
    img.style.transform = 'translate(0px, 0px)';
});

// parallax effect
const parallaxBackground = document.querySelector('.parallax');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset; // on scroll background moves slower
    const parallaxPosition = scrollTop * 0.5; 
});

// fading in images from below
var tags = document.querySelectorAll(".tag");
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .15   // percentage of visibility to trigger animation 
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
    }
    else {
      entry.target.classList.remove('visible'); //animates whenever elements return to viewport
    }
  });
}
let observer = new IntersectionObserver(callbacks, options); // checks if element intersect viewport
tags.forEach(element => {
  observer.observe(element);
});

// video carousel for tutorials section
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  });
});

