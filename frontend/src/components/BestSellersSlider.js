/**
 * Faire-Style Bestsellers Slider Component for Shekhani LLC
 * Displays 6 items at a time on desktop with smooth left/right slider controls
 */
import { renderProductModal } from './ProductModal.js';

const bestSellersData = [
  {
    id: 101,
    name: "8oz Goat Milk Lotion",
    brand: "Simplified Soap",
    price: 18.00,
    rating: 5.0,
    reviews: 475,
    category: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    description: "Nourishing goat milk body lotion crafted with natural botanicals for deep skin hydration.",
    sku: "SKU-BEST-01"
  },
  {
    id: 102,
    name: "Birdie 3.0 Personal Alarm",
    brand: "She's Birdie",
    price: 29.00,
    rating: 4.9,
    reviews: 247,
    category: "Household & Health",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    description: "Personal safety siren device with loud 130dB alarm and flashing strobe light.",
    sku: "SKU-BEST-02"
  },
  {
    id: 103,
    name: "Finger Puppets Sensory Play Set",
    brand: "The Winding Road",
    price: 22.00,
    rating: 5.0,
    reviews: 928,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
    description: "Handcrafted wool felt animal finger puppets set for interactive storytelling and sensory play.",
    sku: "SKU-BEST-03"
  },
  {
    id: 104,
    name: "Teakwood & Tobacco Soy Candle",
    brand: "P.F. Candle Co.",
    price: 24.00,
    rating: 4.9,
    reviews: 613,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80",
    description: "Hand-poured 100% soy wax candle in amber glass jar featuring leather, teakwood, and orange notes.",
    sku: "SKU-BEST-04"
  },
  {
    id: 105,
    name: "Sun Moon Star Patchwork Pants",
    brand: "Mello",
    price: 48.00,
    rating: 4.9,
    reviews: 249,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&auto=format&fit=crop&q=80",
    description: "Bohemian cotton canvas trousers featuring celestial sun, moon, and star embroidery.",
    sku: "SKU-BEST-05"
  },
  {
    id: 106,
    name: "Mini Crystal Bracelet Assortment 4mm",
    brand: "GeoCentral",
    price: 14.00,
    rating: 4.8,
    reviews: 444,
    category: "Art & Craft",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&auto=format&fit=crop&q=80",
    description: "Genuine gemstone bead elastic bracelets pack with healing crystal properties.",
    sku: "SKU-BEST-06"
  },
  {
    id: 107,
    name: "Snap Leash 1/2\" x 6' Durable Rope",
    brand: "Mendota Pet",
    price: 19.00,
    rating: 5.0,
    reviews: 83,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80",
    description: "Heavy-duty waterproof braided rope dog leash with brass snap hook for active walks.",
    sku: "SKU-BEST-07"
  },
  {
    id: 108,
    name: "Wildflowers Assorted Bath Sponge Pack",
    brand: "Spongellé",
    price: 16.00,
    rating: 4.8,
    reviews: 1530,
    category: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    description: "Body wash infused buffer sponges emitting floral botanical fragrances for 14+ washes.",
    sku: "SKU-BEST-08"
  },
  {
    id: 109,
    name: "Precision Laser Golf Rangefinder",
    brand: "Tour Tech Golf",
    price: 89.00,
    rating: 4.9,
    reviews: 312,
    category: "Golf",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&auto=format&fit=crop&q=80",
    description: "Waterproof slope measurement rangefinder with flag lock vibration for golfers.",
    sku: "SKU-BEST-09"
  },
  {
    id: 110,
    name: "Metal Mesh Desk Storage Organizer",
    brand: "Artisan Office",
    price: 11.00,
    rating: 4.9,
    reviews: 780,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    description: "Multi-drawer desktop organizer for pens, paper clips, mail, and stationary supplies.",
    sku: "SKU-BEST-10"
  }
];

export function renderBestSellersSlider(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentIndex = 0;
  const itemsPerView = 6;
  const totalItems = bestSellersData.length;

  container.innerHTML = `
    <style>
      .bestsellers-section {
        background-color: #ffffff;
        padding: 50px 0 60px;
        border-bottom: 1px solid #eeeeee;
      }

      .bestsellers-container {
        width: 92%;
        max-width: 1320px;
        margin: 0 auto;
        position: relative;
      }

      .bestsellers-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
      }

      .bestsellers-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.1rem;
        font-weight: 400;
        color: #111111;
        margin: 0;
        letter-spacing: -0.3px;
      }

      /* Slider Controls */
      .bestsellers-controls {
        display: flex;
        gap: 8px;
      }

      .bestsellers-arrow-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid #d0d0d0;
        background: #ffffff;
        color: #111111;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      }

      .bestsellers-arrow-btn:hover {
        background: #111111;
        color: #ffffff;
        border-color: #111111;
      }

      .bestsellers-arrow-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        background: #f5f5f5;
        color: #999999;
        border-color: #e0e0e0;
      }

      /* Slider Track Window */
      .bestsellers-slider-window {
        overflow: hidden;
        width: 100%;
      }

      .bestsellers-slider-track {
        display: flex;
        gap: 16px;
        transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
      }

      /* Product Card in Slider */
      .bestseller-card {
        flex: 0 0 calc((100% - (16px * 5)) / 6);
        min-width: 0;
        display: flex;
        flex-direction: column;
        cursor: pointer;
      }

      .bestseller-img-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        overflow: hidden;
        background: #f2f2f2;
        margin-bottom: 12px;
      }

      .bestseller-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.35s ease;
      }

      .bestseller-card:hover .bestseller-img {
        transform: scale(1.05);
      }

      .bestseller-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #ffffff;
        color: #111111;
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 700;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        z-index: 2;
      }

      .bestseller-price {
        font-size: 14px;
        font-weight: 800;
        color: #111111;
        margin: 0 0 4px 0;
      }

      .bestseller-name {
        font-size: 13.5px;
        font-weight: 600;
        color: #222222;
        margin: 0 0 3px 0;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .bestseller-brand {
        font-size: 12px;
        color: #666666;
        margin: 0 0 6px 0;
      }

      .bestseller-rating {
        font-size: 12px;
        color: #444444;
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 0;
      }

      .bestseller-star {
        color: #111111;
        font-size: 11px;
      }

      @media (max-width: 1200px) {
        .bestseller-card {
          flex: 0 0 calc((100% - (16px * 3)) / 4);
        }
      }

      @media (max-width: 768px) {
        .bestsellers-section {
          padding: 35px 0 45px;
        }
        .bestsellers-title {
          font-size: 1.6rem;
        }
        .bestsellers-slider-track {
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }
        .bestsellers-slider-track::-webkit-scrollbar {
          display: none;
        }
        .bestseller-card {
          flex: 0 0 calc((100% - 12px) / 2.2);
          scroll-snap-align: start;
        }
        .bestsellers-controls {
          display: none;
        }
      }
    </style>

    <section class="bestsellers-section">
      <div class="bestsellers-container">
        
        <!-- Header & Arrows -->
        <div class="bestsellers-header">
          <h2 class="bestsellers-title">Bestsellers you might like</h2>
          
          <div class="bestsellers-controls">
            <button type="button" class="bestsellers-arrow-btn" id="btnBestsellerPrev" aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="bestsellers-arrow-btn" id="btnBestsellerNext" aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Slider Window -->
        <div class="bestsellers-slider-window">
          <div class="bestsellers-slider-track" id="bestsellerTrack">
            ${bestSellersData.map(item => `
              <div class="bestseller-card" data-id="${item.id}">
                <div class="bestseller-img-wrap">
                  <span class="bestseller-badge">Bestseller</span>
                  <img src="${item.image}" alt="${item.name}" class="bestseller-img">
                </div>
                <p class="bestseller-price">US$ ${item.price.toFixed(2)}</p>
                <h3 class="bestseller-name">${item.name}</h3>
                <p class="bestseller-brand">${item.brand}</p>
                <p class="bestseller-rating">
                  <span class="bestseller-star">★</span>
                  <strong>${item.rating.toFixed(1)}</strong> (${item.reviews})
                </p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;

  // Bind Slider Actions
  const track = container.querySelector('#bestsellerTrack');
  const prevBtn = container.querySelector('#btnBestsellerPrev');
  const nextBtn = container.querySelector('#btnBestsellerNext');

  function updateSliderPosition() {
    if (!track) return;
    const cardWidthPercentage = 100 / itemsPerView;
    const offset = -(currentIndex * (100 / itemsPerView));
    track.style.transform = `translateX(${offset}%)`;

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= (totalItems - itemsPerView);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < (totalItems - itemsPerView)) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  }

  // Bind Product Card Clicks to Open Product Modal
  const cards = container.querySelectorAll('.bestseller-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      const product = bestSellersData.find(p => p.id === id);
      if (product) {
        renderProductModal('productModal', product, (added) => {
          alert(`Added "${added.name}" to your order query!`);
        });
      }
    });
  });

  updateSliderPosition();
}
