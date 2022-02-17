const el = document.querySelector("nav");

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("isStuck", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);
