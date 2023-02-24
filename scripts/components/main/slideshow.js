window.addEventListener("DOMContentLoaded", (event) => {
  const slide1 = document.querySelector('.slide[data-slide-id="1"]');
  const slide2 = document.querySelector('.slide[data-slide-id="2"]');
  const slide3 = document.querySelector('.slide[data-slide-id="3"]');

  const dot1 = document.querySelector('[data-dot-id="1"]');
  const dot2 = document.querySelector('[data-dot-id="2"]');
  const dot3 = document.querySelector('[data-dot-id="3"]');

  const leftArrow = document.querySelector(".slideshow-arrows__left-arrow");
  const rightArrow = document.querySelector(".slideshow-arrows__right-arrow");

  const displaySlide1 = () => {
    [slide2, slide3].forEach((slide) => slide.classList.add("hide"));
    [dot2, dot3].forEach((dot) =>
      dot.classList.remove("slideshow-dots__button-active")
    );
    slide1.classList.remove("hide");
    dot1.classList.add("slideshow-dots__button-active");
  };
  const displaySlide2 = () => {
    [slide1, slide3].forEach((slide) => slide.classList.add("hide"));
    [dot1, dot3].forEach((dot) =>
      dot.classList.remove("slideshow-dots__button-active")
    );
    slide2.classList.remove("hide");
    dot2.classList.add("slideshow-dots__button-active");
  };
  const displaySlide3 = () => {
    [slide1, slide2].forEach((slide) => slide.classList.add("hide"));
    [dot1, dot2].forEach((dot) =>
      dot.classList.remove("slideshow-dots__button-active")
    );
    slide3.classList.remove("hide");
    dot3.classList.add("slideshow-dots__button-active");
  };

  let nextSlide = 1;
  const slidesMover = (toLeft, chosenNextSilde) => () => {
    debugger;
    if (chosenNextSilde) {
      nextSlide = chosenNextSilde;
    } else if (toLeft) {
      switch (nextSlide) {
        case 1:
          nextSlide = 3;
          break;
        case 2:
          nextSlide = 1;
          break;
        case 3:
          nextSlide = 2;
          break;
      }
    } else {
      switch (nextSlide) {
        case 1:
          nextSlide = 2;
          break;
        case 2:
          nextSlide = 3;
          break;
        case 3:
          nextSlide = 1;
          break;
      }
    }
    switch (nextSlide) {
      case 1:
        displaySlide1();
        break;
      case 2:
        displaySlide2();
        break;
      case 3:
        displaySlide3();
        break;
    }
  };

  let timer = setInterval(slidesMover(false, null), 10000);
  const showSlideshow = (toLeft = false, chosenNextSilde = undefined) => {
    clearInterval(timer);
    slidesMover(toLeft, chosenNextSilde)();
    timer = setInterval(slidesMover(), 10000);
  };

  dot1.addEventListener("click", (event) => {
    showSlideshow(false, 1);
  });
  dot2.addEventListener("click", (event) => {
    showSlideshow(false, 2);
  });
  dot3.addEventListener("click", (event) => {
    showSlideshow(false, 3);
  });
  leftArrow.addEventListener("click", (event) => {
    showSlideshow(true, null);
  });
  rightArrow.addEventListener("click", (event) => {
    showSlideshow(false, null);
  });
});
