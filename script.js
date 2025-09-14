const products = [
  { id: 1, title: "Laptop", category: "electronics", price: "₹55,400.00", img: "images/laptop.jpeg", desc: "High-performance laptop for work and play." },
  { id: 2, title: "Sneakers", category: "shoes", price: "₹799.00", img: "images/shoes.jpg", desc: "Trendy sneakers for daily wear." },
  { id: 3, title: "Smartphone", category: "electronics", price: "₹1,50,000.00", img: "images/phone.jpg", desc: "Latest smartphone with great features." },
  { id: 4, title: "Jacket", category: "clothes", price: "₹1,999.00", img: "images/jacket.jpg", desc: "Stylish winter jacket." },
  { id: 5, title: "Headphones", category: "electronics", price: "₹1,299.00", img: "images/headphones.jpg", desc: "Noise-cancelling headphones." },
  { id: 6, title: "Wrist Watch", category: "fashion", price: "₹4,99,999.00", img: "images/watch.jpeg", desc: "Elegant wrist watch with leather strap." },
  { id: 7, title: "Backpack", category: "fashion", price: "₹649.00", img: "images/backpack.jpeg", desc: "Durable backpack for everyday use." },
  { id: 8, title: "Gold chain", category: "gold", price: "₹9,49,599.00", img: "images/goldchain.jpeg", desc: "Wear your heart around your neck." },
  { id: 9, title: "Casual Shirt", category: "clothes", price: "₹499.00", img: "images/shirt.jpg", desc: "Comfortable cotton shirt." },
  { id: 10, title: "Sunglasses", category: "fashion", price: "₹1,149.00", img: "images/sunglasses.jpeg", desc: "Stylish UV-protected sunglasses." },
  { id: 11, title: "Running Shoes", category: "shoes", price: "₹3,599.00", img: "images/running shoes.jpeg", desc: "Lightweight running shoes." },
  { id: 12, title: "earphones", category: "electronics", price: "₹249.00", img: "images/earphones.jpeg", desc: "High performance headphones." },
  { id: 13, title: "T-Shirt", category: "clothes", price: "₹999.00", img: "images/t shirts.jpeg", desc: "Comfortable cotton t-shirt." },
  { id: 14, title: "Sandals", category: "shoes", price: "₹2,499.00", img: "images/sandals.jpeg", desc: "Casual summer sandals." },
  { id: 15, title: "Tablet", category: "electronics", price: "₹18,500.00", img: "images/tablet.jpeg", desc: "Portable tablet device." },
  { id: 16, title: "Jeans", category: "clothes", price: "₹1,759.00", img: "images/jeans.jpeg", desc: "Slim fit denim jeans." },
  { id: 17, title: "bracelet", category: "gold", price: "₹2,39,599.00", img: "images/bracelet.jpeg", desc: "A little sparkle goes a long way." },
  { id: 18, title: "Smartwatch", category: "fashion", price: "₹2,799.00", img: "images/smartwatches.jpeg", desc: "Smartwatch with health tracking." }
];

const gallery = document.getElementById("product-gallery");
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");

function displayProducts(items) {
  gallery.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="info">
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
        <p class="price">${product.price}</p>
      </div>
    `;
    card.onclick = () => openModal(product);
    gallery.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function openModal(product) {
  modal.style.display = "flex";
  modalImg.src = product.img;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.desc;
  modalPrice.textContent = product.price;
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

displayProducts(products);