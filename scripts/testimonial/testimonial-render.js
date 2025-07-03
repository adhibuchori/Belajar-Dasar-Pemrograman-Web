import { initTestimonialAnimation } from "./testimonial-animate.js";
import { testimonials } from "./testimonial-data.js";

const perPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(testimonials.length / perPage);

export function renderTestimonials() {
  const container = document.getElementById("testimonial-list");
  const current = document.getElementById("currentPage");
  const total = document.getElementById("totalPages");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  if (!container || !current || !total || !prevBtn || !nextBtn) return;

  total.textContent = totalPages;

  function renderPage() {
    container.innerHTML = "";

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const fragment = document.createDocumentFragment();

    testimonials.slice(start, end).forEach((item) => {
      const fullStars = Math.floor(item.rating);
      const halfStar = item.rating % 1 >= 0.5 ? 1 : 0;
      const emptyStars = 5 - fullStars - halfStar;

      let stars = "";
      stars +=
        '<img src="assets/icons/ic_star_filled.svg" alt="Star" width="24" height="24">'.repeat(
          fullStars
        );
      if (halfStar) {
        stars +=
          '<img src="assets/icons/ic_star_half.svg" alt="Half Star" width="24" height="24">';
      }
      stars +=
        '<img src="assets/icons/ic_star_outline.svg" alt="Empty Star" width="24" height="24">'.repeat(
          emptyStars
        );

      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.innerHTML = `
        <div class="testimonial-header">
          <div class="testimonial-rating-wrapper">
            <p class="testimonial-rating-text">${item.rating}</p>
            <div class="testimonial-rating">${stars}</div>
          </div>
          <img src="assets/icons/ic_quote.svg" alt="Icon Testimonial Quote" width="36" height="36">
        </div>
        <div class="testimonial-info">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <p class="testimonial-name">${item.name}</p>
            <p class="testimonial-role">${item.role}</p>
          </div>
        </div>
        <p class="testimonial-text">${item.text}</p>
      `;
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
    current.textContent = currentPage;
    initTestimonialAnimation();
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  });

  renderPage();
}
