// ─────── FAIRE-STYLE NAV DROPDOWNS ───────
function setLang(code, label) {
  const selectedLangEl = document.getElementById('selectedLang');
  if (selectedLangEl) selectedLangEl.textContent = code;
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === code);
  });
  const langSel = document.getElementById('langSelector');
  if (langSel) langSel.classList.remove('open');
  console.log('Language set to:', label);
}

document.addEventListener('DOMContentLoaded', function () {
  // All Categories Dropdown
  const allCatsBtn = document.getElementById('allCatsBtn');
  const allCatsWrap = document.getElementById('allCatsWrap');
  if (allCatsBtn && allCatsWrap) {
    allCatsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      allCatsWrap.classList.toggle('open');
      langSelector && langSelector.classList.remove('open');
    });
  }

  // Language Selector Dropdown
  const langBtn = document.getElementById('langBtn');
  const langSelector = document.getElementById('langSelector');
  if (langBtn && langSelector) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelector.classList.toggle('open');
      allCatsWrap && allCatsWrap.classList.remove('open');
    });
  }

  // Close all dropdowns when clicking outside
  document.addEventListener('click', () => {
    allCatsWrap && allCatsWrap.classList.remove('open');
    langSelector && langSelector.classList.remove('open');
  });
});

let products = [];
let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const relatedGrid = document.getElementById('relatedGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsCount = document.getElementById('resultsCount');

const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const headerCartTotal = document.getElementById('headerCartTotal');
const cartTotal = document.getElementById('cartTotal');

const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Auto Auth Modal Elements
const authModal = document.getElementById('authModal');
const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

// Cookie Popup Elements
const cookieConsentPopup = document.getElementById('cookieConsentPopup');
const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieRejectBtn = document.getElementById('cookieRejectBtn');
const cookieLimitedBtn = document.getElementById('cookieLimitedBtn');
const cookieSaveBtn = document.getElementById('cookieSaveBtn');

// Single Product Page Elements
const mainProdImg = document.getElementById('mainProdImg');
const prodTitle = document.getElementById('prodTitle');
const prodPrice = document.getElementById('prodPrice');
const prodDesc = document.getElementById('prodDesc');
const prodSku = document.getElementById('prodSku');
const prodCategory = document.getElementById('prodCategory');
const bcCategory = document.getElementById('bcCategory');
const bcTitle = document.getElementById('bcTitle');
const qtyInput = document.getElementById('qtyInput');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const addDetailToCartBtn = document.getElementById('addDetailToCartBtn');

let currentSingleProduct = null;

// ─────── SEAMLESS DUAL-VIDEO HERO PLAYER SWITCHER ───────
function initDualVideoPlayer() {
  const vid1 = document.getElementById('heroVideo1');
  const vid2 = document.getElementById('heroVideo2');

  if (!vid1 || !vid2) return;

  vid1.play().catch(() => {});

  vid1.addEventListener('ended', () => {
    vid1.classList.remove('active');
    vid2.classList.add('active');
    vid2.currentTime = 0;
    vid2.play().catch(() => {});
  });

  vid2.addEventListener('ended', () => {
    vid2.classList.remove('active');
    vid1.classList.add('active');
    vid1.currentTime = 0;
    vid1.play().catch(() => {});
  });
}

// ─────── AUTOMATIC AUTH MODAL ON LOAD ───────
function initAutoAuthModal() {
  if (!authModal) return;

  // Automatically open Sign Up / Sign In modal on page open
  setTimeout(() => {
    authModal.classList.add('active');
  }, 600);

  if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener('click', () => {
      authModal.classList.remove('active');
    });
  }

  if (tabSignIn && tabSignUp) {
    tabSignIn.addEventListener('click', () => {
      tabSignIn.classList.add('active');
      tabSignUp.classList.remove('active');
      signInForm.style.display = 'block';
      signUpForm.style.display = 'none';
    });

    tabSignUp.addEventListener('click', () => {
      tabSignUp.classList.add('active');
      tabSignIn.classList.remove('active');
      signUpForm.style.display = 'block';
      signInForm.style.display = 'none';
    });
  }

  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      authModal.classList.remove('active');
      showToast('Welcome back! Successfully signed in.');
    });
  }

  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      authModal.classList.remove('active');
      showToast('Account created successfully! Welcome to Shekhani LLC.');
    });
  }
}

// ─────── MCLANE COOKIE CONSENT POPUP ───────
function initCookiePopup() {
  if (!cookieConsentPopup) return;

  const cookieChoice = localStorage.getItem('shekhani_cookie_consent');
  if (!cookieChoice) {
    setTimeout(() => {
      cookieConsentPopup.classList.add('active');
    }, 1200);
  }

  const hideCookie = (choice) => {
    localStorage.setItem('shekhani_cookie_consent', choice);
    cookieConsentPopup.classList.remove('active');
    showToast(`Cookie preferences saved: ${choice}`);
  };

  if (cookieAcceptBtn) cookieAcceptBtn.addEventListener('click', () => hideCookie('Accepted'));
  if (cookieRejectBtn) cookieRejectBtn.addEventListener('click', () => hideCookie('Rejected'));
  if (cookieLimitedBtn) cookieLimitedBtn.addEventListener('click', () => hideCookie('Limited'));
  if (cookieSaveBtn) cookieSaveBtn.addEventListener('click', () => hideCookie('Preferences Saved'));
}

// Fetch Products Catalog
async function fetchProducts() {
  try {
    const res = await fetch('/api/products');
    products = await res.json();

    if (productGrid) renderProducts(products);

    // Single Product Page Check
    if (prodTitle) {
      const urlParams = new URLSearchParams(window.location.search);
      const prodId = urlParams.get('id') || 1;
      loadSingleProduct(prodId);
    }
  } catch (err) {
    if (productGrid) productGrid.innerHTML = `<p class="empty-cart-msg">Failed to load wholesale catalog.</p>`;
  }
}

function renderProducts(items) {
  if (!items || items.length === 0) {
    productGrid.innerHTML = `<p class="empty-cart-msg">No wholesale items match your search.</p>`;
    if (resultsCount) resultsCount.textContent = `Showing 0 results`;
    return;
  }

  if (resultsCount) resultsCount.textContent = `Showing 1–${items.length} of 67 wholesale items`;

  productGrid.innerHTML = items.map(product => `
    <div class="shekhani-card" onclick="goToProduct(${product.id})">
      <div class="card-img-wrapper">
        <span class="sku-badge">${product.sku}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="card-content-body">
        <span class="card-cat">${product.category}</span>
        <h4 class="card-title">${product.name}</h4>
        <div class="card-price-row">
          <div class="price-box">
            <span class="card-price">$${product.price.toFixed(2)}</span>
            <span class="wholesale-tag">Wholesale Price</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Order</button>
        </div>
      </div>
    </div>
  `).join('');
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function loadSingleProduct(id) {
  const p = products.find(prod => prod.id === parseInt(id)) || products[0];
  if (!p) return;

  currentSingleProduct = p;
  if (mainProdImg) mainProdImg.src = p.image;
  if (prodTitle) prodTitle.textContent = p.name;
  if (prodPrice) prodPrice.textContent = `$${p.price.toFixed(2)}`;
  if (prodDesc) prodDesc.textContent = p.description;
  if (prodSku) prodSku.textContent = p.sku;
  if (prodCategory) prodCategory.textContent = p.category;
  if (bcCategory) bcCategory.textContent = p.category;
  if (bcTitle) bcTitle.textContent = p.name;

  if (relatedGrid) {
    const related = products.filter(item => item.id !== p.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(prod => `
      <div class="shekhani-card" onclick="goToProduct(${prod.id})">
        <div class="card-img-wrapper">
          <span class="sku-badge">${prod.sku}</span>
          <img src="${prod.image}" alt="${prod.name}">
        </div>
        <div class="card-content-body">
          <span class="card-cat">${prod.category}</span>
          <h4 class="card-title">${prod.name}</h4>
          <div class="card-price-row">
            <div class="price-box">
              <span class="card-price">$${prod.price.toFixed(2)}</span>
              <span class="wholesale-tag">Wholesale Price</span>
            </div>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${prod.id})">Add to Order</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Search
if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    renderProducts(products);
    return;
  }
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) ||
    p.sku.toLowerCase().includes(query)
  );
  renderProducts(filtered);
}

// Quantity Adjusters
if (qtyMinus && qtyPlus && qtyInput) {
  qtyMinus.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });

  qtyPlus.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    qtyInput.value = val + 1;
  });
}

if (addDetailToCartBtn) {
  addDetailToCartBtn.addEventListener('click', () => {
    if (!currentSingleProduct) return;
    const qty = parseInt(qtyInput.value) || 1;
    for (let i = 0; i < qty; i++) {
      cart.push(currentSingleProduct);
    }
    updateCart();
    showToast(`Added ${qty} x "${currentSingleProduct.name}" to order!`);
  });
}

// Contact Form Handler
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    showToast("Thank you for contacting Shekhani LLC! Our team will reach out shortly.");
  });
}

// Cart & Order Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  updateCart();
  showToast(`Added "${product.name}" to order!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const formattedTotal = `$${total.toFixed(2)}`;

  if (headerCartTotal) headerCartTotal.textContent = formattedTotal;
  if (cartTotal) cartTotal.textContent = formattedTotal;

  if (cart.length === 0) {
    if (cartItemsContainer) cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Your order is currently empty.</p>`;
    return;
  }

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
      </div>
    `).join('');
  }
}

// Cart Drawer
if (cartToggle) {
  cartToggle.addEventListener('click', () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  });
}

if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

function closeCartDrawer() {
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
}

// Checkout Modal
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your order is empty!');
      return;
    }
    closeCartDrawer();
    checkoutModal.classList.add('active');
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderId = "SHK-" + Math.floor(100000 + Math.random() * 900000);
    checkoutModal.classList.remove('active');
    cart = [];
    updateCart();
    alert(`Order Placed Successfully!\nOrder ID: ${orderId}\nThank you for your order at Shekhani LLC!`);
  });
}

function showToast(msg) {
  if (toast) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initDualVideoPlayer();
  initAutoAuthModal();
  initCookiePopup();
  fetchProducts();
});
