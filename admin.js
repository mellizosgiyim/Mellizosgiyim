const USER = "admin";
const PASS = "1234";

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === USER && p === PASS) {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
    loadProducts();
  } else {
    alert("Hatalı giriş");
  }
}

function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  if (!name || !price) return alert("Eksik bilgi");

  const products = getProducts();
  products.push({ name, price, image });
  saveProducts(products);
  loadProducts();
}

function loadProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  getProducts().forEach((p, i) => {
    list.innerHTML += `
      <li>
        ${p.name} - ${p.price}₺
        <button onclick="deleteProduct(${i})">Sil</button>
      </li>`;
  });
}

function deleteProduct(index) {
  const products = getProducts();
  products.splice(index, 1);
  saveProducts(products);
  loadProducts();
}
function loadOrders() {
  const list = document.getElementById("orderList");
  if (!list) return;

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  list.innerHTML = "";

  orders.forEach(order => {
    list.innerHTML += `
      <li>
        <strong>#${order.id}</strong><br>
        ${order.date}<br>
        Toplam: ${order.total}₺
      </li>
      <hr>
    `;
  });
}
