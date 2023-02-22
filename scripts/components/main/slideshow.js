window.addEventListener("DOMContentLoaded", (event) => {
  let current_slide = 1;
  const slide1 = document.querySelector('.slide[data-slide-id="1"]');
  const slide2 = document.querySelector('.slide[data-slide-id="2"]');
  const slide3 = document.querySelector('.slide[data-slide-id="3"]');


  const nextSlide = () => {
    switch (current_slide) {
      case 1:
        slide1.classList.add("hide");
        slide2.classList.remove("hide");
        current_slide = 2;
        break;
      case 2:
        slide2.classList.add("hide");
        slide3.classList.remove("hide");
        current_slide = 3;
        break;
      case 3:
        slide3.classList.add("hide");
        slide1.classList.remove("hide");
        current_slide = 1;
        break;
    }
  };

  setInterval(nextSlide, 10000);
});
