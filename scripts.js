document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevents default form submission

      let form = this;
      let formData = new FormData(form);

      let statusMessage = document.getElementById("form-status");

      try {
          let response = await fetch(form.action, {
              method: "POST",
              body: formData,
              headers: {
                  "Accept": "application/json"
              }
          });

          if (response.ok) {
              statusMessage.innerHTML = "✅ Message sent successfully!";
              form.reset();
          } else {
              statusMessage.innerHTML = "❌ Error sending message. Try again!";
          }
      } catch (error) {
          statusMessage.innerHTML = "⚠️ Network error. Check your connection.";
      }
  });
});
