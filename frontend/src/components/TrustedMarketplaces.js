/**
 * Minimalist Brand Logo Ticker Bar for Shekhani LLC
 * Displays Prominent "Trusted Brand Growth Partners" Title & Larger Brand Logos
 */

export function renderTrustedMarketplaces(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const partners = [
    {
      name: "Walmart",
      url: "https://www.walmart.com/",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538852/wallmart-removebg-preview_z2jlqj.png"
    },
    {
      name: "Amazon",
      url: "https://www.amazon.com/",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538852/amazon-removebg-preview_zl6fu1.png"
    },
    {
      name: "TikTok Shop",
      url: "https://www.tiktok.com/",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538853/tiktok-removebg-preview_s9ed08.png"
    },
    {
      name: "eBay",
      url: "https://www.ebay.com/",
      logo: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785538853/ebay-removebg-preview_lntopn.png"
    }
  ];

  container.innerHTML = `
    <section class="minimal-trusted-strip">
      <div class="minimal-trusted-container">
        <h3 class="minimal-trusted-title">Trusted Brand Growth Partners</h3>
        <div class="minimal-partners-row">
          ${partners.map(p => `
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="minimal-logo-item" title="Visit ${p.name}">
              <img src="${p.logo}" alt="${p.name} Logo" class="minimal-brand-logo">
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .minimal-trusted-strip {
        background-color: #ffffff;
        padding: 42px 24px;
        border-bottom: 1px solid #e2e8f0;
        text-align: center;
      }
      .minimal-trusted-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .minimal-trusted-title {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #64748b;
        text-transform: uppercase;
        margin: 0 0 32px 0;
      }
      .minimal-partners-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 40px;
        flex-wrap: wrap;
      }
      .minimal-logo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .minimal-brand-logo {
        height: 52px;
        width: auto;
        max-width: 180px;
        object-fit: contain;
        filter: grayscale(100%) opacity(0.75);
        transition: all 0.3s ease;
      }
      .minimal-logo-item:hover .minimal-brand-logo {
        filter: grayscale(0%) opacity(1);
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        .minimal-trusted-strip {
          padding: 22px 12px;
        }
        .minimal-trusted-title {
          font-size: 11px;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
        }
        .minimal-partners-row {
          flex-wrap: nowrap !important;
          justify-content: space-around;
          gap: 6px;
        }
        .minimal-logo-item {
          padding: 4px 6px;
          flex: 1;
        }
        .minimal-brand-logo {
          height: 30px;
          max-width: 75px;
        }
      }
    </style>
  `;
}
