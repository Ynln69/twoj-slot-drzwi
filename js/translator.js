const savedLanguage = localStorage.getItem("language") || "pl";

i18next.use(i18nextXHRBackend).init(
  {
    lng: savedLanguage,
    fallbackLng: "pl",
    debug: true,
    backend: {
      loadPath: "./locales/{{lng}}.json",
      loadPath: "../locales/{{lng}}.json",
    },
  },
  function (err, t) {
    updateContent();
    updateActiveLanguage(savedLanguage);
  }
);

function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(function (element) {
    const key = element.getAttribute("data-translate");
    element.textContent = i18next.t(key);
  });
}


function changeLanguage(language) {
  i18next.changeLanguage(language, () => {
    localStorage.setItem("language", language); 
    updateContent();
    updateActiveLanguage(language); 
  });
}

function updateActiveLanguage(language) {
  document.getElementById("language-dropdown").value = language;
}

document.getElementById("language-dropdown").addEventListener("change", function () {
  const selectedLanguage = this.value;
  changeLanguage(selectedLanguage); 
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("language-dropdown").value = savedLanguage;
});
