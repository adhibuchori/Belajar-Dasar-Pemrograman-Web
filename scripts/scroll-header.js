let prevScrollPos = window.pageYOffset;
let isNavigating = false;
let suppressNextReveal = false;

export function initScrollHeader() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (isNavigating || suppressNextReveal) {
      prevScrollPos = currentScrollPos;
      return;
    }

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

      if (href?.startsWith("#")) {
        e.preventDefault();
        isNavigating = true;

        const target = document.querySelector(href);
        const currentScroll = window.pageYOffset;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollThreshold = scrollHeight * 0.75;

        if (currentScroll > scrollThreshold) {
          suppressNextReveal = true;
        }

        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.pushState("", document.title, window.location.pathname);
        } else if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }

        header.style.top = "-100px";

        resetNavigationState();
      }
    });
  });
}

function resetNavigationState() {
  setTimeout(() => {
    isNavigating = false;
    prevScrollPos = window.pageYOffset;
    resetSuppressNextReveal();
  }, 700);
}

function resetSuppressNextReveal() {
  setTimeout(() => {
    suppressNextReveal = false;
  }, 300);
}
