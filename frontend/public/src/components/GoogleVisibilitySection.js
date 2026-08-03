/**
 * Google & Search Engine Visibility Pillar Component for Shekhani LLC
 * Light theme section with Cloudinary graphics and compact card sizes.
 */

export function renderGoogleVisibilitySection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const pillars = [
    {
      step: "01",
      title: "Google Shopping Feed Sync",
      desc: "We configure product catalog schemas and structured data feeds so your marketplace items appear directly on Google Shopping when buyers search.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787104/Google_Shopping_Feed_Sync_vhfdq0.jpg"
    },
    {
      step: "02",
      title: "Organic SEO & Search Indexing",
      desc: "Our copywriters optimize title tags, meta descriptions, and bullet points to ensure Google crawlers rank your product listings on Page 1.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787103/Organic_SEO_Search_Indexing_anix6q.jpg"
    },
    {
      step: "03",
      title: "Cross-Marketplace Search Authority",
      desc: "High velocity sales on Amazon, Walmart, eBay, and TikTok Shop send positive algorithmic signals to Google, dominating internet search results.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787103/Cross-Marketplace_Search_Authority_ftb7fn.jpg"
    }
  ];

  container.innerHTML = `
    <section class="google-visibility-section-light">
      <div class="google-container">
        <div class="google-header">
          <span class="google-badge-light">SEARCH ENGINE & INTERNET VISIBILITY</span>
          <h2 class="google-heading-light">We Bring Your Brand to Google</h2>
          <p class="google-subheading-light">
            Marketplaces are only half the journey. We optimize your products so buyers find your brand organically across Google Search and major web search engines.
          </p>
        </div>

        <div class="google-grid">
          ${pillars.map(p => `
            <div class="google-card-light">
              <div class="card-img-wrapper">
                <img src="${p.image}" alt="${p.title}" class="google-card-img">
                <span class="google-step-pill">${p.step}</span>
              </div>
              <div class="google-card-body">
                <h3 class="google-card-title-light">${p.title}</h3>
                <p class="google-card-desc-light">${p.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .google-visibility-section-light {
        background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%), radial-gradient(circle at 50% 0%, rgba(0, 208, 132, 0.08) 0%, transparent 70%);
        background-color: #f8fafc;
        padding: 70px 24px;
        color: #0f172a;
        border-bottom: 1px solid #cbd5e1;
        position: relative;
      }
      .google-container {
        max-width: 1140px;
        margin: 0 auto;
      }
      .google-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 40px auto;
      }
      .google-badge-light {
        display: inline-block;
        font-size: 11.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00b371;
        text-transform: uppercase;
        margin-bottom: 10px;
        background: rgba(0, 179, 113, 0.1);
        padding: 5px 12px;
        border-radius: 20px;
        border: 1px solid rgba(0, 179, 113, 0.25);
      }
      .google-heading-light {
        font-size: 34px;
        font-weight: 800;
        color: #0f172a;
        letter-spacing: -0.8px;
        margin-bottom: 12px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .google-subheading-light {
        font-size: 15px;
        color: #475569;
        line-height: 1.6;
        font-weight: 400;
      }
      .google-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .google-card-light {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
      }
      .google-card-light:hover {
        border-color: #00b371;
        transform: translateY(-3px);
        box-shadow: 0 12px 25px rgba(0, 179, 113, 0.12);
      }
      .card-img-wrapper {
        position: relative;
        height: 160px;
        width: 100%;
        overflow: hidden;
        background: #e2e8f0;
      }
      .google-card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }
      .google-card-light:hover .google-card-img {
        transform: scale(1.05);
      }
      .google-step-pill {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 11px;
        font-weight: 800;
        color: #ffffff;
        background: #0f172a;
        padding: 3px 10px;
        border-radius: 12px;
      }
      .google-card-body {
        padding: 20px 18px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .google-card-title-light {
        font-size: 17px;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 8px;
        line-height: 1.35;
      }
      .google-card-desc-light {
        font-size: 13px;
        color: #64748b;
        line-height: 1.55;
        margin: 0;
      }

      @media (max-width: 900px) {
        .google-grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .google-visibility-section-light {
          padding: 40px 16px;
        }
        .google-heading-light {
          font-size: 24px;
        }
        .card-img-wrapper {
          height: 140px;
        }
      }
    </style>
  `;
}
