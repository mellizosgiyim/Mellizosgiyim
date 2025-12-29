let cartCount = 0;

function addToCart() {
  cartCount++;
  alert("Ürün sepete eklendi! 🛒\nToplam ürün: " + cartCount);
}
function completeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Sepet boş");
    return;
  }

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cart,
    total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");

  alert("Sipariş alındı 🎉");
  location.reload();
}
