"use strict";

// slider.style.transform = 'sacle(0.1)';
// slider.style.overflow = 'visible';

const slider = function () {
  const slides = document.querySelectorAll(".slide");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  //Functions

  //Creating dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  //Set intial State of Slides

  //Next slide
  const nextSlide = function () {
    curSlide = (curSlide + 1) % maxSlide;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();
  //Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
