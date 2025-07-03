import { initScrollHeader } from "./scroll-header.js";
import { initTypingEffect } from "./typing-effect.js";
import { renderProducts } from "./product/product-render.js";
import { initProductAnimation } from "./product/product-animate.js";
import { renderTestimonials } from "./testimonial/testimonial-render.js";
import { initTestimonialAnimation } from "./testimonial/testimonial-animate.js";
import { initHeaderToggle } from "./toggle-header.js";

document.addEventListener("DOMContentLoaded", () => {
  initScrollHeader();
  initTypingEffect();
  renderProducts();
  renderTestimonials();
  initHeaderToggle();

  setTimeout(() => {
    initProductAnimation();
    initTestimonialAnimation();
  }, 200);
});
