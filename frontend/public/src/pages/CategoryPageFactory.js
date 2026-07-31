/**
 * Reusable Category Page Factory for Shekhani LLC
 * Renders category specific products with Price Range Filter, Keyword Search & Faire Bestseller Cards
 */
import { renderProductModal } from '../components/ProductModal.js';
import { renderBestSellersSlider } from '../components/BestSellersSlider.js';

export function renderCategoryPage(containerId, categoryName, { allProducts, cart, onAddToCart }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categoryProducts = allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
  let filteredProducts = [...categoryProducts];
  let selectedPriceRange = 'All';
  let searchQuery = '';

  function filterData() {
    filteredProducts = categoryProducts.filter(product => {
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

      return matchesPrice && matchesSearch;
    });
  }

  function renderHTML() {
    filterData();

    container.innerHTML = `
      <style>
        .cat-page-wrapper {
          background-color: #fcfcfc;
          padding: 35px 0 60px;
          min-height: 85vh;
        }

        .cat-container {
          width: 92%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .cat-header {
          margin-bottom: 20px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 14px;
        }

        .cat-title-group h1 {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.3rem;
          font-weight: 400;
          color: #111111;
          margin: 0 0 6px 0;
        }

        .cat-title-group p {
          font-size: 13.5px;
          color: #666666;
          margin: 0;
        }

        /* Sleek Compact Filter Bar */
        .cat-filter-panel {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px 18px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: center;
        }

        .cat-filter-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cat-filter-label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #555555;
        }

        .cat-filter-select, .cat-search-input {
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

        .cat-filter-select:focus, .cat-search-input:focus {
          border-color: var(--color-turquoise, #00bfa5);
          box-shadow: 0 0 0 2px rgba(0, 191, 165, 0.15);
        }

        /* Category Grid Layout matching Faire Cards */
        .cat-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .cat-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .cat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .cat-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #f2f2f2;
          overflow: hidden;
        }

        .cat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .cat-card:hover .cat-card-img {
          transform: scale(1.06);
        }

        .cat-card-badge {
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

        .cat-card-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cat-card-price {
          font-size: 14.5px;
          font-weight: 800;
          color: #111111;
          margin: 0 0 4px 0;
        }

        .cat-card-title {
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

        .cat-card-sub {
          font-size: 11.5px;
          color: #666666;
          margin: 0 0 6px 0;
        }

        .cat-card-rating {
          font-size: 11.5px;
          color: #444444;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cat-add-cart-btn {
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

        .cat-add-cart-btn:hover {
          background: #00897b;
          transform: translateY(-1px);
        }

        .cat-empty-notice {
          text-align: center;
          padding: 50px 20px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
          .cat-page-wrapper {
            padding: 20px 0 40px;
          }
          .cat-title-group h1 {
            font-size: 1.7rem;
          }
          .cat-filter-panel {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            padding: 8px 10px;
            margin-bottom: 18px;
          }
          .cat-filter-label {
            font-size: 9.5px;
          }
          .cat-filter-select, .cat-search-input {
            height: 32px;
            padding: 0 6px;
            font-size: 11.5px;
          }
          .cat-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      </style>

      <div class="cat-page-wrapper">
        <div class="cat-container">
          
          <!-- Header -->
          <div class="cat-header">
            <div class="cat-title-group">
              <h1>${categoryName} Wholesale</h1>
              <p>Explore verified wholesale products in ${categoryName}.</p>
            </div>
          </div>

          <!-- Filter Panel -->
          <div class="cat-filter-panel">
            <div class="cat-filter-group">
              <label class="cat-filter-label" for="catPriceSelect">Price Range</label>
              <select class="cat-filter-select" id="catPriceSelect">
                <option value="All" ${selectedPriceRange === 'All' ? 'selected' : ''}>All Prices</option>
                <option value="under-20" ${selectedPriceRange === 'under-20' ? 'selected' : ''}>Under US$ 20.00</option>
                <option value="20-50" ${selectedPriceRange === '20-50' ? 'selected' : ''}>US$ 20.00 - US$ 50.00</option>
                <option value="50-100" ${selectedPriceRange === '50-100' ? 'selected' : ''}>US$ 50.00 - US$ 100.00</option>
                <option value="above-100" ${selectedPriceRange === 'above-100' ? 'selected' : ''}>Above US$ 100.00</option>
              </select>
            </div>

            <div class="cat-filter-group">
              <label class="cat-filter-label" for="catSearchInput">Search Keywords</label>
              <input type="text" class="cat-search-input" id="catSearchInput" placeholder="Search by name or SKU..." value="${searchQuery}">
            </div>
          </div>

          <!-- Products Grid -->
          <div class="cat-products-grid">
            ${filteredProducts.length === 0 ? `
              <div class="cat-empty-notice">
                <h3>No products found in ${categoryName}</h3>
                <p>Try resetting your price range or search keywords.</p>
                <button type="button" class="cat-add-cart-btn" id="btnClearCatFilters" style="max-width: 220px; margin: 16px auto 0 auto;">
                  Reset Filters
                </button>
              </div>
            ` : filteredProducts.map(p => `
              <div class="cat-card" data-id="${p.id}">
                <div class="cat-card-img-wrap">
                  <span class="cat-card-badge">Wholesale</span>
                  <img src="${p.image}" alt="${p.name}" class="cat-card-img">
                </div>
                <div class="cat-card-body">
                  <p class="cat-card-price">US$ ${p.price.toFixed(2)}</p>
                  <h2 class="cat-card-title">${p.name}</h2>
                  <p class="cat-card-sub">${p.category} &bull; ${p.sku || 'SKU-REG'}</p>
                  <p class="cat-card-rating">★ <strong>4.9</strong> (Verified)</p>
                  <button type="button" class="cat-add-cart-btn btn-cat-add-cart" data-id="${p.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </div>

      <!-- Bestsellers Slider at Bottom -->
      <div id="catBestsellersContainer"></div>
    `;

    bindEvents();
    renderBestSellersSlider('catBestsellersContainer');
  }

  function bindEvents() {
    const priceSelect = container.querySelector('#catPriceSelect');
    if (priceSelect) {
      priceSelect.addEventListener('change', (e) => {
        selectedPriceRange = e.target.value;
        renderHTML();
      });
    }

    const searchInput = container.querySelector('#catSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterData();
        renderHTML();
      });
    }

    const btnClear = container.querySelector('#btnClearCatFilters');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        selectedPriceRange = 'All';
        searchQuery = '';
        renderHTML();
      });
    }

    bindCardButtons();
  }

  function bindCardButtons() {
    const addCartBtns = container.querySelectorAll('.btn-cat-add-cart');
    addCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const product = categoryProducts.find(p => p.id === id);
        if (product && onAddToCart) {
          onAddToCart(product);
        }
      });
    });

    const cards = container.querySelectorAll('.cat-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-cat-add-cart')) return;
        const id = parseInt(card.getAttribute('data-id'), 10);
        const product = categoryProducts.find(p => p.id === id);
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
