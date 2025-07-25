document.addEventListener("DOMContentLoaded", () => {
  const welcomeAr = document.querySelector('.welcome-ar');
  const sawaeidAr = document.querySelector('.sawaeid-ar');
  const welcomeEn = document.querySelector('.welcome-en');
  const sawaeidEn = document.querySelector('.sawaeid-en');
  const btn = document.querySelector('.get-started-btn');

  // Animate black texts first
  if (welcomeAr) {
    setTimeout(() => {
      welcomeAr.parentElement.classList.add('slide-in-right');
    }, 300);
  }

  if (welcomeEn) {
    setTimeout(() => {
      welcomeEn.parentElement.classList.add('slide-in-left');
    }, 1000);
  }

  // Animate colored texts second
  if (sawaeidAr) {
    setTimeout(() => {
      sawaeidAr.classList.add('fade-in');
    }, 1600);
  }

  if (sawaeidEn) {
    setTimeout(() => {
      sawaeidEn.classList.add('fade-in');
    }, 2200);
  }

  // Button third
  if (btn) {
    setTimeout(() => {
      btn.classList.add('flashy-button');
    }, 2900);

    // Fade out transition to next page
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = btn.getAttribute("href");
      }, 1000);
    });
  }

  // Scroll-triggered animations
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight - offset;
  };

  const displayScrollElement = el => {
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
  handleScrollAnimation();

  // Back to top button
  const backToTop = document.getElementById("backToTop") || document.createElement("button");
  backToTop.innerHTML = "↑";
  backToTop.id = "backToTop";
  backToTop.className = "back-to-top";
  if (!document.getElementById("backToTop")) document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
  });
});
