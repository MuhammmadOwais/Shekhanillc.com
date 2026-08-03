/**
 * Corporate Level Contact Page Component for Shekhani LLC
 * Route: /contact
 * Uses the Homepage PartnerQualificationForm (Submit Your Brand For Evaluation) & Corporate Info
 */
import { renderPartnerQualificationForm } from '../components/PartnerQualificationForm.js';

export function renderContactPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="contact-page-wrapper">
      <!-- Light B2B Hero Banner -->
      <section class="contact-hero-banner">
        <div class="contact-hero-container">
          <span class="contact-hero-tag">GET IN TOUCH</span>
          <h1 class="contact-hero-title">Contact Shekhani LLC</h1>
          <p class="contact-hero-sub">
            Have questions about brand distribution, marketplace management, or partnership opportunities? Reach out to our team today.
          </p>
        </div>
      </section>

      <!-- Main Content Container -->
      <div class="contact-main-container">
        <div class="contact-grid">
          
          <!-- Left Side Corporate Info Cards -->
          <div class="contact-info-column">
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Phone Number</h3>
                <p><a href="tel:+13149049538" style="color: inherit; text-decoration: none;">+1 (314) 904-9538</a></p>
                <span>Mon to Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Email Support</h3>
                <p><a href="mailto:sales@shekhanillc.com" style="color: inherit; text-decoration: none;">sales@shekhanillc.com</a></p>
                <span>Our team responds within 24 hours</span>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Headquarters</h3>
                <p>Shekhani LLC</p>
                <span>Chesterfield 63017 MO US</span>
              </div>
            </div>
          </div>

          <!-- Right Side Homepage Partner Qualification Form -->
          <div class="contact-form-card">
            <div id="contactFormContainer"></div>
          </div>

        </div>

        <!-- Google Maps Embed Section -->
        <div class="google-map-section">
          <h2 class="map-header-title">Our Office Location</h2>
          <p class="map-header-sub">Chesterfield, MO 63017, United States</p>
          <div class="map-iframe-wrap">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.543219876543!2d-90.5234567!3d38.6432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d2123456789%3A0x123456789abcdef!2s1120%20Weidman%20Rd%2C%20Chesterfield%2C%20MO%2063017!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="360" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>

      </div>
    </div>

    <style>
      .contact-page-wrapper {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdf4 100%);
        padding: 0 0 70px;
        min-height: 85vh;
      }
      .contact-hero-banner {
        background: #ffffff;
        color: #0f172a;
        padding: 56px 20px 40px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
      }
      .contact-hero-container {
        max-width: 800px;
        margin: 0 auto;
      }
      .contact-hero-tag {
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
      .contact-hero-title {
        font-size: 38px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 12px 0;
        letter-spacing: -1px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .contact-hero-sub {
        font-size: 15.5px;
        color: #475569;
        line-height: 1.6;
        margin: 0;
      }
      .contact-main-container {
        max-width: 1200px;
        margin: 40px auto 0 auto;
        padding: 0 20px;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 340px 1fr;
        gap: 32px;
      }
      .contact-info-column {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .contact-info-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 24px 20px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        transition: all 0.25s ease;
      }
      .contact-info-card:hover {
        border-color: #00d084;
        transform: translateY(-2px);
      }
      .contact-icon-box {
        width: 44px;
        height: 44px;
        background: #dcfce7;
        color: #059669;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .contact-info-detail h3 {
        font-size: 15px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 4px 0;
      }
      .contact-info-detail p {
        font-size: 14px;
        font-weight: 700;
        color: #059669;
        margin: 0 0 2px 0;
      }
      .contact-info-detail span {
        font-size: 12px;
        color: #64748b;
      }
      .contact-form-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 10px 24px 24px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
      }

      /* Google Maps Embed */
      .google-map-section {
        margin-top: 48px;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
      }
      .map-header-title {
        font-size: 22px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 4px 0;
      }
      .map-header-sub {
        font-size: 13.5px;
        color: #64748b;
        margin: 0 0 20px 0;
      }
      .map-iframe-wrap {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #cbd5e1;
      }

      @media (max-width: 900px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .contact-hero-title {
          font-size: 28px;
        }
        .contact-hero-sub {
          font-size: 14px;
        }
      }
    </style>
  `;

  // Render Homepage Partner Qualification Form inside Contact Page
  renderPartnerQualificationForm('contactFormContainer');
}
