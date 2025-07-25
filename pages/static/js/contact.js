// script.js

document.addEventListener("DOMContentLoaded", () => {

  // 1. Scroll-triggered animations
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight - offset;
  };

  const displayScrollElement = el => {
    el.style.opacity = 1;
    el.classList.add('visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // Run on load too

  // 2. Form validation and alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = this.querySelector("input[type='text']").value.trim();
      const email = this.querySelector("input[type='email']").value.trim();
      const message = this.querySelector("textarea").value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.length < 2) {
        alert("Please enter a valid name (at least 2 characters).");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (message.length < 10) {
        alert("Message should be at least 10 characters.");
        return;
      }

      alert("Form submitted successfully!");
      this.reset();
    });
  }

  // 3. Back to Top Button
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. Hover Effects & Parallax
  document.querySelectorAll(".bubble-right, .bubble-left").forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const x = (e.offsetX / el.offsetWidth - 0.5) * 10;
      const y = (e.offsetY / el.offsetHeight - 0.5) * 10;
      el.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

});
