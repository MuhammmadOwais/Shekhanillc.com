/**
 * Shekhani LLC Privacy Policy Page Component
 * Route: /privacy-policy
 * Light B2B Theme: Clean Typography, Emerald Accents, Structured Legal Card
 */

export function renderPrivacyPolicyPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper">
      <!-- Light B2B Hero Section -->
      <section class="legal-hero-section">
        <div class="legal-hero-container">
          <span class="legal-hero-tag">LEGAL & COMPLIANCE</span>
          <h1 class="legal-hero-title">Privacy Policy</h1>
          <p class="legal-hero-sub">
            Last Updated: January 2026 • Shekhani LLC Legal & Data Protection Department
          </p>
        </div>
      </section>

      <!-- Main Legal Content Container -->
      <div class="legal-main-container">
        <div class="legal-card-full">
          
          <section class="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Shekhani LLC is dedicated to protecting the commercial privacy and corporate data of our wholesale buyers, retail partners, and brand suppliers. This Privacy Policy details how we collect, store, utilize, and safeguard business information gathered across our website and digital transaction systems.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Information We Collect</h2>
            <p>
              We gather essential commercial data required to conduct secure B2B transactions and fulfill wholesale purchase orders.
            </p>
            <ul class="legal-list">
              <li><strong>Business Registration Data:</strong> Company legal name, resale tax identification numbers, business address, and contact details.</li>
              <li><strong>User Account Profile Data:</strong> Account representative name, business email address, phone numbers, and encrypted security credentials.</li>
              <li><strong>Financial & Transaction Data:</strong> Order histories, payment invoice records, bank wire routing details, and delivery destinations.</li>
              <li><strong>Technical Usage Data:</strong> IP addresses, browser types, session activity logs, and system performance telemetry.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. How We Use Business Data</h2>
            <p>
              Corporate information collected by Shekhani LLC is strictly utilized to operate and enhance our wholesale supply chain services.
            </p>
            <ul class="legal-list">
              <li>Processing and dispatching bulk purchase orders to verified retail destinations.</li>
              <li>Verifying business tax resale credentials and qualifying enterprise wholesale buyers.</li>
              <li>Communicating order tracking updates, invoice notifications, and customer support responses.</li>
              <li>Preventing unauthorized account access, payment fraud, and platform misuse.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or trade private commercial information to third party brokers. Data sharing is limited strictly to authorized service partners necessary to complete wholesale order fulfillment, such as logistics freight carriers, payment processing gateways, and legal regulatory authorities when required by law.
            </p>
          </section>

          <section class="legal-section">
            <h2>5. Data Security Measures</h2>
            <p>
              Shekhani LLC employs robust industry standard encryption protocols, secure SSL socket layers, firewalls, and restricted administrative access control to protect sensitive company records against loss, theft, or unauthorized access.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Your Commercial Privacy Rights</h2>
            <p>
              Business partners may request updates, corrections, or deletion of their registered corporate profile data at any time by contacting our legal compliance team at <a href="mailto:haris@shekhanillc.com" style="color: #059669; text-decoration: underline;">haris@shekhanillc.com</a>.
            </p>
          </section>

          <!-- Contact Notice Box -->
          <div class="legal-notice-box">
            <div class="notice-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <strong>Questions regarding our Privacy Policy?</strong>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #475569;">Reach out to our Data Protection Officer at <a href="mailto:haris@shekhanillc.com" style="color: #059669; font-weight: 700;">haris@shekhanillc.com</a> or call <a href="tel:+13149049538" style="color: #059669; font-weight: 700;">+1 (314) 904-9538</a>.</p>
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
