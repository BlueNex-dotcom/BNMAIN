// Scroll Animation
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.setAttribute("data-animate-visible", "true");
      }
    });
  });
  