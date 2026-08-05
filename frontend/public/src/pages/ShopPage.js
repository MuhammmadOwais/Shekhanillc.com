/**
 * Shekhani LLC Dedicated Shop Page Component
 * Compact Sleek Filter Bar (Single Line on Mobile), Faire Bestseller Card Layout, & Add to Cart
 */
import { renderProductModal } from '../components/ProductModal.js';
import { renderBestSellersSlider } from '../components/BestSellersSlider.js';

const DEFAULT_SHOP_PRODUCTS = [
  { id: 1, sku: "SKU-GOLF-01", name: "Professional Golf Glove & Ball Set", category: "Golf", price: 28.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&auto=format&fit=crop&q=80", description: "Premium cabretta leather golf glove with 12 tour-grade golf balls for professional players." },
  { id: 2, sku: "SKU-GOLF-02", name: "Precision Laser Golf Rangefinder", category: "Golf", price: 89.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&auto=format&fit=crop&q=80", description: "High precision 800-yard laser rangefinder with slope measurement and flag lock." },
  { id: 3, sku: "SKU-GOLF-03", name: "Tour Stand Golf Bag Lightweight", category: "Golf", price: 110.00, inStock: true, image: "https://images.unsplash.com/photo-1593111774601-dfbce3240b2a?w=600&auto=format&fit=crop&q=80", description: "Ergonomic 14-divider lightweight golf stand bag with waterproof garment pockets." },
  { id: 4, sku: "SKU-ART-01", name: "Brushes for Kids & Artist Painting", category: "Art & Craft", price: 18.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80", description: "Assorted paint brushes set with durable bristles for school painting and watercolor." },
  { id: 5, sku: "SKU-ART-02", name: "Jumbo Sidewalk Chalk Holders Set", category: "Art & Craft", price: 9.00, inStock: true, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80", description: "Colorful sidewalk chalk holder set protecting hands while drawing outdoor pavement art." },
  { id: 6, sku: "SKU-ART-03", name: "24-Color Professional Acrylic Paint Tubes", category: "Art & Craft", price: 24.00, inStock: true, image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80", description: "Rich pigment acrylic paint set for canvas, wood, and ceramic crafting." },
  { id: 7, sku: "SKU-BEAUTY-01", name: "Organic Hydrating Rosewater Facial Mist", category: "Beauty & Personal Care", price: 16.50, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80", description: "100% pure organic rosewater toner mist for instant skin hydration and glow." },
  { id: 8, sku: "SKU-BEAUTY-02", name: "Vitamin C Brightening Facial Serum 30ml", category: "Beauty & Personal Care", price: 22.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1608248597261-83325705438f?w=600&auto=format&fit=crop&q=80", description: "Potent 20% Vitamin C serum enriched with hyaluronic acid for hyperpigmentation treatment." },
  { id: 9, sku: "SKU-BEAUTY-03", name: "Natural Charcoal Detoxifying Bath Soap", category: "Beauty & Personal Care", price: 7.50, inStock: true, image: "https://images.unsplash.com/photo-1607006482602-76ca072b4482?w=600&auto=format&fit=crop&q=80", description: "Activated bamboo charcoal body bar deeply cleansing pores and removing impurities." },
  { id: 10, sku: "SKU-TOOLS-01", name: "Heavy-Duty 45-Piece Home Tool Set", category: "DIY & Tools", price: 42.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=600&auto=format&fit=crop&q=80", description: "Complete household repair tool kit with hammer, pliers, screwdriver bits, and tape measure." },
  { id: 11, sku: "SKU-FASHION-01", name: "Classic Minimalist Polarized Sunglasses", category: "Fashion", price: 29.99, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80", description: "UV400 protection polarized sunglasses with lightweight stainless steel frame." },
  { id: 12, sku: "SKU-HEALTH-01", name: "Sonic Electric Toothbrush With 4 Heads", category: "Household & Health", price: 34.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&auto=format&fit=crop&q=80", description: "40,000 VPM sonic power toothbrush with 5 smart cleaning modes and travel case." },
  { id: 13, sku: "SKU-KITCHEN-01", name: "Non-Stick Ceramic Frying Pan 10-Inch", category: "Home & Kitchen", price: 36.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80", description: "Eco-friendly toxin-free ceramic non-stick skillet for effortless cooking and cleaning." },
  { id: 14, sku: "SKU-OFFICE-01", name: "Ergonomic Memory Foam Seat Cushion", category: "Office Supplies", price: 25.00, inStock: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80", description: "Contoured orthopedic foam tailbone cushion relieving lower back pressure during work." },
  { id: 15, sku: "SKU-GARDEN-01", name: "Solar Outdoor LED Garden Pathway Lights", category: "Patio Lawn & Garden", price: 31.00, inStock: true, image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80", description: "Waterproof solar landscape lights illuminating garden walkways automatically at dusk." },
  { id: 16, sku: "SKU-PET-01", name: "Interactive Automatic Laser Toy for Cats", category: "Pet Supplies", price: 19.50, inStock: true, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80", description: "360-degree rotating automated red laser light exerciser keeping cats active." },
  { id: 17, sku: "SKU-TOYS-01", name: "Educational STEM Solar Robot Kit 12-in-1", category: "Toys & Games", price: 26.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80", description: "Solar powered building science kit for kids promoting hands-on engineering skills." }
];

export function renderShopPage(containerId, { allProducts, cart, onAddToCart, onViewCart }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const productsList = (Array.isArray(allProducts) && allProducts.length > 0) 
    ? allProducts 
    : (window.shekhaniGlobalProducts || DEFAULT_SHOP_PRODUCTS);

  let filteredProducts = [...productsList];
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
    filteredProducts = productsList.filter(product => {
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
          color: #111111;
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
          text-align: left;
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
          border-color: #00d084;
          box-shadow: 0 0 0 2px rgba(0, 208, 132, 0.15);
        }

        .filter-select option {
          background: #ffffff;
          color: #111111;
        }

        /* Shop Grid Layout matching Bestsellers Cards */
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
          border-color: #e5e5e5;
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
          background: #00d084;
          color: #000000;
          border: none;
          padding: 9px 12px;
          font-size: 12.5px;
          font-weight: 800;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .add-to-cart-btn:hover {
          background: #00b371;
        }
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
