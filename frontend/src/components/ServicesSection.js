/**
 * ServicesSection Component for Shekhani LLC
 * Desktop: 4 Compact Square Blocks in 1 Horizontal Line
 * Mobile: 2 Blocks Per Line Side-by-Side
 * Emojis Totally Removed
 */

export function renderServicesSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const services = [
    {
      id: "product-transformation",
      title: "Product Transformation",
      badge: "VISUAL & CONTENT UPGRADE",
      desc: "We upgrade low-converting listings with studio-quality graphics, photos, and optimized descriptions.",
      img: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785540708/producttransformation_stouwl.jpg",
      link: "/product-transformation"
    },
    {
      id: "full-marketplace-management",
      title: "Full Marketplace Management",
      badge: "MULTI-CHANNEL SALES",
      desc: "We launch and manage your brand across Amazon, Walmart, eBay, TikTok Shop, and more.",
      img: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785540707/Full_Marketplace_Management_voidgi.jpg",
      link: "/full-marketplace-management"
    },
    {
      id: "targeted-marketing-ads",
      title: "Targeted Marketing & Ads",
      badge: "PAID ADS & TRAFFIC",
      desc: "We run high-return ad campaigns and creator partnerships to rank your products higher in search.",
      img: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785540708/Targeted_Marketing_Ads_j15w2l.jpg",
      link: "/targeted-marketing-ads"
    },
    {
      id: "global-market-expansion",
      title: "Global Market Expansion",
      badge: "INTERNATIONAL EXPANSION",
      desc: "We handle international logistics, localization, and regional marketplace setup worldwide.",
      img: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785540708/Global_Market_Expansion_irftfd.jpg",
      link: "/global-market-expansion"
    }
  ];

  container.innerHTML = `
    <section class="services-gradient-section" id="servicesSection">
      <div class="services-glow-bg"></div>

      <div class="services-section-container">
        <div class="services-section-header">
          <span class="services-green-badge">OUR CORE CAPABILITIES</span>
          <h2 class="services-main-title">What We Do For Your Brand</h2>
          <p class="services-main-subtitle">
            We handle everything required to turn your products into global top-sellers.
          </p>
        </div>

        <div class="services-four-grid">
          ${services.map(s => `
            <div class="service-card-item" data-link="${s.link}">
              <div class="service-card-img-wrap">
                <img src="${s.img}" alt="${s.title}" class="service-card-bg-img">
                <div class="service-card-overlay"></div>
                
                <div class="service-card-content">
                  <div class="service-card-icon-pill">
                    <span class="service-badge">${s.badge}</span>
                  </div>

                  <h3 class="service-card-title">${s.title}</h3>
                  <p class="service-card-desc">${s.desc}</p>
                  
                  <div class="service-card-action">
                    <span class="service-learn-more">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .services-gradient-section {
        position: relative;
        background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%);
        padding: 55px 24px;
        overflow: hidden;
      }
      .services-glow-bg {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 350px;
        background: radial-gradient(circle, rgba(0, 208, 132, 0.14) 0%, rgba(16, 185, 129, 0.04) 50%, rgba(0, 0, 0, 0) 80%);
        filter: blur(60px);
        pointer-events: none;
      }
      .services-section-container {
        position: relative;
        max-width: 1320px;
        margin: 0 auto;
        z-index: 10;
      }
      .services-section-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 32px auto;
      }
      .services-green-badge {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #059669;
        text-transform: uppercase;
        background: #dcfce7;
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 10px;
        border: 1px solid #86efac;
      }
      .services-main-title {
        font-size: 34px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .services-main-subtitle {
        font-size: 15px;
        color: #475569;
        line-height: 1.5;
        margin: 0;
      }

      /* Desktop Layout: 4 blocks in 1 single horizontal row */
      .services-four-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
      }
      .service-card-item {
        cursor: pointer;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
      }
      .service-card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 30px rgba(0, 208, 132, 0.2);
      }
      .service-card-img-wrap {
        position: relative;
        height: 250px;
        width: 100%;
        border-radius: 16px;
        overflow: hidden;
        background: #0f172a;
      }
      .service-card-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .service-card-item:hover .service-card-bg-img {
        transform: scale(1.08);
      }
      .service-card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(5, 8, 14, 0.08) 0%, rgba(5, 8, 14, 0.65) 45%, rgba(5, 8, 14, 0.95) 100%);
        transition: opacity 0.3s ease;
      }
      .service-card-item:hover .service-card-overlay {
        background: linear-gradient(180deg, rgba(0, 208, 132, 0.15) 0%, rgba(5, 8, 14, 0.75) 40%, rgba(5, 8, 14, 0.98) 100%);
      }
      .service-card-content {
        position: absolute;
        inset: 0;
        padding: 18px 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 10;
        color: #ffffff;
      }
      .service-card-icon-pill {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .service-badge {
        font-size: 8px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #00d084;
        background: rgba(0, 208, 132, 0.22);
        border: 1px solid rgba(0, 208, 132, 0.45);
        padding: 3px 7px;
        border-radius: 4px;
        text-transform: uppercase;
      }
      .service-card-title {
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 6px 0;
        line-height: 1.25;
        letter-spacing: -0.2px;
      }
      .service-card-desc {
        font-size: 11px;
        color: #cbd5e1;
        line-height: 1.4;
        margin: 0 0 10px 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .service-card-action {
        display: flex;
        align-items: center;
      }
      .service-learn-more {
        font-size: 11px;
        font-weight: 700;
        color: #00d084;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: gap 0.25s ease;
      }
      .service-card-item:hover .service-learn-more {
        gap: 7px;
        color: #ffffff;
      }

      /* Mobile Layout: 2 blocks per line (side-by-side) */
      @media (max-width: 900px) {
        .services-four-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
        }
        .services-gradient-section {
          padding: 36px 14px !important;
        }
        .services-main-title {
          font-size: 24px !important;
        }
        .services-main-subtitle {
          font-size: 13px !important;
        }
        .service-card-img-wrap {
          height: 200px !important;
        }
        .service-card-content {
          padding: 12px 10px !important;
        }
        .service-card-title {
          font-size: 13.5px !important;
          margin-bottom: 4px !important;
        }
        .service-card-desc {
          font-size: 10px !important;
          line-height: 1.3 !important;
          margin-bottom: 6px !important;
        }
        .service-badge {
          font-size: 7px !important;
          padding: 2px 5px !important;
        }
        .service-learn-more {
          font-size: 9.5px !important;
        }
      }
    </style>
  `;

  // Bind Card Click Events
  container.querySelectorAll('.service-card-item').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link && window.navigateToRoute) {
        window.navigateToRoute(link);
      }
    });
  });
}
