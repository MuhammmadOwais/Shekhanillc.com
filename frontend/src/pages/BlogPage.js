/**
 * Faire-Style Blog Page Component for Shekhani LLC
 * Route: /blog
 * Note: Uses zero hyphen (-) signs in all displayed text content as requested.
 */

const blogArticlesData = [
  {
    id: 1,
    title: "What's new on Shekhani LLC: brand edition",
    category: "For Brands",
    date: "28 July 2026",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    excerpt: "Discover the latest platform features designed to help brand distributors scale nationwide wholesale operations seamlessly."
  },
  {
    id: 2,
    title: "Your 2026 Festive season wholesale buying guide: trends to watch for Halloween, Thanksgiving and Christmas",
    category: "Trends",
    date: "27 July 2026",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&auto=format&fit=crop&q=80",
    excerpt: "Explore consumer purchasing forecasts and stock up early on top performing product lines for holiday sales success."
  },
  {
    id: 3,
    title: "Meet the brands raising the bar this season: Our Q2 2026 Top Shop picks",
    category: "Shekhani News",
    date: "27 July 2026",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
    excerpt: "Highlighting exceptional manufacturers and suppliers leading innovation in product quality and fast fulfillment."
  },
  {
    id: 4,
    title: "5 Essential inventory management strategies for independent retail store owners",
    category: "For Retailers",
    date: "25 July 2026",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
    excerpt: "Learn how to optimize stock levels, prevent inventory stockouts, and maximize working capital efficiency."
  },
  {
    id: 5,
    title: "The ultimate guide to B2B volume pricing and profit margin calculation",
    category: "For Retailers",
    date: "20 July 2026",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    excerpt: "A complete step by step walkthrough for retailers calculating keystone pricing and bulk order discounts."
  },
  {
    id: 6,
    title: "How nationwide supply chain logistics drive rapid B2B wholesale expansion",
    category: "Events",
    date: "15 July 2026",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80",
    excerpt: "Inside Shekhani LLC warehouse distribution network ensuring fast ground shipping across all 50 states."
  }
];

export function renderBlogPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let activeCategory = "All articles";
  let searchQuery = "";

  const categories = [
    "All articles",
    "For Retailers",
    "For Brands",
    "Trends",
    "Events",
    "Shekhani News"
  ];

  function filterArticles() {
    return blogArticlesData.filter(article => {
      const matchesCat = (activeCategory === "All articles") || (article.category.toLowerCase() === activeCategory.toLowerCase());
      const matchesSearch = !searchQuery || (
        article.title.toLowerCase().includes(searchQuery) ||
        article.excerpt.toLowerCase().includes(searchQuery) ||
        article.category.toLowerCase().includes(searchQuery)
      );
      return matchesCat && matchesSearch;
    });
  }

  function renderHTML() {
    const articles = filterArticles();

    container.innerHTML = `
      <style>
        .blog-page-wrapper {
          background-color: #ffffff;
          padding: 40px 0 90px;
          min-height: 85vh;
        }

        .blog-container {
          width: 92%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Top Blog Header */
        .blog-top-header {
          margin-bottom: 24px;
        }

        .blog-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.8rem;
          font-weight: 400;
          color: #111111;
          margin: 0 0 6px 0;
          letter-spacing: -0.5px;
        }

        .blog-subtitle-link {
          font-size: 14px;
          color: #333333;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Search Input */
        .blog-search-wrap {
          margin-bottom: 40px;
          position: relative;
        }

        .blog-search-input {
          width: 100%;
          height: 48px;
          padding: 0 20px 0 46px;
          border: 1px solid #cccccc;
          border-radius: 24px;
          font-size: 14.5px;
          color: #111111;
          outline: none;
          background: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .blog-search-input:focus {
          border-color: #111111;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        }

        .blog-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #777777;
          pointer-events: none;
        }

        /* Hero Featured Article (Image 1 & Image 3) */
        .blog-featured-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 50px;
          align-items: center;
        }

        .blog-featured-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #4a150e;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .blog-featured-img-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.85;
        }

        .blog-featured-graphic-text {
          position: relative;
          z-index: 2;
          color: #ffffff;
          font-family: var(--font-serif, Georgia, serif);
        }

        .blog-featured-graphic-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          line-height: 1.1;
        }

        .blog-featured-graphic-sub {
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .blog-featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .blog-featured-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.1rem;
          font-weight: 400;
          color: #111111;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .blog-featured-date {
          font-size: 13px;
          color: #666666;
          margin-bottom: 24px;
        }

        .btn-read-more {
          align-self: flex-start;
          background: #2b2b2b;
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          font-size: 13.5px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-read-more:hover {
          background: #111111;
        }

        /* Category Filter Pills Bar (Image 2 & Image 4) */
        .blog-pills-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .blog-pill-btn {
          background: #ffffff;
          border: 1px solid #d0d0d0;
          color: #333333;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .blog-pill-btn:hover {
          border-color: #111111;
          color: #111111;
        }

        .blog-pill-btn.active {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
        }

        /* Articles Grid */
        .blog-articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .blog-article-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .blog-article-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 8px;
          overflow: hidden;
          background: #f2f2f2;
          margin-bottom: 16px;
        }

        .blog-article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .blog-article-card:hover .blog-article-img {
          transform: scale(1.05);
        }

        .blog-article-cat-badge {
          display: inline-block;
          background: #f4f4f4;
          color: #333333;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 700;
          border-radius: 4px;
          margin-bottom: 10px;
          align-self: flex-start;
        }

        .blog-article-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.35rem;
          font-weight: 400;
          color: #111111;
          margin: 0 0 10px 0;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-article-date {
          font-size: 12.5px;
          color: #777777;
          margin: 0;
        }

        @media (max-width: 992px) {
          .blog-featured-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .blog-articles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .blog-title {
            font-size: 2.1rem;
          }
          .blog-featured-title {
            font-size: 1.5rem;
          }
          .blog-articles-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .blog-pills-bar {
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 6px;
          }
        }
      </style>

      <div class="blog-page-wrapper">
        <div class="blog-container">
          
          <!-- Top Header -->
          <div class="blog-top-header">
            <h1 class="blog-title">Shekhani LLC blog</h1>
            <span class="blog-subtitle-link" id="btnWebinars">Webinars and how to videos</span>
          </div>

          <!-- Search Bar -->
          <div class="blog-search-wrap">
            <svg class="blog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" class="blog-search-input" id="blogSearchInput" placeholder="Search articles" value="${searchQuery}">
          </div>

          <!-- Hero Featured Article Card -->
          <div class="blog-featured-card">
            <div class="blog-featured-img-box">
              <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80" alt="Shekhani Market" class="blog-featured-img-bg">
              <div class="blog-featured-graphic-text">
                <h2 class="blog-featured-graphic-title">shekhani market</h2>
                <p class="blog-featured-graphic-sub">July 2026 Recap</p>
              </div>
            </div>

            <div class="blog-featured-content">
              <h2 class="blog-featured-title">
                Over 1.6 million products ordered during July's Shekhani Market as retailers stock up on plushies, ceramics, and personal care
              </h2>
              <p class="blog-featured-date">31 July 2026</p>
              <button type="button" class="btn-read-more" id="btnFeaturedReadMore">Read more</button>
            </div>
          </div>

          <!-- Category Filter Pills Bar -->
          <div class="blog-pills-bar">
            ${categories.map(cat => `
              <button type="button" class="blog-pill-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- 6 Articles Grid -->
          <div class="blog-articles-grid">
            ${articles.length === 0 ? `
              <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                <h3>No articles found matching your search.</h3>
              </div>
            ` : articles.map(art => `
              <div class="blog-article-card" data-id="${art.id}">
                <div class="blog-article-img-wrap">
                  <img src="${art.image}" alt="${art.title}" class="blog-article-img">
                </div>
                <span class="blog-article-cat-badge">${art.category}</span>
                <h3 class="blog-article-title">${art.title}</h3>
                <p class="blog-article-date">${art.date}</p>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // Search input
    const searchInput = container.querySelector('#blogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderHTML();
      });
    }

    // Category pills
    const pillBtns = container.querySelectorAll('.blog-pill-btn');
    pillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat');
        renderHTML();
      });
    });

    // Webinars & Featured Read More clicks
    container.querySelector('#btnWebinars')?.addEventListener('click', () => {
      alert("Shekhani LLC Webinars and How to Video library is currently updating. Check back soon for wholesale retailer workshops!");
    });

    container.querySelector('#btnFeaturedReadMore')?.addEventListener('click', () => {
      alert("Full Article: Over 1.6 million wholesale products were distributed across the Shekhani LLC supplier network during our July 2026 Market event!");
    });

    // Article card clicks
    container.querySelectorAll('.blog-article-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        const art = blogArticlesData.find(a => a.id === id);
        if (art) {
          alert(`Reading Article:\n\n${art.title}\n\nPublished: ${art.date} | Category: ${art.category}\n\n${art.excerpt}`);
        }
      });
    });
  }

  renderHTML();
}
