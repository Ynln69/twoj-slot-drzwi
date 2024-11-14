document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/doors-data.json")
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

          const translateKeyTitle = `doors.title${product.id}`;
          const translateKeyDesc = `doors.desc${product.id}`;
          const translateKeyType = `doors.type${product.id}`;

          li.innerHTML = `
            <div class="card-thumb">
              <img src="../${product.photo}" alt="${
            product.title
          }" width="370"
                  class="card-img">
              <div class="card-overlay">
                <p class="bg-text" data-translate="${translateKeyDesc}">
                 ${i18next.t(translateKeyDesc)}
                </p>
              </div>
            </div>
            <div class="card-box">
                <h2 class="card-title"data-translate="${translateKeyTitle}">${i18next.t(
            translateKeyTitle
          )}</h2>
                <p class="card-text" data-translate="${translateKeyType}">${i18next.t(
            translateKeyType
          )}</p>
            </div>
            `;
          productsList.appendChild(li);
        });
      }

      displayProducts();

      i18next.on("languageChanged", function () {
        displayProducts();
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
