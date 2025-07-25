document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const elementInView = (el, offset = 100) =>
    el.getBoundingClientRect().top <= window.innerHeight - offset;

  const showElement = (el, index) => {
    setTimeout(() => el.classList.add("visible"), index * 120);
  };

  const animateOnScroll = () => {
    scrollElements.forEach((el, i) => {
      if (!el.classList.contains("visible") && elementInView(el)) {
        showElement(el, i);
      }
    });
  };

  const scrollLoop = () => {
    animateOnScroll();
    requestAnimationFrame(scrollLoop);
  };

  requestAnimationFrame(scrollLoop);

  const scrollBtn = document.querySelector(".scroll-down-btn");
  const bottom = document.querySelector("#bottom");

  if (scrollBtn && bottom) {
    scrollBtn.addEventListener("click", () =>
      bottom.scrollIntoView({ behavior: "smooth" })
    );
  }
});
