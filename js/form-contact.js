document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !phone || !message) {
      alert("Proszę wypełnić wszystkie wymagane pola.");
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Proszę podać prawidłowy adres email.");
      return;
    }

    // Phone number format validation (basic Polish format check)
    const phonePattern = /^[0-9]{9}$/; // Example for a 9-digit number
    if (!phonePattern.test(phone)) {
      alert("Proszę podać prawidłowy numer telefonu (9 cyfr).");
      return;
    }

    // Prepare form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    console.log("Form Data Submitted:", formData); // Debugging output for form data

    // Redirect to thank-you page
    window.location.href = "./thank-you.html";
  });
