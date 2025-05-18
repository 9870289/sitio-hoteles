
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const prevBtn = document.querySelector('.nav.prev');
  const nextBtn = document.querySelector('.nav.next');
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 10; // ancho + gap 10px

  function updateButtons() {
    prevBtn.disabled = carousel.scrollLeft <= 0;
    nextBtn.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
  }

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });

  carousel.addEventListener('scroll', updateButtons);
  updateButtons();
});