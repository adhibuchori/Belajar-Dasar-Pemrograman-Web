export function initTestimonialAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => observer.observe(card));
}
