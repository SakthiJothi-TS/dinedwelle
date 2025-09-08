
  //AOS
  
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // whether animation should happen only once
  });

//carousel


  let slides = document.querySelectorAll('.banner-slide');
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 4000); // changes every 4 seconds

