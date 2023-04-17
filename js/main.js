// change navbar color on scroll
var nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 70) {
      nav.classList.add('bg-gradient');
    } else {
      nav.classList.remove('bg-gradient');
    }
});

// slightly move banner image w cursor
const img = document.getElementById('fennex-image');
const imgWidth = img.offsetWidth;
const imgHeight = img.offsetHeight;

img.addEventListener('mousemove', e => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const xPercent = (xPos / window.innerWidth) * 100;
    const yPercent = (yPos / window.innerHeight) * 100;
    const xMovement = (xPercent - 50) / 10;
    const yMovement = (yPercent - 50) / 10;

    img.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
});
img.addEventListener('mouseleave', e => {
    img.style.transform = 'translate(0px, 0px)';
});

// parallax effect
const parallaxBackground = document.querySelector('.parallax');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const parallaxPosition = scrollTop * 0.5;
});








