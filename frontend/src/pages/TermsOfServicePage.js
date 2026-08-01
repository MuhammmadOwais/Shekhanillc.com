/**
 * Shekhani LLC Terms of Service Page Component
 * Route: /terms-of-service
 * Light B2B Theme: Clean Typography, Emerald Accents, Structured Legal Card
 */

export function renderTermsOfServicePage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper">
      <!-- Light B2B Hero Section -->
      <section class="legal-hero-section">
        <div class="legal-hero-container">
          <span class="legal-hero-tag">TERMS & CONDITIONS</span>
          <h1 class="legal-hero-title">Terms of Service</h1>
          <p class="legal-hero-sub">
            Last Updated: January 2026 • Shekhani LLC Legal Department
          </p>
        </div>
      </section>

      <!-- Main Legal Content Container -->
      <div class="legal-main-container">
        <div class="legal-card-full">
          
          <section class="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              Welcome to Shekhani LLC. These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Shekhani LLC concerning your access to and use of our wholesale B2B platform, marketplace services, and associated web infrastructure. By registering an account or purchasing products through our platform, you acknowledge that you have read, understood, and agreed to be bound by all of these terms.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. B2B Eligibility and Account Registration</h2>
            <p>
              Our services are strictly tailored for legitimate business entities, retail store owners, verified distributors, and commercial enterprise buyers.
            </p>
            <ul class="legal-list">
              <li>You must be at least 18 years of age or possess legal authorization to represent your business organization.</li>
              <li>All information submitted during registration must be truthful, accurate, complete, and current.</li>
              <li>You are solely responsible for maintaining the confidentiality of your account credentials and password.</li>
              <li>Shekhani LLC reserves the right to suspend or terminate accounts that provide fraudulent business information.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Wholesale Purchasing & Pricing</h2>
            <p>
              Wholesale pricing offered by Shekhani LLC is confidential business information intended exclusively for registered enterprise partners.
            </p>
            <ul class="legal-list">
              <li>Prices are displayed in United States Dollars and exclude applicable shipping fees, taxes, and tariffs.</li>
              <li>Minimum order quantities (MOQs) may apply depending on specific product categories and brand agreements.</li>
              <li>Orders placed through the platform represent binding offers to purchase wholesale inventory.</li>
              <li>Shekhani LLC reserves the right to accept, limit, or decline any bulk order prior to dispatch.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Payment Terms & Invoicing</h2>
            <p>
              All wholesale purchases must be settled using authorized payment methods prior to fulfillment unless approved for extended credit terms.
            </p>
            <ul class="legal-list">
              <li>Accepted payment methods include major credit cards, debit cards, electronic bank wire transfers, and ACH payments.</li>
              <li>Invoices generated upon order confirmation must be settled in full prior to warehouse release.</li>
              <li>Late payments on extended line credit may incur administrative interest charges at standard commercial rates.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Shipping, Fulfillment & Delivery</h2>
            <p>
              Shekhani LLC coordinates nationwide ground shipping through authorized logistics carriers. Title and risk of loss pass to the buyer upon carrier pickup or delivery confirmation at the specified destination.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Governing Law & Contact</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Missouri, United States, without regard to its conflict of law principles.
            </p>
          </section>

          <!-- Contact Notice Box -->
          <div class="legal-notice-box">
            <div class="notice-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <strong>Questions regarding our Terms of Service?</strong>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #475569;">Contact our Legal Department at <a href="mailto:haris@shekhanillc.com" style="color: #059669; font-weight: 700;">haris@shekhanillc.com</a> or call <a href="tel:+13149049538" style="color: #059669; font-weight: 700;">+1 (314) 904-9538</a>.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <style>
      .legal-page-wrapper {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdf4 100%);
        padding: 0 0 80px;
        min-height: 85vh;
      }
      .legal-hero-section {
        background: #ffffff;
        color: #0f172a;
        padding: 50px 20px 36px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
      }
      .legal-hero-container {
        max-width: 800px;
        margin: 0 auto;
      }
      .legal-hero-tag {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #059669;
        text-transform: uppercase;
        background: #dcfce7;
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 12px;
        border: 1px solid #86efac;
      }
      .legal-hero-title {
        font-size: 36px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .legal-hero-sub {
        font-size: 14px;
        color: #64748b;
        margin: 0;
      }
      .legal-main-container {
        max-width: 1000px;
        margin: 40px auto 0 auto;
        padding: 0 20px;
      }
      .legal-card-full {
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 16px;
        padding: 40px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        gap: 28px;
      }
      .legal-section h2 {
        font-size: 20px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 12px 0;
        padding-left: 12px;
        border-left: 4px solid #00d084;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .legal-section p {
        font-size: 14.5px;
        color: #334155;
        line-height: 1.65;
        margin: 0;
      }
      .legal-list {
        margin: 12px 0 0 0;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .legal-list li {
        font-size: 14px;
        color: #475569;
        line-height: 1.6;
      }
      .legal-notice-box {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        border-radius: 12px;
        padding: 20px 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        color: #065f46;
        margin-top: 10px;
      }
      .notice-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #dcfce7;
        color: #059669;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid #86efac;
      }

      @media (max-width: 768px) {
        .legal-card-full {
          padding: 24px 18px;
        }
        .legal-hero-title {
          font-size: 26px;
        }
        .legal-section h2 {
          font-size: 18px;
        }
      }
    </style>
  `;
}
