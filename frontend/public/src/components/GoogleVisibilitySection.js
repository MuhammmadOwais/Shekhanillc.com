/**
 * Google & Search Engine Visibility Pillar Component for Shekhani LLC
 * Explains how marketplace store listings are indexed across Google Search & Google Shopping.
 */

export function renderGoogleVisibilitySection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const pillars = [
    {
      step: "01",
      title: "Google Shopping Feed Sync",
      desc: "We configure product catalog schemas and structured data feeds so your marketplace items appear directly on Google Shopping when buyers search."
    },
    {
      step: "02",
      title: "Organic SEO & Search Indexing",
      desc: "Our copywriters optimize title tags, meta descriptions, and bullet points to ensure Google crawlers rank your product listings on Page 1."
    },
    {
      step: "03",
      title: "Cross-Marketplace Search Authority",
      desc: "High velocity sales on Amazon, Walmart, eBay, and TikTok Shop send positive algorithmic signals to Google, dominating internet search results."
    }
  ];

  container.innerHTML = `
    <section class="google-visibility-section">
      <div class="google-container">
        <div class="google-header">
          <span class="google-badge">SEARCH ENGINE & INTERNET VISIBILITY</span>
          <h2 class="google-heading">We Bring Your Brand to Google</h2>
          <p class="google-subheading">
            Marketplaces are only half the journey. We optimize your products so buyers find your brand organically across Google Search and major web search engines.
          </p>
        </div>

        <div class="google-grid">
          ${pillars.map(p => `
            <div class="google-card">
              <div class="google-step-num">${p.step}</div>
              <h3 class="google-card-title">${p.title}</h3>
              <p class="google-card-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .google-visibility-section {
        background-color: #0b0f19;
        padding: 70px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .google-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .google-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 48px auto;
      }
      .google-badge {
        display: inline-block;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .google-heading {
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-bottom: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .google-subheading {
        font-size: 16px;
        color: #94a3b8;
        line-height: 1.6;
        font-weight: 400;
      }
      .google-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .google-card {
        background: #0f172a;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        padding: 32px 24px;
        transition: all 0.3s ease;
      }
      .google-card:hover {
        border-color: #00d084;
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 208, 132, 0.15);
      }
      .google-step-num {
        font-size: 14px;
        font-weight: 800;
        color: #00d084;
        background: rgba(0, 208, 132, 0.15);
        border: 1px solid rgba(0, 208, 132, 0.3);
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        margin-bottom: 18px;
      }
      .google-card-title {
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 12px;
      }
      .google-card-desc {
        font-size: 14px;
        color: #cbd5e1;
        line-height: 1.6;
      }

      @media (max-width: 900px) {
        .google-grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .google-visibility-section {
          padding: 40px 16px;
        }
        .google-heading {
          font-size: 24px;
        }
      }
    </style>
  `;
}
