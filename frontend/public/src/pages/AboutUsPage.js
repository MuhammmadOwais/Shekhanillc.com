/**
 * Corporate Level About Us Page Component for Shekhani LLC
 * Route: /about
 * Light B2B Theme: Hero, Stats Bar, Mission & Vision, 4 Pillars & Partner CTA
 */

export function renderAboutUsPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="about-page-wrapper">
      <!-- Light B2B Hero Section -->
      <section class="about-hero-section">
        <div class="about-hero-container">
          <span class="about-hero-tag">WHO WE ARE</span>
          <h1 class="about-hero-title">Global Brand Scaling & Marketplace Growth Engine</h1>
          <p class="about-hero-sub">
            Shekhani LLC partners with premium brands to expand their footprint across Amazon, Walmart, eBay, TikTok Shop, and international distribution networks. We invest upfront, manage end-to-end operations, and only win when your brand grows.
          </p>
        </div>
      </section>

      <!-- Key Metrics Stat Bar -->
      <div class="about-stats-bar">
        <div class="stat-item">
          <h3 class="stat-number">$0</h3>
          <p class="stat-label">Upfront Fee (100% Shared Risk)</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">300%+</h3>
          <p class="stat-label">Average YoY Sales Growth</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">1M+</h3>
          <p class="stat-label">Units Shipped Annually</p>
        </div>
        <div class="stat-item">
          <h3 class="stat-number">99.4%</h3>
          <p class="stat-label">On-Time Fulfillment Rating</p>
        </div>
      </div>

      <!-- Main Site Container -->
      <div class="about-container">
        
        <!-- Mission & Vision Section -->
        <div class="mission-vision-grid">
          <div class="mission-card">
            <span class="card-mini-badge">OUR MISSION</span>
            <h2>Eliminate Operational Friction for Global Brands</h2>
            <p>
              Our mission is to empower brand manufacturers by taking full operational responsibility for multi-channel sales. We purchase inventory upfront, optimize product content, run high-return advertising campaigns, and protect pricing integrity across all marketplaces.
            </p>
          </div>

          <div class="mission-card vision-card">
            <span class="card-mini-badge">OUR VISION</span>
            <h2>To Be The Leading Global Retail Partner</h2>
            <p>
              We envision a world where brand owners focus solely on product innovation while Shekhani LLC handles complex logistics, catalog optimization, marketplace compliance, and international expansion with zero financial risk for the brand.
            </p>
          </div>
        </div>

        <!-- Core Pillars Grid -->
        <div class="pillars-section">
          <h2 class="pillars-title">The 4 Pillars of Our Growth Engine</h2>
          <div class="pillars-grid">
            
            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Upfront Capital Investment</h3>
              <p>We buy your inventory outright on a PO basis, taking 100% of the financial risk so you never pay retainers or setup fees.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>Omnichannel Reach</h3>
              <p>Instant listing syndication across Amazon FBA, Walmart Marketplace, eBay Global, TikTok Shop, and retail networks.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Studio Content Overhaul</h3>
              <p>Studio photography, custom A+ content, SEO copywriting, and listing CRO designed to maximize purchase conversions.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Strict MAP & IP Protection</h3>
              <p>24/7 automated hijacker monitoring, legal test buys, and strict MAP enforcement to safeguard your brand equity.</p>
            </div>

          </div>
        </div>

        <!-- Corporate Contact CTA Banner -->
        <div class="about-cta-banner">
          <h2>Ready To Accelerate Your Global Sales?</h2>
          <p>Submit your brand for evaluation and our partnership team will review your catalog within 24 hours.</p>
          <button class="btn-about-contact" id="btnAboutPartner">Partner With Shekhani LLC</button>
        </div>

      </div>
    </div>

    <style>
      .about-page-wrapper {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdf4 100%);
        padding: 0 0 80px;
        min-height: 85vh;
      }
      .about-hero-section {
        background: #ffffff;
        color: #0f172a;
        padding: 50px 20px 36px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
      }
      .about-hero-container {
        max-width: 860px;
        margin: 0 auto;
      }
      .about-hero-tag {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #059669;
        text-transform: uppercase;
        background: #dcfce7;
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 14px;
        border: 1px solid #86efac;
      }
      .about-hero-title {
        font-size: 38px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 12px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .about-hero-sub {
        font-size: 15.5px;
        color: #475569;
        line-height: 1.6;
        margin: 0;
      }

      /* Stats Bar */
      .about-stats-bar {
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        max-width: 1100px;
        margin: 40px auto 60px auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 30px 20px;
        text-align: center;
      }
      .stat-item {
        border-right: 1px solid #f1f5f9;
        padding: 0 15px;
      }
      .stat-item:last-child {
        border-right: none;
      }
      .stat-number {
        font-size: 32px;
        font-weight: 800;
        color: #059669;
        margin: 0 0 4px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .stat-label {
        font-size: 13px;
        color: #475569;
        font-weight: 600;
        margin: 0;
      }

      .about-container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .mission-vision-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        margin-bottom: 60px;
      }
      .mission-card {
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        transition: all 0.25s ease;
      }
      .mission-card:hover {
        border-color: #00d084;
        box-shadow: 0 8px 24px rgba(0, 208, 132, 0.12);
      }
      .card-mini-badge {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #059669;
        text-transform: uppercase;
        margin-bottom: 10px;
        display: inline-block;
      }
      .mission-card h2 {
        font-size: 24px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 12px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .mission-card p {
        font-size: 14px;
        color: #475569;
        line-height: 1.65;
        margin: 0;
      }

      /* Pillars */
      .pillars-section {
        margin-bottom: 60px;
      }
      .pillars-title {
        font-size: 30px;
        font-weight: 800;
        color: #0f172a;
        text-align: center;
        margin: 0 0 36px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .pillars-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .pillar-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 24px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
        transition: all 0.25s ease;
      }
      .pillar-card:hover {
        transform: translateY(-3px);
        border-color: #00d084;
        box-shadow: 0 10px 24px rgba(0, 208, 132, 0.15);
      }
      .pillar-icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: #dcfce7;
        color: #059669;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        border: 1px solid #86efac;
      }
      .pillar-card h3 {
        font-size: 16px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 8px 0;
      }
      .pillar-card p {
        font-size: 13px;
        color: #64748b;
        line-height: 1.5;
        margin: 0;
      }

      /* CTA Banner */
      .about-cta-banner {
        background: linear-gradient(135deg, #0f172a 0%, #06090e 100%);
        color: #ffffff;
        border-radius: 18px;
        padding: 44px 24px;
        text-align: center;
        border: 1px solid rgba(0, 208, 132, 0.3);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      }
      .about-cta-banner h2 {
        font-size: 28px;
        font-weight: 800;
        margin: 0 0 10px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .about-cta-banner p {
        font-size: 15px;
        color: #cbd5e1;
        margin: 0 0 24px 0;
      }
      .btn-about-contact {
        background: #00d084;
        color: #000000;
        border: none;
        padding: 13px 30px;
        font-size: 15px;
        font-weight: 800;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 4px 14px rgba(0, 208, 132, 0.3);
      }
      .btn-about-contact:hover {
        background: #00b371;
        box-shadow: 0 6px 20px rgba(0, 208, 132, 0.4);
        transform: translateY(-1px);
      }

      @media (max-width: 992px) {
        .about-stats-bar {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat-item {
          border-right: none;
        }
        .mission-vision-grid {
          grid-template-columns: 1fr;
        }
        .pillars-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 600px) {
        .about-stats-bar {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .pillars-grid {
          grid-template-columns: 1fr;
        }
        .about-hero-title {
          font-size: 26px;
        }
      }
    </style>
  `;

  // Bind CTA Partner button
  document.getElementById('btnAboutPartner')?.addEventListener('click', () => {
    if (window.navigateToRoute) window.navigateToRoute('/partner-form');
  });
}
