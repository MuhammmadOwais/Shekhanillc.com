/**
 * Global Market Expansion Service Page
 * URL: /global-market-expansion
 * Light B2B Theme
 */
import { openAuthModal } from '../components/AuthModal.js';

export function renderGlobalMarketExpansionPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="svc-page">
      <!-- Hero -->
      <section class="svc-hero">
        <div class="svc-hero-inner">
          <span class="svc-badge">INTERNATIONAL EXPANSION ENGINE</span>
          <h1 class="svc-hero-title">Global Market Expansion</h1>
          <p class="svc-hero-sub">
            We handle cross-border logistics, localized currency & translations, tax compliance, and regional marketplace setup to sell your brand to millions of customers across North America, Europe, Latin America, and Asia.
          </p>
          <button class="svc-cta-btn" id="servicePartnerBtn">Partner With Us</button>
        </div>
      </section>

      <!-- Content Grid -->
      <section class="svc-content-section">
        <div class="svc-container">
          <div class="svc-two-col">
            <div class="svc-img-card">
              <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785540708/Global_Market_Expansion_irftfd.jpg" alt="Global Market Expansion Operations" class="svc-img">
            </div>
            <div class="svc-info-col">
              <h2 class="svc-section-title">Seamless International Selling With Zero Complexity</h2>
              <p class="svc-para">
                Expanding globally is normally hindered by customs duties, localized VAT/tax regulations, multi-currency payouts, and local language support. Shekhani LLC removes all friction by taking on merchant-of-record responsibility for global channels.
              </p>
              <ul class="svc-feature-list">
                <li><span class="svc-check">✓</span> <div><strong>Cross-Border Marketplace Setup:</strong> Instant launch on Amazon UK/EU, Mercado Libre, Shopee, and regional channels.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>Localized Listings & Native Translations:</strong> Culturally tailored copy and multi-lingual customer support.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>Global Freight & Duty Management:</strong> Customs clearance, VAT/GST compliance, and international shipping routing.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>Currency Risk Protection:</strong> Unified global payouts in your preferred currency at locked competitive rates.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="svc-process-section">
        <div class="svc-container">
          <h2 class="svc-section-title text-center">Global Expansion Blueprint</h2>
          <div class="svc-steps-grid">
            <div class="svc-step-card">
              <div class="svc-step-num">01</div>
              <h3>Territory Assessment</h3>
              <p>We analyze global search demand and select high-margin target countries for your brand.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">02</div>
              <h3>Localization & Setup</h3>
              <p>We translate listings, register regional tax compliance, and prep cross-border inventory.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">03</div>
              <h3>Worldwide Channel Launch</h3>
              <p>We unlock new international revenue streams while managing all local operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    ${sharedServiceStyles()}
  `;

  document.getElementById('servicePartnerBtn')?.addEventListener('click', () => {
    openAuthModal('signup', 'sell');
  });
}

function sharedServiceStyles() {
  return `<style>
    .svc-page {
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdf4 100%);
      color: #0f172a;
      min-height: 100vh;
    }
    .svc-hero {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 70px 24px 56px;
      text-align: center;
    }
    .svc-hero-inner {
      max-width: 860px;
      margin: 0 auto;
    }
    .svc-badge {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #059669;
      background: #dcfce7;
      border: 1px solid #86efac;
      padding: 5px 14px;
      border-radius: 30px;
      display: inline-block;
      margin-bottom: 18px;
      text-transform: uppercase;
    }
    .svc-hero-title {
      font-size: 42px;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 18px 0;
      letter-spacing: -1px;
      line-height: 1.15;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .svc-hero-sub {
      font-size: 17px;
      color: #475569;
      line-height: 1.65;
      margin: 0 auto 28px auto;
      max-width: 720px;
    }
    .svc-cta-btn {
      background: #00d084;
      color: #000000;
      border: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 4px 14px rgba(0, 208, 132, 0.3);
    }
    .svc-cta-btn:hover {
      background: #00b371;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 208, 132, 0.4);
    }
    .svc-content-section {
      padding: 70px 24px;
      border-bottom: 1px solid #e2e8f0;
      background: #ffffff;
    }
    .svc-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .svc-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }
    .svc-img-card {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    .svc-img {
      width: 100%;
      height: auto;
      display: block;
    }
    .svc-section-title {
      font-size: 28px;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 16px 0;
      letter-spacing: -0.5px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .text-center { text-align: center; }
    .svc-para {
      font-size: 15.5px;
      color: #475569;
      line-height: 1.7;
      margin-bottom: 24px;
    }
    .svc-feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .svc-feature-list li {
      font-size: 14.5px;
      color: #334155;
      line-height: 1.5;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    .svc-check {
      color: #059669;
      font-weight: 900;
      font-size: 16px;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .svc-process-section {
      padding: 70px 24px 80px;
      background: #f8fafc;
    }
    .svc-steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-top: 40px;
    }
    .svc-step-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 16px;
      padding: 30px 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
      transition: all 0.25s ease;
    }
    .svc-step-card:hover {
      border-color: #00d084;
      box-shadow: 0 8px 24px rgba(0, 208, 132, 0.15);
      transform: translateY(-3px);
    }
    .svc-step-num {
      font-size: 28px;
      font-weight: 800;
      color: #00d084;
      margin-bottom: 14px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .svc-step-card h3 {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 10px 0;
    }
    .svc-step-card p {
      font-size: 13.5px;
      color: #64748b;
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 900px) {
      .svc-two-col { grid-template-columns: 1fr; }
      .svc-steps-grid { grid-template-columns: 1fr; }
      .svc-hero-title { font-size: 30px; }
      .svc-section-title { font-size: 24px; }
    }
  </style>`;
}
