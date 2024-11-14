document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const formData = {
      email: email,
    };

    window.location.href = "../thank-you.html";
  });
