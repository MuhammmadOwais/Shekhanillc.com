/**
 * Faire-Style Explore Categories Component for Shekhani LLC
 * Desktop 3-Card Slider + Mobile Stacked Banner List
 */

const categoriesData = [
  { name: "Art & Craft", slug: "/art-craft", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80" },
  { name: "Beauty & Personal Care", slug: "/beauty-personal-care", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80" },
  { name: "DIY & Tools", slug: "/diy-tools", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80" },
  { name: "Fashion", slug: "/fashion", image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&auto=format&fit=crop&q=80" },
  { name: "Golf", slug: "/golf", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=80" },
  { name: "Household & Health", slug: "/household-health", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80" },
  { name: "Home & Kitchen", slug: "/home-kitchen", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80" },
  { name: "Office Supplies", slug: "/office-supplies", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80" },
  { name: "Patio Lawn & Garden", slug: "/patio-lawn-garden", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80" },
  { name: "Pet Supplies", slug: "/pet-supplies", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&auto=format&fit=crop&q=80" },
  { name: "Toys & Games", slug: "/toys-games", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80" }
];

export function renderExploreCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentIndex = 0;
  const itemsPerView = 3;
  const totalItems = categoriesData.length;

  container.innerHTML = `
    <style>
      .explore-cats-section {
        background-color: #faf9f6;
        padding: 60px 0;
        border-bottom: 1px solid #eeeeee;
      }

      .explore-cats-container {
        width: 92%;
        max-width: 1320px;
        margin: 0 auto;
      }

      .explore-cats-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
      }

      .explore-cats-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.2rem;
        font-weight: 400;
        color: #111111;
        margin: 0;
        letter-spacing: -0.3px;
      }

      .explore-cats-controls {
        display: flex;
        gap: 8px;
      }

      .explore-arrow-btn {
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

      .explore-arrow-btn:hover {
        background: #111111;
        color: #ffffff;
        border-color: #111111;
      }

      .explore-arrow-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        background: #f5f5f5;
        color: #999999;
        border-color: #e0e0e0;
      }

      /* Desktop 3-Card Slider Track */
      .explore-slider-window {
        overflow: hidden;
        width: 100%;
      }

      .explore-slider-track {
        display: flex;
        gap: 20px;
        transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
      }

      .explore-cat-card {
        flex: 0 0 calc((100% - (20px * 2)) / 3);
        min-width: 0;
        height: 320px;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      }

      .explore-cat-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .explore-cat-card:hover .explore-cat-img {
        transform: scale(1.06);
      }

      .explore-cat-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
        display: flex;
        align-items: flex-end;
        padding: 20px 24px;
        z-index: 2;
      }

      .explore-cat-name {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.45rem;
        font-weight: 500;
        color: #ffffff;
        margin: 0;
        letter-spacing: -0.2px;
      }

      /* Mobile Stacked Banner Cards List (Matching Image 2) */
      .explore-mobile-stacked-list {
        display: none;
        flex-direction: column;
        gap: 12px;
      }

      .explore-mobile-card {
        width: 100%;
        height: 110px;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
      }

      .explore-mobile-card .explore-cat-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .explore-mobile-card .explore-cat-overlay {
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.15) 100%);
        padding: 16px 20px;
      }

      .explore-mobile-card .explore-cat-name {
        font-size: 1.25rem;
      }

      @media (max-width: 768px) {
        .explore-cats-section {
          padding: 35px 0;
        }
        .explore-cats-title {
          font-size: 1.7rem;
        }
        .explore-cats-controls {
          display: none;
        }
        .explore-slider-window {
          display: none;
        }
        .explore-mobile-stacked-list {
          display: flex;
        }
      }
    </style>

    <section class="explore-cats-section">
      <div class="explore-cats-container">
        
        <!-- Header & Arrows -->
        <div class="explore-cats-header">
          <h2 class="explore-cats-title">Explore categories</h2>
          
          <div class="explore-cats-controls">
            <button type="button" class="explore-arrow-btn" id="btnExplorePrev" aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="explore-arrow-btn" id="btnExploreNext" aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Desktop 3-Card Slider Track -->
        <div class="explore-slider-window">
          <div class="explore-slider-track" id="exploreTrack">
            ${categoriesData.map(cat => `
              <div class="explore-cat-card" data-slug="${cat.slug}">
                <img src="${cat.image}" alt="${cat.name}" class="explore-cat-img">
                <div class="explore-cat-overlay">
                  <h3 class="explore-cat-name">${cat.name}</h3>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Mobile Stacked Banner List (Image 2) -->
        <div class="explore-mobile-stacked-list">
          ${categoriesData.map(cat => `
            <div class="explore-mobile-card" data-slug="${cat.slug}">
              <img src="${cat.image}" alt="${cat.name}" class="explore-cat-img">
              <div class="explore-cat-overlay">
                <h3 class="explore-cat-name">${cat.name}</h3>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;

  // Bind Desktop Slider Actions
  const track = container.querySelector('#exploreTrack');
  const prevBtn = container.querySelector('#btnExplorePrev');
  const nextBtn = container.querySelector('#btnExploreNext');

  function updateSliderPosition() {
    if (!track) return;
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

  // Bind Card Clicks to Navigate to Category Route URL
  const cards = container.querySelectorAll('.explore-cat-card, .explore-mobile-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-slug');
      if (slug && window.navigateToRoute) {
        window.navigateToRoute(slug);
      }
    });
  });

  updateSliderPosition();
}
