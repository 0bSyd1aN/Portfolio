document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents default form submission

      // Display success message
      alert("Your message has been submitted successfully!");

      // Reset the form
      this.reset();
  });
});
