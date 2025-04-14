// === Product Data ===
const products = [
  { id: 1, name: "Blue Hoodie", price: 39.99, image: "images/blue-hoodie.jpg" },
  { id: 2, name: "Red Cap", price: 19.99, image: "images/red-cap.jpg" },
  { id: 3, name: "Sneakers", price: 59.99, image: "images/sneakers.jpg" }
];

// === Cart State ===
let cart = [];

// === Render Products ===
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100px">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// === Add to Cart ===
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// === Render Cart ===
function renderCart() {
  const cartEl = document.getElementById("cart");
  cartEl.innerHTML = "<h2>Cart</h2>";
  if (cart.length === 0) {
    cartEl.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }
  cart.forEach((item, i) => {
    cartEl.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${i})">Remove</button></p>`;
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  cartEl.innerHTML += `<h3>Total: $${total}</h3>`;
  cartEl.innerHTML += `<button onclick="checkout()">Checkout</button>`;
}

// === Remove from Cart ===
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// === Placeholder Checkout ===
function checkout() {
  alert("Checkout clicked! (Hook up Stripe or Netlify Forms here)");
}

// === Init ===
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
});
