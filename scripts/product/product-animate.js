export function initProductAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }, index * 200);
        }
      });
    },
    { threshold: 0.1 }
  );

  const productCards = document.querySelectorAll(".product-card-container");
  productCards.forEach((card) => observer.observe(card));
}
