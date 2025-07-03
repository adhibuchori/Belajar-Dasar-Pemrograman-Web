let prevScrollPos = window.pageYOffset;

export function initScrollHeader() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      header.style.top = "-100px";
    });
  });
}
