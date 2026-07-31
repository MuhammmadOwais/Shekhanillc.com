/**
 * Faire-Style Featured Brands Component for Shekhani LLC
 */

const featuredBrandsData = {
  "Art & Craft": [
    { name: "Craft & Color Co.", origin: "Brooklyn, New York", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80" },
    { name: "54 Celsius Studio", origin: "Great Barrington, Massachusetts", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80" },
    { name: "Pigment & Paper", origin: "Austin, Texas", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80" },
    { name: "Chalk & Canvas", origin: "Seattle, Washington", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80" }
  ],
  "Beauty & Personal Care": [
    { name: "Botanical Shave Co.", origin: "Portland, Oregon", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&auto=format&fit=crop&q=80" },
    { name: "Pure Flora Organics", origin: "Los Angeles, California", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80" },
    { name: "Lash Beauty Lab", origin: "Miami, Florida", image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&auto=format&fit=crop&q=80" },
    { name: "Velvet Glow Skincare", origin: "Paris, France", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80" }
  ],
  "Home & Kitchen": [
    { name: "W&P Living", origin: "New York, New York", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80" },
    { name: "Sophie Lou Jacobsen", origin: "Brooklyn, New York", image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&auto=format&fit=crop&q=80" },
    { name: "Bazar Bizar Living", origin: "Antwerp, Belgium", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=600&auto=format&fit=crop&q=80" },
    { name: "Artisan Kitchenware", origin: "Chesterfield, Missouri", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80" }
  ],
  "Fashion": [
    { name: "Heritage Denim", origin: "San Francisco, California", image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&auto=format&fit=crop&q=80" },
    { name: "Urban Fleece Apparel", origin: "Chicago, Illinois", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80" },
    { name: "Nomad Leather Goods", origin: "Florence, Italy", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80" },
    { name: "Nordic Knitwear", origin: "Stockholm, Sweden", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80" }
  ]
};

export function renderFeaturedBrands(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categories = Object.keys(featuredBrandsData);
  let activeTab = categories[0];

  function buildHTML() {
    const brands = featuredBrandsData[activeTab] || [];

    return `
      <style>
        .featured-brands-section {
          background-color: #faf9f6;
          padding: 60px 0;
          border-bottom: 1px solid #eaeaea;
        }

        .featured-brands-container {
          width: 92%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .featured-brands-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .featured-brands-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.2rem;
          font-weight: 400;
          color: #111111;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .featured-brands-pills-row {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
          margin-bottom: 28px;
          scrollbar-width: none;
        }

        .featured-brands-pills-row::-webkit-scrollbar {
          display: none;
        }

        .brand-pill-btn {
          background: #ffffff;
          color: #333333;
          border: 1px solid #e0e0e0;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .brand-pill-btn:hover {
          border-color: #111111;
        }

        .brand-pill-btn.active {
          background: #2b2b2b;
          color: #ffffff;
          border-color: #2b2b2b;
        }

        .shop-category-link {
          font-size: 13px;
          color: #111111;
          text-decoration: underline;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.15s;
        }

        .shop-category-link:hover {
          color: var(--color-turquoise-dark, #00897b);
        }

        /* Brands Grid */
        .featured-brands-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .brand-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .brand-card-img-wrap {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
          background: #e9e9e9;
          margin-bottom: 12px;
        }

        .brand-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .brand-card:hover .brand-card-img {
          transform: scale(1.05);
        }

        .brand-card-name {
          font-size: 14.5px;
          font-weight: 700;
          color: #111111;
          margin: 0 0 3px 0;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .brand-card-origin {
          font-size: 12.5px;
          color: #666666;
          margin: 0;
        }

        .shop-all-mobile-btn-wrap {
          display: none;
          margin-top: 28px;
          text-align: center;
        }

        .btn-shop-all-outline {
          background: #ffffff;
          border: 1px solid #cccccc;
          padding: 12px 24px;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          max-width: 320px;
        }

        @media (max-width: 992px) {
          .featured-brands-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .featured-brands-title {
            font-size: 1.8rem;
          }
          .shop-category-link {
            display: none;
          }
          .shop-all-mobile-btn-wrap {
            display: block;
          }
        }
      </style>

      <section class="featured-brands-section">
        <div class="featured-brands-container">
          
          <!-- Header Row -->
          <div class="featured-brands-header">
            <h2 class="featured-brands-title">Featured brands</h2>
            <a href="/shop" class="shop-category-link" id="shopFeaturedLink">Shop all featured brands</a>
          </div>

          <!-- Category Pills Row -->
          <div class="featured-brands-pills-row">
            ${categories.map(cat => `
              <button type="button" class="brand-pill-btn ${cat === activeTab ? 'active' : ''}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Brand Cards Grid -->
          <div class="featured-brands-grid">
            ${brands.map(b => `
              <div class="brand-card" onclick="if(window.navigateToRoute) window.navigateToRoute('/shop');">
                <div class="brand-card-img-wrap">
                  <img src="${b.image}" alt="${b.name}" class="brand-card-img">
                </div>
                <h3 class="brand-card-name">${b.name}</h3>
                <p class="brand-card-origin">${b.origin}</p>
              </div>
            `).join('')}
          </div>

          <!-- Mobile Shop All Button -->
          <div class="shop-all-mobile-btn-wrap">
            <button type="button" class="btn-shop-all-outline" id="mobileShopFeaturedBtn">
              Shop all featured brands
            </button>
          </div>

        </div>
      </section>
    `;
  }

  container.innerHTML = buildHTML();

  // Bind Tab Click Events
  function bindEvents() {
    const pillBtns = container.querySelectorAll('.brand-pill-btn');
    pillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-cat');
        container.innerHTML = buildHTML();
        bindEvents();
      });
    });

    const shopFeaturedLink = container.querySelector('#shopFeaturedLink');
    const mobileShopFeaturedBtn = container.querySelector('#mobileShopFeaturedBtn');

    [shopFeaturedLink, mobileShopFeaturedBtn].forEach(el => {
      if (el) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.navigateToRoute) window.navigateToRoute('/shop');
        });
      }
    });
  }

  bindEvents();
}
