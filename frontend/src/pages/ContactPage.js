/**
 * Corporate Level Contact Page Component for Shekhani LLC
 * Route: /contact
 * Light B2B Theme, Clean Modern Form, Google Maps Embed & Corporate Info Cards
 */

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
                <p><a href="mailto:haris@shekhanillc.com" style="color: inherit; text-decoration: none;">haris@shekhanillc.com</a></p>
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
                <span>1120 Weidman Rd Chesterfield 63017 MO US</span>
              </div>
            </div>
          </div>

          <!-- Right Side Contact Form Card -->
          <div class="contact-form-card">
            <h2 class="form-card-title">Send Us A Message</h2>
            <p class="form-card-sub">Fill out the form below and a brand representative will contact you.</p>

            <form id="contactPageForm">
              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactFirstName">First Name *</label>
                  <input type="text" id="contactFirstName" class="contact-form-input" placeholder="e.g. John" required>
                </div>
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactLastName">Last Name *</label>
                  <input type="text" id="contactLastName" class="contact-form-input" placeholder="e.g. Smith" required>
                </div>
              </div>

              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactPageEmail">Work Email *</label>
                  <input type="email" id="contactPageEmail" class="contact-form-input" placeholder="john@company.com" required>
                </div>
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactPagePhone">Phone Number</label>
                  <input type="tel" id="contactPagePhone" class="contact-form-input" placeholder="+1 (555) 000-0000">
                </div>
              </div>

              <div class="contact-form-group">
                <label class="contact-form-label" for="contactInquiryType">Inquiry Subject *</label>
                <select id="contactInquiryType" class="contact-form-select" required>
                  <option value="" disabled selected>Select an option...</option>
                  <option value="Wholesale Partnership">Wholesale Partnership</option>
                  <option value="Full Marketplace Management">Full Marketplace Management</option>
                  <option value="Listing & Creative Overhaul">Listing & Creative Overhaul</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div class="contact-form-group">
                <label class="contact-form-label" for="contactMessage">Message *</label>
                <textarea id="contactMessage" class="contact-form-textarea" placeholder="Tell us about your brand catalog and goals..." required></textarea>
              </div>

              <button type="submit" class="btn-submit-inquiry" id="btnSubmitInquiry">
                Send Message
              </button>

              <div id="contactPageStatusMsg" class="contact-status-msg hidden"></div>
            </form>
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
        padding: 50px 20px 36px;
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
        font-size: 36px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .contact-hero-sub {
        font-size: 15px;
        color: #475569;
        line-height: 1.5;
        margin: 0;
      }
      .contact-main-container {
        width: 92%;
        max-width: 1240px;
        margin: 40px auto 0 auto;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 32px;
        margin-bottom: 40px;
      }
      .contact-info-column {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .contact-info-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 22px 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        display: flex;
        align-items: flex-start;
        gap: 16px;
        transition: all 0.25s ease;
      }
      .contact-info-card:hover {
        transform: translateY(-2px);
        border-color: #00d084;
        box-shadow: 0 8px 24px rgba(0, 208, 132, 0.12);
      }
      .contact-icon-box {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: #dcfce7;
        color: #059669;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid #86efac;
      }
      .contact-info-detail h3 {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #059669;
        margin: 0 0 4px 0;
      }
      .contact-info-detail p {
        font-size: 15px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 2px 0;
      }
      .contact-info-detail span {
        font-size: 12.5px;
        color: #64748b;
      }
      .contact-form-card {
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 14px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      }
      .form-card-title {
        font-size: 24px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 6px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .form-card-sub {
        font-size: 13.5px;
        color: #64748b;
        margin: 0 0 20px 0;
      }
      .contact-form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .contact-form-group {
        margin-bottom: 14px;
      }
      .contact-form-label {
        display: block;
        font-size: 12px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 5px;
      }
      .contact-form-input, .contact-form-select, .contact-form-textarea {
        width: 100%;
        padding: 11px 13px;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font-size: 13.5px;
        color: #0f172a;
        outline: none;
        background: #ffffff;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }
      .contact-form-input:focus, .contact-form-select:focus, .contact-form-textarea:focus {
        border-color: #00d084;
        box-shadow: 0 0 0 3px rgba(0, 208, 132, 0.18);
      }
      .contact-form-textarea {
        resize: vertical;
        min-height: 100px;
      }
      .btn-submit-inquiry {
        width: 100%;
        background: #00d084;
        color: #000000;
        border: none;
        padding: 13px 0;
        font-size: 15px;
        font-weight: 800;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 4px 14px rgba(0, 208, 132, 0.3);
      }
      .btn-submit-inquiry:hover {
        background: #00b371;
        box-shadow: 0 6px 20px rgba(0, 208, 132, 0.4);
        transform: translateY(-1px);
      }
      .contact-status-msg {
        margin-top: 14px;
        padding: 12px;
        border-radius: 8px;
        font-size: 13.5px;
        text-align: center;
        font-weight: 600;
      }
      .contact-status-msg.success {
        background: #f0fdf4;
        color: #15803d;
        border: 1px solid #bbf7d0;
      }
      .contact-status-msg.hidden {
        display: none;
      }
      .google-map-section {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
      }
      .map-header-title {
        font-size: 20px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 4px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .map-header-sub {
        font-size: 13px;
        color: #64748b;
        margin: 0 0 16px 0;
      }
      .map-iframe-wrap {
        width: 100%;
        height: 340px;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid #cbd5e1;
      }

      @media (max-width: 900px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .contact-form-row {
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .contact-hero-title {
          font-size: 26px;
        }
      }
    </style>
  `;

  // Form submit event handler
  const form = document.getElementById('contactPageForm');
  const statusMsg = document.getElementById('contactPageStatusMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactFirstName').value;
      if (statusMsg) {
        statusMsg.className = 'contact-status-msg success';
        statusMsg.innerHTML = `✓ Thank you <strong>${name}</strong>! Your inquiry has been sent. Our corporate team will reach out within 24 hours.`;
        form.reset();
      }
    });
  }
}
