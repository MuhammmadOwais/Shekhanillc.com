/**
 * Full Marketplace Management Service Page
 * URL: /full-marketplace-management
 * Light B2B Theme
 */
import { openAuthModal } from '../components/AuthModal.js';

export function renderFullMarketplaceManagementPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="svc-page">
      <!-- Hero -->
      <section class="svc-hero">
        <div class="svc-hero-inner">
          <span class="svc-badge">MULTI-CHANNEL SALES OPERATIONS</span>
          <h1 class="svc-hero-title">Full Marketplace Management</h1>
          <p class="svc-hero-sub">
            We launch, manage, and scale your brand across Amazon, Walmart, eBay, TikTok Shop, and international channels — handling inventory, customer care, and operations so you can focus on product creation.
          </p>
          <button class="svc-cta-btn" id="servicePartnerBtn">Partner With Us</button>
        </div>
      </section>

      <!-- Content Grid -->
      <section class="svc-content-section">
        <div class="svc-container">
          <div class="svc-two-col">
            <div class="svc-img-card">
              <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785540707/Full_Marketplace_Management_voidgi.jpg" alt="Marketplace Operations Control Center" class="svc-img">
            </div>
            <div class="svc-info-col">
              <h2 class="svc-section-title">End-to-End E-Commerce Operations Handled For You</h2>
              <p class="svc-para">
                Selling across multiple marketplaces requires constant monitoring, inventory allocation, account health management, and rapid customer response. We act as your official distribution partner and take full responsibility for channel performance.
              </p>
              <ul class="svc-feature-list">
                <li><span class="svc-check">✓</span> <div><strong>Omnichannel Account Setup:</strong> Instant expansion onto Amazon FBA/FBM, Walmart WFS, eBay, and TikTok Shop.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>Catalog & Inventory Sync:</strong> Automated stock updates across channels to eliminate overselling and out-of-stock penalties.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>100% Account Health Protection:</strong> Dedicated compliance team ensuring policy adherence, IP protection, and fast resolution of listing suppressions.</div></li>
                <li><span class="svc-check">✓</span> <div><strong>Customer Care & Order Fulfillment:</strong> 24/7 customer service and fast nationwide dispatch to maintain 99.8%+ seller performance ratings.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="svc-process-section">
        <div class="svc-container">
          <h2 class="svc-section-title text-center">Our 3-Phase Operational Blueprint</h2>
          <div class="svc-steps-grid">
            <div class="svc-step-card">
              <div class="svc-step-num">01</div>
              <h3>Channel Integration</h3>
              <p>We connect your product catalog to major marketplace storefronts seamlessly.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">02</div>
              <h3>Logistics & Fulfillment</h3>
              <p>We streamline inventory routing and ensure 99.8% on-time dispatch accuracy.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">03</div>
              <h3>Daily Channel Scaling</h3>
              <p>Our account managers handle repricing, promos, and continuous sales optimizations.</p>
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
