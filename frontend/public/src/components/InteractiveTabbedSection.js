/**
 * InteractiveTabbedSection Component for Shekhani LLC
 * Spreetail-Style Left Vertical Nav Tabs ("Launch | Sell | Ship | Grow | Partnership | Results")
 * Mobile Overflow & Width Fixed Perfectly
 */

export function renderInteractiveTabbedSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tabData = {
    launch: {
      tag: "Launch",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.76-2.34L17.5 8.92a2.12 2.12 0 0 0-3-3l-8.24 8.24c-.84.5-1.63 1.05-2.34 1.76z"/><path d="M15 5l4 4"/></svg>`,
      title: `Choose the model that <span class="highlight-text">fits your business</span>`,
      subtitle: "Shekhani LLC offers flexible ways to partner — you pick the level of involvement that makes sense for your brand and goals.",
      cards: [
        {
          badge: "Wholesale",
          badgeType: "emerald",
          heading: "We invest in your success before you sell a single unit",
          desc: "Shekhani LLC cuts a large wholesale purchase order upfront. And because we own the inventory, your brand isn't exposed to reseller chaos.",
          features: [
            "We buy your inventory outright (Upfront PO Basis)",
            "Zero listing, channel, or hidden management fees",
            "Full pricing control & strict MAP policy enforcement",
            "Complete customer service & end-to-end returns management"
          ]
        },
        {
          badge: "Services",
          badgeType: "blue",
          heading: "Pay for what you need",
          desc: "Shekhani LLC's Services plug directly into your ecommerce strategy, allowing you to control listings and channels.",
          features: [
            "Full marketplace management across Amazon, Walmart & eBay",
            "Nationwide fulfillment & 2-day delivery network",
            "High-converting A+ content & SEO listing overhaul",
            "Targeted PPC ad management & creator marketing"
          ]
        }
      ]
    },
    sell: {
      tag: "Sell",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      title: `Omnichannel Marketplace <span class="highlight-text">Dominance</span>`,
      subtitle: "Reach millions of active buyers across Amazon, Walmart, eBay, TikTok Shop, and international channels simultaneously.",
      cards: [
        {
          badge: "Multi-Channel",
          badgeType: "emerald",
          heading: "Instant syndication across top marketplaces",
          desc: "Launch your products across multiple major sales channels without managing separate seller accounts or support reps.",
          features: [
            "Amazon FBA/FBM listing creation & Buy Box optimization",
            "Walmart Marketplace 2-day badge qualification",
            "TikTok Shop live shopping & creator affiliate integration",
            "eBay Global shipping & international catalog sync"
          ]
        },
        {
          badge: "Brand Protection",
          badgeType: "blue",
          heading: "Total price integrity & MAP enforcement",
          desc: "We eliminate rogue unauthorized resellers and price undercutters to protect your long-term brand equity.",
          features: [
            "24/7 automated monitoring for unauthorized listing hijackers",
            "Legal test buys & cease-and-desist enforcement",
            "Strict MAP (Minimum Advertised Price) compliance",
            "Unified brand messaging & verified buy-box control"
          ]
        }
      ]
    },
    ship: {
      tag: "Ship",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      title: `Fast Nationwide & Global <span class="highlight-text">Fulfillment</span>`,
      subtitle: "Deliver products to 99% of US households within 2 days through our strategically located distribution hubs.",
      cards: [
        {
          badge: "Fulfillment",
          badgeType: "emerald",
          heading: "2-Day shipping nationwide with zero stress",
          desc: "Our automated warehouse network picks, packs, and ships your orders at scale meeting fast-shipping criteria.",
          features: [
            "99% 2-Day ground delivery coverage across the US",
            "Automated order routing & real-time inventory tracking",
            "Temperature-controlled & bulk pallet storage options",
            "Seamless carrier integration (FedEx, UPS, USPS)"
          ]
        },
        {
          badge: "Reverse Logistics",
          badgeType: "blue",
          heading: "Hassle-free returns & inventory care",
          desc: "We process return logistics, inspect returned items, and repackage viable goods to maximize product recovery.",
          features: [
            "Automated return inspection & quality triage",
            "Restocking & refurbishment of sellable items",
            "Zero operational burden on your internal team",
            "Transparent monthly inventory health audits"
          ]
        }
      ]
    },
    grow: {
      tag: "Grow",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      title: `Accelerate Ranking & <span class="highlight-text">Paid Ads ROI</span>`,
      subtitle: "Drive exponential revenue growth through data-driven PPC campaigns and high-converting listing graphics.",
      cards: [
        {
          badge: "Performance Marketing",
          badgeType: "emerald",
          heading: "High-return targeted ad engine",
          desc: "Our media team runs optimized Amazon Sponsored Products, Walmart Connect, and TikTok Shop ads.",
          features: [
            "Keyword research & organic search rank acceleration",
            "ACOS/ROAS optimization to eliminate wasted ad spend",
            "Influencer & creator affiliate marketing campaigns",
            "Off-Amazon traffic drivers to boost listing velocity"
          ]
        },
        {
          badge: "Content Upgrade",
          badgeType: "blue",
          heading: "Studio-quality visual & conversion optimization",
          desc: "We transform low-converting product pages into premium storefronts with high-converting photography and copy.",
          features: [
            "Professional lifestyle & studio product photography",
            "Custom A+ Content / Premium EBC modules",
            "Infographic feature callouts & video creation",
            "Conversion rate optimization (CRO) A/B testing"
          ]
        }
      ]
    },
    partnership: {
      tag: "Your Partnership",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: `A True Shared-Risk <span class="highlight-text">Partnership</span>`,
      subtitle: "We align our incentives directly with yours — zero upfront fees, zero hidden retainers, 100% dedicated to growth.",
      cards: [
        {
          badge: "Aligned Success",
          badgeType: "emerald",
          heading: "Zero financial risk for your brand",
          desc: "Unlike traditional agencies that charge high monthly retainers, our business model succeeds when your sales grow.",
          features: [
            "No setup fees, retainers, or hidden agency costs",
            "Shared inventory risk model for complete peace of mind",
            "Long-term brand value creation & equity protection",
            "Flexible contract terms tailored to your growth goals"
          ]
        },
        {
          badge: "Dedicated Team",
          badgeType: "blue",
          heading: "Direct access to senior e-commerce strategists",
          desc: "Get a dedicated team of marketplace experts and advertising specialists working exclusively on your catalog.",
          features: [
            "Weekly performance updates & strategic growth calls",
            "Real-time sales & inventory forecasting dashboards",
            "Dedicated brand manager as your single point of contact",
            "Proactive market opportunity analysis & expansion strategy"
          ]
        }
      ]
    },
    results: {
      tag: "Results",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      title: `Proven Scaling <span class="highlight-text">Milestones</span>`,
      subtitle: "See how our partner brands achieve 3x to 10x year-over-year revenue expansion within the first 90 days.",
      cards: [
        {
          badge: "Case Studies",
          badgeType: "emerald",
          heading: "300%+ Average YoY Sales Growth",
          desc: "Our listing optimization and ad engine consistently turn undiscovered brands into global category leaders.",
          features: [
            "300%+ average revenue growth in first 12 months",
            "Over 1M+ units shipped annually across marketplaces",
            "Top 1% seller rating on Amazon & Walmart Marketplace",
            "99.4% on-time delivery & customer satisfaction score"
          ]
        },
        {
          badge: "Scalability",
          badgeType: "blue",
          heading: "Seamless global market expansion",
          desc: "We take care of localized listings, international VAT compliance, cross-border shipping, and customer support.",
          features: [
            "Instant access to US, UK, Canada & Europe markets",
            "Localized language translation & cultural copywriting",
            "Cross-border tax & international customs clearance",
            "Proven playbook for rapid international brand launches"
          ]
        }
      ]
    }
  };

  container.innerHTML = `
    <section class="tabbed-growth-section" id="interactiveTabbedSection">
      <div class="tabbed-section-container">
        
        <!-- Left Vertical Navigation Tabs -->
        <aside class="tabbed-nav-sidebar">
          <div class="tabbed-nav-list" role="tablist">
            <button class="tab-nav-btn active" data-tab="launch">
              <span class="tab-btn-icon">${tabData.launch.icon}</span>
              <span class="tab-btn-text">Launch</span>
            </button>

            <button class="tab-nav-btn" data-tab="sell">
              <span class="tab-btn-icon">${tabData.sell.icon}</span>
              <span class="tab-btn-text">Sell</span>
            </button>

            <button class="tab-nav-btn" data-tab="ship">
              <span class="tab-btn-icon">${tabData.ship.icon}</span>
              <span class="tab-btn-text">Ship</span>
            </button>

            <button class="tab-nav-btn" data-tab="grow">
              <span class="tab-btn-icon">${tabData.grow.icon}</span>
              <span class="tab-btn-text">Grow</span>
            </button>

            <button class="tab-nav-btn" data-tab="partnership">
              <span class="tab-btn-text">Your Partnership</span>
            </button>

            <button class="tab-nav-btn" data-tab="results">
              <span class="tab-btn-text">Results</span>
            </button>
          </div>

          <div class="sidebar-action-wrap">
            <button class="sidebar-cta-btn" id="sidebarGetStartedBtn">Get Started</button>
          </div>
        </aside>

        <!-- Right Main Tab Content Panel -->
        <main class="tabbed-content-panel">
          <div class="tabbed-header-area" id="tabbedHeaderArea">
            <!-- Dynamic Header Rendered via JS -->
          </div>

          <div class="tabbed-cards-grid" id="tabbedCardsGrid">
            <!-- Dynamic Cards Rendered via JS -->
          </div>
        </main>

      </div>
    </section>

    <style>
      .tabbed-growth-section {
        background-color: #06090e;
        padding: 60px 24px;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        overflow: hidden;
        max-width: 100%;
        box-sizing: border-box;
      }
      .tabbed-section-container {
        max-width: 1320px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 40px;
        box-sizing: border-box;
      }

      /* Left Sidebar Nav Tabs */
      .tabbed-nav-sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        padding-right: 24px;
      }
      .tabbed-nav-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .tab-nav-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        background: transparent;
        border: none;
        border-left: 3px solid transparent;
        padding: 12px 16px;
        color: #94a3b8;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        text-align: left;
        border-radius: 0 8px 8px 0;
        transition: all 0.25s ease;
      }
      .tab-nav-btn:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.03);
      }
      .tab-nav-btn.active {
        color: #ffffff;
        border-left-color: #00d084;
        background: rgba(0, 208, 132, 0.08);
      }
      .tab-btn-icon {
        display: flex;
        align-items: center;
        color: #00d084;
      }
      .sidebar-action-wrap {
        padding-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }
      .sidebar-cta-btn {
        width: 100%;
        background: transparent;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 10px;
        border-radius: 8px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .sidebar-cta-btn:hover {
        border-color: #00d084;
        color: #00d084;
        background: rgba(0, 208, 132, 0.1);
      }

      /* Right Content Panel */
      .tabbed-content-panel {
        display: flex;
        flex-direction: column;
        gap: 32px;
        box-sizing: border-box;
      }
      .tabbed-header-area {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 30px;
      }
      .tabbed-header-left {
        max-width: 600px;
      }
      .tab-tag-badge {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .tabbed-main-title {
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
        margin: 0;
        line-height: 1.15;
        letter-spacing: -1px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .tabbed-main-title .highlight-text {
        color: #ffffff;
        font-weight: 800;
      }
      .tabbed-subtitle {
        font-size: 14.5px;
        color: #94a3b8;
        line-height: 1.55;
        max-width: 420px;
        margin: 0;
      }

      /* Comparison Cards Grid */
      .tabbed-cards-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        box-sizing: border-box;
      }
      .model-card {
        border-radius: 18px;
        padding: 26px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease;
        box-sizing: border-box;
      }
      .model-card.emerald-theme {
        background: #091312;
        border: 1px solid rgba(0, 208, 132, 0.25);
      }
      .model-card.emerald-theme:hover {
        border-color: #00d084;
        box-shadow: 0 12px 30px rgba(0, 208, 132, 0.15);
      }
      .model-card.blue-theme {
        background: #09101d;
        border: 1px solid rgba(59, 130, 246, 0.25);
      }
      .model-card.blue-theme:hover {
        border-color: #3b82f6;
        box-shadow: 0 12px 30px rgba(59, 130, 246, 0.15);
      }
      .model-card-badge {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 4px 11px;
        border-radius: 20px;
        display: inline-block;
        margin-bottom: 14px;
        align-self: flex-start;
      }
      .emerald-theme .model-card-badge {
        background: rgba(0, 208, 132, 0.15);
        color: #00d084;
        border: 1px solid rgba(0, 208, 132, 0.3);
      }
      .blue-theme .model-card-badge {
        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;
        border: 1px solid rgba(59, 130, 246, 0.3);
      }
      .model-card-heading {
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 10px 0;
        line-height: 1.25;
        letter-spacing: -0.3px;
      }
      .model-card-desc {
        font-size: 13px;
        color: #cbd5e1;
        line-height: 1.5;
        margin: 0 0 20px 0;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .model-feature-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .model-feature-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 12.5px;
        color: #e2e8f0;
        line-height: 1.4;
      }
      .feature-check-icon {
        flex-shrink: 0;
        margin-top: 1px;
      }
      .emerald-theme .feature-check-icon {
        color: #00d084;
      }
      .blue-theme .feature-check-icon {
        color: #60a5fa;
      }

      /* Mobile & Tablet Responsive Fixes */
      @media (max-width: 1024px) {
        .tabbed-growth-section {
          padding: 36px 14px !important;
        }
        .tabbed-section-container {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          overflow-x: hidden !important;
        }
        .tabbed-nav-sidebar {
          border-right: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding-right: 0 !important;
          padding-bottom: 10px !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }
        .tabbed-nav-list {
          flex-direction: row !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
          padding-bottom: 6px !important;
          gap: 8px !important;
          width: 100% !important;
          max-width: 100% !important;
          scrollbar-width: none !important;
        }
        .tabbed-nav-list::-webkit-scrollbar {
          display: none !important;
        }
        .tab-nav-btn {
          border-left: none !important;
          border-bottom: 3px solid transparent !important;
          border-radius: 8px 8px 0 0 !important;
          white-space: nowrap !important;
          padding: 8px 12px !important;
          font-size: 13.5px !important;
          flex-shrink: 0 !important;
        }
        .tab-nav-btn.active {
          border-bottom-color: #00d084 !important;
          border-left-color: transparent !important;
        }
        .sidebar-action-wrap {
          display: none !important;
        }
        .tabbed-content-panel {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
          gap: 18px !important;
        }
        .tabbed-header-area {
          flex-direction: column !important;
          gap: 8px !important;
          width: 100% !important;
        }
        .tabbed-main-title {
          font-size: 22px !important;
          line-height: 1.25 !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        .tabbed-subtitle {
          font-size: 12.5px !important;
          line-height: 1.45 !important;
          max-width: 100% !important;
        }
        .tabbed-cards-grid {
          grid-template-columns: 1fr !important;
          gap: 14px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .model-card {
          padding: 16px 14px !important;
          border-radius: 14px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .model-card-heading {
          font-size: 17px !important;
          margin-bottom: 8px !important;
          word-break: break-word !important;
        }
        .model-card-desc {
          font-size: 12px !important;
          line-height: 1.45 !important;
          margin-bottom: 14px !important;
          padding-bottom: 12px !important;
        }
        .model-feature-item {
          font-size: 11.5px !important;
        }
      }
    </style>
  `;

  // Function to render tab contents
  function updateTabContent(tabKey) {
    const data = tabData[tabKey];
    if (!data) return;

    const headerArea = container.querySelector('#tabbedHeaderArea');
    const cardsGrid = container.querySelector('#tabbedCardsGrid');

    if (headerArea) {
      headerArea.innerHTML = `
        <div class="tabbed-header-left">
          <div class="tab-tag-badge">${data.icon || ''} ${data.tag}</div>
          <h2 class="tabbed-main-title">${data.title}</h2>
        </div>
        <p class="tabbed-subtitle">${data.subtitle}</p>
      `;
    }

    if (cardsGrid) {
      cardsGrid.innerHTML = data.cards.map(c => `
        <div class="model-card ${c.badgeType}-theme">
          <div>
            <span class="model-card-badge">${c.badge}</span>
            <h3 class="model-card-heading">${c.heading}</h3>
            <p class="model-card-desc">${c.desc}</p>
          </div>

          <ul class="model-feature-list">
            ${c.features.map(f => `
              <li class="model-feature-item">
                <svg class="feature-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('');
    }
  }

  // Initial tab load
  updateTabContent('launch');

  // Bind tab click events
  const tabBtns = container.querySelectorAll('.tab-nav-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabKey = btn.getAttribute('data-tab');
      updateTabContent(tabKey);
    });
  });

  // Bind Sidebar Get Started CTA
  container.querySelector('#sidebarGetStartedBtn')?.addEventListener('click', () => {
    if (window.navigateToRoute) {
      window.navigateToRoute('/partner-form');
      const target = document.getElementById('partnerFormContainer');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
