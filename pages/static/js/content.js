document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect
  document.body.classList.add("fade-in");

  // Scroll reveal
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  scrollElements.forEach(el => observer.observe(el));

  // Animated background dots
  const spans = document.querySelectorAll(".background span");
  const colors = ["#bcc397", "#a48970", "#3f5a44", "#435051"];

  spans.forEach(span => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    span.style.backgroundColor = color;
    span.style.top = `${Math.random() * 100}%`;
    span.style.left = `${Math.random() * 100}%`;
    span.style.boxShadow = `0 0 40px ${color}`;
    const size = 15 + Math.random() * 25;
    span.style.width = `${size}vmin`;
    span.style.height = `${size}vmin`;
    span.style.animationDuration = `${30 + Math.random() * 30}s`;
    span.style.animationDelay = `${-Math.random() * 60}s`;
    span.style.transformOrigin = `${(Math.random() - 0.5) * 50}vw ${(Math.random() - 0.5) * 50}vh`;
  });

  // Back-to-top button
  const backToTop = document.createElement("button");
  backToTop.innerHTML = "↑";
  backToTop.className = "back-to-top";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  // Fade-out before navigation
  const links = document.querySelectorAll("a.link-item[href]");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      }
    });
  });
});
