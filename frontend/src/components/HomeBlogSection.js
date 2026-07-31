/**
 * Faire-Style Home Blog Section Component for Shekhani LLC
 * Features Rich Maroon Background & Mobile Horizontal Swipeable Slider
 * Zero hyphen (-) characters in displayed text content as requested.
 */

const homeArticlesData = [
  {
    id: 1,
    title: "How to start a boutique: A simple six step guide",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    slug: "/blog"
  },
  {
    id: 2,
    title: "Meet the brands raising the bar this season: Our Q2 2026 Top Shop picks",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
    slug: "/blog"
  },
  {
    id: 3,
    title: "How much is enough? Sizing your opening order from a brand",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
    slug: "/blog"
  },
  {
    id: 4,
    title: "Level up your retailer conversion: what it actually takes to turn a browser into a buyer",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&auto=format&fit=crop&q=80",
    slug: "/blog"
  }
];

export function renderHomeBlogSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      /* Rich Maroon Background for Home Blog Section */
      .home-blog-section {
        background-color: #4a150e;
        color: #ffffff;
        padding: 60px 0 70px;
        border-top: 1px solid #360f0a;
        border-bottom: 1px solid #360f0a;
      }

      .home-blog-container {
        width: 92%;
        max-width: 1320px;
        margin: 0 auto;
      }

      .home-blog-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 28px;
      }

      .home-blog-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.2rem;
        font-weight: 400;
        color: #ffffff;
        margin: 0;
        letter-spacing: -0.3px;
      }

      .home-blog-visit-link {
        font-size: 13.5px;
        color: #ffffff;
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
        opacity: 0.9;
      }

      .home-blog-visit-link:hover {
        opacity: 1;
      }

      /* Desktop 4-Column Grid Layout */
      .home-blog-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
      }

      .home-blog-card {
        display: flex;
        flex-direction: column;
        cursor: pointer;
      }

      .home-blog-img-wrap {
        width: 100%;
        aspect-ratio: 16 / 11;
        border-radius: 8px;
        overflow: hidden;
        background: #360f0a;
        margin-bottom: 14px;
      }

      .home-blog-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      .home-blog-card:hover .home-blog-img {
        transform: scale(1.06);
      }

      .home-blog-card-title {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        margin: 0;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        opacity: 0.95;
      }

      /* Mobile Swipeable Slider Layout (Matching Reference Image) */
      .home-blog-mobile-cta {
        display: none;
        margin-top: 24px;
      }

      .btn-visit-blog-mobile {
        background: #ffffff;
        color: #4a150e;
        border: 1px solid #ffffff;
        padding: 10px 24px;
        font-size: 13.5px;
        font-weight: 700;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .btn-visit-blog-mobile:hover {
        background: #f8f8f8;
      }

      @media (max-width: 992px) {
        .home-blog-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
      }

      @media (max-width: 768px) {
        .home-blog-section {
          padding: 40px 0 50px;
        }

        .home-blog-title {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }

        .home-blog-header .home-blog-visit-link {
          display: none;
        }

        /* Horizontal Slider on Mobile */
        .home-blog-grid {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 8px;
        }

        .home-blog-grid::-webkit-scrollbar {
          display: none;
        }

        .home-blog-card {
          flex: 0 0 78%;
          scroll-snap-align: start;
        }

        .home-blog-mobile-cta {
          display: block;
        }
      }
    </style>

    <section class="home-blog-section">
      <div class="home-blog-container">
        
        <!-- Header -->
        <div class="home-blog-header">
          <h2 class="home-blog-title">Grow your retail business with Shekhani LLC</h2>
          <span class="home-blog-visit-link" id="btnVisitBlogTop">Visit our blog</span>
        </div>

        <!-- Cards (Slider on Mobile) -->
        <div class="home-blog-grid">
          ${homeArticlesData.map(art => `
            <div class="home-blog-card" data-slug="${art.slug}">
              <div class="home-blog-img-wrap">
                <img src="${art.image}" alt="${art.title}" class="home-blog-img">
              </div>
              <h3 class="home-blog-card-title">${art.title}</h3>
            </div>
          `).join('')}
        </div>

        <!-- Mobile CTA Button (Image 1) -->
        <div class="home-blog-mobile-cta">
          <button type="button" class="btn-visit-blog-mobile" id="btnVisitBlogBottom">Visit our blog</button>
        </div>

      </div>
    </section>
  `;

  // Bind Clicks to Navigate to Blog Page /blog
  const handleBlogClick = () => {
    if (window.navigateToRoute) window.navigateToRoute('/blog');
  };

  container.querySelector('#btnVisitBlogTop')?.addEventListener('click', handleBlogClick);
  container.querySelector('#btnVisitBlogBottom')?.addEventListener('click', handleBlogClick);

  container.querySelectorAll('.home-blog-card').forEach(card => {
    card.addEventListener('click', handleBlogClick);
  });
}
