/**
 * Shekhani LLC Dedicated Shop Page Component
 * Compact Sleek Filter Bar (Single Line on Mobile), Faire Bestseller Card Layout, & Add to Cart
 */
import { renderProductModal } from '../components/ProductModal.js';
import { renderBestSellersSlider } from '../components/BestSellersSlider.js';

export function renderShopPage(containerId, { allProducts, cart, onAddToCart, onViewCart }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filteredProducts = [...allProducts];
  let selectedCategory = 'All';
  let selectedPriceRange = 'All';
  let searchQuery = '';

  const categories = [
    "All",
    "Art & Craft",
    "Beauty & Personal Care",
    "DIY & Tools",
    "Fashion",
    "Golf",
    "Household & Health",
    "Home & Kitchen",
    "Office Supplies",
    "Patio Lawn & Garden",
    "Pet Supplies",
    "Toys & Games"
  ];

  function filterData() {
    filteredProducts = allProducts.filter(product => {
      // Category Filter
      const matchesCat = (selectedCategory === 'All') || (product.category.toLowerCase() === selectedCategory.toLowerCase());

      // Price Filter
      let matchesPrice = true;
      const price = product.price;
      if (selectedPriceRange === 'under-20') matchesPrice = price < 20;
      else if (selectedPriceRange === '20-50') matchesPrice = price >= 20 && price <= 50;
      else if (selectedPriceRange === '50-100') matchesPrice = price > 50 && price <= 100;
      else if (selectedPriceRange === 'above-100') matchesPrice = price > 100;

      // Search Filter
      const matchesSearch = !searchQuery || (
        product.name.toLowerCase().includes(searchQuery) ||
        (product.description && product.description.toLowerCase().includes(searchQuery)) ||
        (product.sku && product.sku.toLowerCase().includes(searchQuery))
      );

      return matchesCat && matchesPrice && matchesSearch;
    });
  }

  function renderHTML() {
    filterData();

    container.innerHTML = `
      <style>
        .shop-page-wrapper {
          background-color: #fcfcfc;
          padding: 30px 0 60px;
          min-height: 85vh;
        }

        .shop-container {
          width: 92%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .shop-header {
          margin-bottom: 20px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 14px;
        }

        .shop-title-group h1 {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.2rem;
          font-weight: 400;
          color: #111111;
          margin: 0 0 4px 0;
        }

        .shop-title-group p {
          font-size: 13.5px;
          color: #666666;
          margin: 0;
        }

        /* Sleek Compact Filter Panel */
        .shop-filter-panel {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px 18px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 14px;
          align-items: center;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .filter-label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #555555;
        }

        .filter-select, .shop-search-input {
          height: 36px;
          padding: 0 12px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          font-size: 13px;
          color: #111111;
          outline: none;
          background: #ffffff;
          transition: border-color 0.2s;
          width: 100%;
        }

        .filter-select:focus, .shop-search-input:focus {
          border-color: var(--color-turquoise, #00bfa5);
          box-shadow: 0 0 0 2px rgba(0, 191, 165, 0.15);
        }

        /* Shop Grid Layout matching Faire Bestsellers Cards */
        .shop-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .shop-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .shop-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .shop-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #f2f2f2;
          overflow: hidden;
        }

        .shop-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .shop-card:hover .shop-card-img {
          transform: scale(1.06);
        }

        .shop-card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #ffffff;
          color: #111111;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 700;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }

        .shop-card-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .shop-card-price {
          font-size: 14.5px;
          font-weight: 800;
          color: #111111;
          margin: 0 0 4px 0;
        }

        .shop-card-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #111111;
          margin: 0 0 4px 0;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 36px;
        }

        .shop-card-cat {
          font-size: 11.5px;
          color: #666666;
          margin: 0 0 6px 0;
        }

        .shop-card-rating {
          font-size: 11.5px;
          color: #444444;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .add-to-cart-btn {
          margin-top: auto;
          width: 100%;
          background: var(--color-turquoise, #00bfa5);
          color: #ffffff;
          border: none;
          padding: 9px 0;
          font-size: 12.5px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .add-to-cart-btn:hover {
          background: #00897b;
          transform: translateY(-1px);
        }

        .shop-empty-notice {
          text-align: center;
          padding: 50px 20px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          grid-column: 1 / -1;
        }

        /* Mobile Single Line Compact Filter Layout */
        @media (max-width: 768px) {
          .shop-page-wrapper {
            padding: 20px 0 40px;
          }
          .shop-title-group h1 {
            font-size: 1.7rem;
          }
          .shop-filter-panel {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 8px 10px;
            margin-bottom: 18px;
          }
          .filter-label {
            font-size: 9.5px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .filter-select, .shop-search-input {
            height: 32px;
            padding: 0 6px;
            font-size: 11.5px;
          }
          .shop-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      </style>

      <div class="shop-page-wrapper">
        <div class="shop-container">
          
          <!-- Header (Count text line removed as requested) -->
          <div class="shop-header">
            <div class="shop-title-group">
              <h1>Shop Wholesale Catalog</h1>
              <p>Explore over 30+ premium wholesale products with nationwide distribution.</p>
            </div>
          </div>

          <!-- Compact Filter Panel (Single Line Row in Mobile Mode) -->
          <div class="shop-filter-panel">
            <!-- Category Filter -->
            <div class="filter-group">
              <label class="filter-label" for="shopCatSelect">Category</label>
              <select class="filter-select" id="shopCatSelect">
                ${categories.map(c => `<option value="${c}" ${c === selectedCategory ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>

            <!-- Price Filter -->
            <div class="filter-group">
              <label class="filter-label" for="shopPriceSelect">Price Range</label>
              <select class="filter-select" id="shopPriceSelect">
                <option value="All" ${selectedPriceRange === 'All' ? 'selected' : ''}>All Prices</option>
                <option value="under-20" ${selectedPriceRange === 'under-20' ? 'selected' : ''}>Under US$ 20.00</option>
                <option value="20-50" ${selectedPriceRange === '20-50' ? 'selected' : ''}>US$ 20.00 - US$ 50.00</option>
                <option value="50-100" ${selectedPriceRange === '50-100' ? 'selected' : ''}>US$ 50.00 - US$ 100.00</option>
                <option value="above-100" ${selectedPriceRange === 'above-100' ? 'selected' : ''}>Above US$ 100.00</option>
              </select>
            </div>

            <!-- Search Filter -->
            <div class="filter-group">
              <label class="filter-label" for="shopSearchInput">Search</label>
              <input type="text" class="shop-search-input" id="shopSearchInput" placeholder="Search SKU or name..." value="${searchQuery}">
            </div>
          </div>

          <!-- Products Grid -->
          <div class="shop-products-grid">
            ${filteredProducts.length === 0 ? `
              <div class="shop-empty-notice">
                <h3>No products match your filters</h3>
                <p>Try selecting a different category or clearing search parameters.</p>
                <button type="button" class="add-to-cart-btn" id="btnClearShopFilters" style="max-width: 220px; margin: 16px auto 0 auto;">
                  Clear All Filters
                </button>
              </div>
            ` : filteredProducts.map(p => `
              <div class="shop-card" data-id="${p.id}">
                <div class="shop-card-img-wrap" id="cardImg_${p.id}">
                  <span class="shop-card-badge">Wholesale</span>
                  <img src="${p.image}" alt="${p.name}" class="shop-card-img">
                </div>
                <div class="shop-card-body">
                  <p class="shop-card-price">US$ ${p.price.toFixed(2)}</p>
                  <h2 class="shop-card-title">${p.name}</h2>
                  <p class="shop-card-cat">${p.category} &bull; ${p.sku || 'SKU-REG'}</p>
                  <p class="shop-card-rating">★ <strong>4.9</strong> (Verified)</p>
                  <button type="button" class="add-to-cart-btn btn-add-cart" data-id="${p.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </div>

      <!-- Bestsellers Slider Container at the Bottom of Shop Page -->
      <div id="shopBestsellersContainer"></div>
    `;

    bindEvents();
    // Render Bestsellers Slider at the end of the Shop Page
    renderBestSellersSlider('shopBestsellersContainer');
  }

  function bindEvents() {
    const catSelect = container.querySelector('#shopCatSelect');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderHTML();
      });
    }

    const priceSelect = container.querySelector('#shopPriceSelect');
    if (priceSelect) {
      priceSelect.addEventListener('change', (e) => {
        selectedPriceRange = e.target.value;
        renderHTML();
      });
    }

    const searchInput = container.querySelector('#shopSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterData();
        // Re-render grid dynamically
        const grid = container.querySelector('.shop-products-grid');
        if (grid) {
          if (filteredProducts.length === 0) {
            renderHTML();
          } else {
            grid.innerHTML = filteredProducts.map(p => `
              <div class="shop-card" data-id="${p.id}">
                <div class="shop-card-img-wrap">
                  <span class="shop-card-badge">Wholesale</span>
                  <img src="${p.image}" alt="${p.name}" class="shop-card-img">
                </div>
                <div class="shop-card-body">
                  <p class="shop-card-price">US$ ${p.price.toFixed(2)}</p>
                  <h2 class="shop-card-title">${p.name}</h2>
                  <p class="shop-card-cat">${p.category} &bull; ${p.sku || 'SKU-REG'}</p>
                  <p class="shop-card-rating">★ <strong>4.9</strong> (Verified)</p>
                  <button type="button" class="add-to-cart-btn btn-add-cart" data-id="${p.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            `).join('');
            bindCardButtons();
          }
        }
      });
    }

    const btnClear = container.querySelector('#btnClearShopFilters');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        selectedCategory = 'All';
        selectedPriceRange = 'All';
        searchQuery = '';
        renderHTML();
      });
    }

    bindCardButtons();
  }

  function bindCardButtons() {
    const addCartBtns = container.querySelectorAll('.btn-add-cart');
    addCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const product = allProducts.find(p => p.id === id);
        if (product && onAddToCart) {
          onAddToCart(product);
        }
      });
    });

    const cards = container.querySelectorAll('.shop-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-add-cart')) return;
        const id = parseInt(card.getAttribute('data-id'), 10);
        const product = allProducts.find(p => p.id === id);
        if (product) {
          renderProductModal('productModal', product, (addedProduct) => {
            if (onAddToCart) onAddToCart(addedProduct);
          });
        }
      });
    });
  }

  renderHTML();
}
