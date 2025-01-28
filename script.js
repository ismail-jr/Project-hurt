document.addEventListener("DOMContentLoaded", function () {
  console.log("Marketplace ready!");
  // You can add functionality like filtering items, handling user clicks here
});
// Sell Item Form Submit Handler
document
  .getElementById("sellForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your item has been listed for sale!");
  });

// Contact Form Submit Handler
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
  });
