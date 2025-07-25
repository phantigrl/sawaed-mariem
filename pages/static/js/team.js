document.addEventListener("DOMContentLoaded", () => {
  // Animate team bubbles on scroll
  const elements = document.querySelectorAll(".team-bubble");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => observer.observe(el));

  // Floating icon interaction
  const icons = document.querySelectorAll(".icon");

  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.1)";
      icon.style.transition = "transform 0.3s ease";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
    });
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("div");
  scrollBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
  scrollBtn.className = "scroll-to-top";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 300);
  });

  // Animate header lines
  const headerLines = document.querySelectorAll(".animate-line");
  headerLines.forEach(line => {
    line.style.opacity = "0";
    line.style.transform = "translateY(30px)";
  });

  // Trigger header fade-in with delay
  setTimeout(() => {
    headerLines.forEach(line => {
      line.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    });
  }, 300);
});
