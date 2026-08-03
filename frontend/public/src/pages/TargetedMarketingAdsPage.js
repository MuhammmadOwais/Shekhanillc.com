/**
 * Targeted Marketing & Ads Service Page
 * URL: /targeted-marketing-ads
 * Light B2B Theme with Homepage Lead Form & Trusted Brand Partners Strip
 */
import { renderPartnerQualificationForm } from '../components/PartnerQualificationForm.js';
import { renderTrustedMarketplaces } from '../components/TrustedMarketplaces.js';
import { openAuthModal } from '../components/AuthModal.js';

export function renderTargetedMarketingAdsPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="svc-page">
      <!-- Hero -->
      <section class="svc-hero">
        <div class="svc-hero-inner">
          <span class="svc-badge">PERFORMANCE MARKETING & PPC</span>
          <h1 class="svc-hero-title">Targeted Marketing and Advertising</h1>
          <p class="svc-hero-sub">
            We engineer high ROI ad campaigns across Amazon PPC Walmart Sponsored Ads TikTok Shop Video Shopping Ads and Google Shopping to drive rapid sales velocity.
          </p>
          <button class="svc-cta-btn" id="servicePartnerBtn">Partner With Us</button>
        </div>
      </section>

      <!-- Content Section -->
      <section class="svc-content-section">
        <div class="svc-container">
          <div class="svc-two-col">
            <div class="svc-img-card">
              <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785540708/targetedmarketing_kffbsp.jpg" alt="Performance Ad Campaign Optimization" class="svc-img">
            </div>
            <div class="svc-info-col">
              <h2 class="svc-section-title">Data Driven Ad Campaigns That Outperform Competitors</h2>
              <p class="svc-para">
                Running advertising campaigns on marketplaces without real time bid optimization leads to wasted ad spend and low margins. We manage your ad budgets with algorithmic precision to ensure every dollar spent returns maximum profit.
              </p>
              <div class="svc-flat-text-block">
                <p class="svc-flat-item"><strong>Sponsored Products and Display Ads:</strong> Targeted keyword bids capturing high intent buyers at the exact moment of search.</p>
                <p class="svc-flat-item"><strong>Off Amazon Traffic and Google PPC:</strong> External buyer funnel routing high converting search traffic directly to your marketplace listings.</p>
                <p class="svc-flat-item"><strong>TikTok Shop Video Ad Scaling:</strong> Viral shoppable video ads leveraging creator partnerships and immediate checkout integration.</p>
                <p class="svc-flat-item"><strong>ACOS and TACOS Optimization:</strong> Continuous negative keyword pruning and dayparting to keep Advertising Cost of Sales strictly profitable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="svc-process-section">
        <div class="svc-container">
          <h2 class="svc-section-title text-center">Our Performance Ad Process</h2>
          <div class="svc-steps-grid">
            <div class="svc-step-card">
              <div class="svc-step-num">01</div>
              <h3>Keyword & Competitor Audit</h3>
              <p>We analyze high converting search terms and competitor bidding strategies.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">02</div>
              <h3>Campaign Architecture</h3>
              <p>We structure exact match phrase and auto campaigns for maximum impression share.</p>
            </div>
            <div class="svc-step-card">
              <div class="svc-step-num">03</div>
              <h3>Automated Bid Scaling</h3>
              <p>We continuously adjust bids and dayparting schedule to lock in low ACOS.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Lead Contact Form Container -->
      <div id="svcLeadFormContainer"></div>

      <!-- Trusted Brand Partners Strip Container -->
      <div id="svcTrustedPartnersContainer"></div>
    </div>

    ${sharedServiceStyles()}
  `;

  // Render Lead Form and Trusted Partners
  renderPartnerQualificationForm('svcLeadFormContainer');
  renderTrustedMarketplaces('svcTrustedPartnersContainer');

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
      text-transform: uppercase;
      background: #dcfce7;
      padding: 5px 14px;
      border-radius: 30px;
      display: inline-block;
      margin-bottom: 14px;
      border: 1px solid #86efac;
    }
    .svc-hero-title {
      font-size: 38px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -1px;
      margin-bottom: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .svc-hero-sub {
      font-size: 16px;
      color: #475569;
      line-height: 1.65;
      margin-bottom: 28px;
    }
    .svc-cta-btn {
      background: #00d084;
      color: #000000;
      border: none;
      font-weight: 800;
      font-size: 15px;
      padding: 14px 32px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 4px 14px rgba(0, 208, 132, 0.3);
    }
    .svc-cta-btn:hover {
      background: #00b371;
      transform: translateY(-2px);
    }
    .svc-content-section {
      padding: 70px 24px;
    }
    .svc-container {
      max-width: 1140px;
      margin: 0 auto;
    }
    .svc-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }
    .svc-img-card {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 30px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
      height: 380px;
    }
    .svc-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .svc-section-title {
      font-size: 28px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }
    .svc-para {
      font-size: 15px;
      color: #475569;
      line-height: 1.65;
      margin-bottom: 24px;
    }
    .svc-flat-text-block {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .svc-flat-item {
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
      margin: 0;
    }
    .svc-process-section {
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      padding: 70px 24px;
    }
    .text-center {
      text-align: center;
    }
    .svc-steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-top: 40px;
    }
    .svc-step-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 30px 24px;
      transition: all 0.3s ease;
    }
    .svc-step-card:hover {
      border-color: #00d084;
      transform: translateY(-3px);
    }
    .svc-step-num {
      font-size: 13px;
      font-weight: 800;
      color: #059669;
      background: #dcfce7;
      border: 1px solid #86efac;
      padding: 4px 12px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 16px;
    }
    .svc-step-card h3 {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 10px;
    }
    .svc-step-card p {
      font-size: 13.5px;
      color: #64748b;
      line-height: 1.55;
      margin: 0;
    }

    @media (max-width: 900px) {
      .svc-two-col {
        grid-template-columns: 1fr;
      }
      .svc-img-card {
        height: 240px;
      }
      .svc-steps-grid {
        grid-template-columns: 1fr;
      }
      .svc-hero-title {
        font-size: 26px;
      }
      .svc-section-title {
        font-size: 22px;
      }
    }
  </style>`;
}
