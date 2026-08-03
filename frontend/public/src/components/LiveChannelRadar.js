/**
 * Interactive Omnichannel Retail Ecosystem Component for Shekhani LLC
 * Clean, professional dark theme layout without emojis or extra icons.
 * Desktop: Squared aspect ratio cards with full dark background.
 * Mobile: Horizontal touch swipe slider with square cards.
 */

export function renderLiveChannelRadar(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const channels = [
    {
      name: "Amazon FBA (US, UK, EU, UAE)",
      status: "Connected & Active",
      ping: "0.8s Sync",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538852/amazon-removebg-preview_zl6fu1.png"
    },
    {
      name: "Walmart Marketplace & WFS",
      status: "Connected & Active",
      ping: "1.2s Sync",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538852/wallmart-removebg-preview_z2jlqj.png"
    },
    {
      name: "TikTok Shop Commerce",
      status: "Connected & Active",
      ping: "Realtime",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538853/tiktok-removebg-preview_s9ed08.png"
    },
    {
      name: "eBay Global Network",
      status: "Connected & Active",
      ping: "1.5s Sync",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538853/ebay-removebg-preview_lntopn.png"
    }
  ];

  container.innerHTML = `
    <section class="channel-radar-section">
      <div class="radar-container">
        <div class="radar-header">
          <span class="radar-badge">OMNICHANNEL RETAIL ECOSYSTEM</span>
          <h2 class="radar-heading">Single-Point Distribution. Global Marketplace Execution.</h2>
          <p class="radar-subheading">
            Our unified logistics API synchronizes catalog data, inventory levels, pricing compliance, and 2-day fulfillment across all major global selling platforms.
          </p>
        </div>

        <div class="radar-grid">
          ${channels.map(c => `
            <div class="radar-card">
              <div class="radar-card-top">
                <img src="${c.logo}" alt="${c.name} Logo" class="channel-logo ${c.name.includes('Walmart') || c.name.includes('eBay') ? 'channel-logo-color' : ''}">
                <div class="live-status-pill">
                  <span class="pulse-dot"></span>
                  ${c.status}
                </div>
              </div>
              <div class="radar-card-body">
                <div class="channel-name">${c.name}</div>
                <div class="channel-meta">
                  <span class="meta-label">Inventory Sync Rate:</span>
                  <span class="meta-value">${c.ping}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .channel-radar-section {
        background-color: #05070a;
        padding: 80px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .radar-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .radar-header {
        text-align: center;
        max-width: 780px;
        margin: 0 auto 50px auto;
      }
      .radar-badge {
        display: inline-block;
        font-size: 11.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .radar-heading {
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-bottom: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .radar-subheading {
        font-size: 16px;
        color: #94a3b8;
        line-height: 1.6;
      }
      .radar-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .radar-card {
        background: #0f172a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 24px 20px;
        aspect-ratio: 1 / 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.35s ease;
      }
      .radar-card:hover {
        border-color: #00d084;
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 208, 132, 0.15);
      }
      .radar-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .channel-logo {
        height: 38px;
        width: auto;
        max-width: 110px;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }
      .channel-logo-color {
        filter: none !important;
      }
      .live-status-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 10.5px;
        font-weight: 700;
        background: rgba(0, 208, 132, 0.12);
        color: #00d084;
        border: 1px solid rgba(0, 208, 132, 0.3);
        padding: 5px 10px;
        border-radius: 20px;
        white-space: nowrap;
      }
      .pulse-dot {
        width: 6px;
        height: 6px;
        background-color: #00d084;
        border-radius: 50%;
        box-shadow: 0 0 8px #00d084;
      }
      .radar-card-body {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .channel-name {
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.35;
      }
      .channel-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 12px;
      }
      .meta-label {
        color: #94a3b8;
      }
      .meta-value {
        color: #00d084;
        font-weight: 700;
      }

      @media (max-width: 1024px) {
        .radar-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .channel-radar-section {
          padding: 40px 16px;
        }
        .radar-heading {
          font-size: 24px;
        }
        .radar-subheading {
          font-size: 13px;
        }
        .radar-grid {
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory;
          gap: 14px;
          padding-bottom: 14px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .radar-grid::-webkit-scrollbar {
          display: none;
        }
        .radar-card {
          flex: 0 0 78%;
          max-width: 270px;
          aspect-ratio: 1 / 1 !important;
          scroll-snap-align: start;
          padding: 20px 16px;
        }
        .channel-logo {
          height: 30px;
        }
        .channel-name {
          font-size: 14px;
        }
        .channel-meta {
          font-size: 11px;
        }
      }
    </style>
  `;
}
