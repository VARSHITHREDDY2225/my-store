let cartCount = 0;
let cartItems = [];

function addToCart(productName) {
  cartCount++;
  cartItems.push(productName);
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${productName} has been added to your cart!`);
}
