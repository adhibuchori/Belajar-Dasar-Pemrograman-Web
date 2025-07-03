import { products } from "./product-data.js";

export function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card-container";
    productCard.innerHTML = `
      <div class="product-icon-container">
        <img src="${product.icon}" alt="Icon ${product.title}" width="78" />
      </div>
      <p class="product-title">${product.title}</p>
      <p class="product-desc">${product.desc}</p>
    `;
    productList.appendChild(productCard);
  });
}
