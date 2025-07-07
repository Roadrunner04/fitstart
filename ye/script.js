function addToCart(product) {
  const message = document.getElementById('cart-message');
  message.textContent = `${product} added to cart!`;
  setTimeout(() => (message.textContent = ""), 2000);
}

function showThanks() {
  document.getElementById('thanks-message').textContent =
    "Thank you for reaching out! We'll get back to you soon.";
  setTimeout(() => {
    document.getElementById('thanks-message').textContent = "";
    document.getElementById('contact-form').reset();
  }, 3500);
  return false; // Prevent actual form submission
}