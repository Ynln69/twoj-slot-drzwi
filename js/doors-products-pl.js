document.addEventListener("DOMContentLoaded", () => {
  fetch("../../data/doors-data.json")
    .then((response) => response.json())
    .then((data) => {
      let productsData = data.doors;
      const productsList = document.getElementById("products-list");

      if (!productsList) {
        return;
      }

      function displayProducts() {
        productsList.innerHTML = "";
        productsData.forEach((product) => {
          const li = document.createElement("li");
          li.classList.add("card-item");
          li.innerHTML = `
            <div class="card-thumb">
              <img src="../../${product.photo}" alt="${product.title}" width="370"
                  class="card-img">
              <div class="card-overlay">
                <p class="bg-text">${product.description}</p>
              </div>
            </div>
            <div class="card-box">
                <h2 class="card-title">${product.title}</h2>
                <p class="card-text">${product.type}</p>
            </div>
            `;
          productsList.appendChild(li);
        });
      }

      displayProducts();
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
