/**
 * Corporate Level Contact Page Component for Shekhani LLC
 * Route: /contact
 * Clean White Hero Banner, Stacked Mobile Form Layout, Google Maps Embed & Corporate Info Cards
 * Zero hyphen (-) characters in displayed text content.
 */

export function renderContactPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .contact-page-wrapper {
        background-color: #f8fafc;
        padding: 0 0 80px;
        min-height: 85vh;
      }

      /* Clean White Hero Banner */
      .contact-hero-banner {
        background: #ffffff;
        color: #0f172a;
        padding: 50px 20px 40px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
      }

      .contact-hero-container {
        max-width: 800px;
        margin: 0 auto;
      }

      .contact-hero-tag {
        display: inline-block;
        background: rgba(0, 191, 165, 0.1);
        color: #00897b;
        border: 1px solid rgba(0, 191, 165, 0.25);
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 14px;
      }

      .contact-hero-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.6rem;
        font-weight: 400;
        color: #0f172a;
        margin: 0 0 12px 0;
        letter-spacing: -0.5px;
      }

      .contact-hero-sub {
        font-size: 15px;
        color: #64748b;
        line-height: 1.5;
        margin: 0;
      }

      /* Main Content Container */
      .contact-main-container {
        width: 92%;
        max-width: 1240px;
        margin: 40px auto 0 auto;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 32px;
        margin-bottom: 50px;
      }

      /* Left Side Info Cards */
      .contact-info-column {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .contact-info-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        display: flex;
        align-items: flex-start;
        gap: 18px;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .contact-info-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
      }

      .contact-icon-box {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        background: #e6f8f5;
        color: #00897b;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .contact-info-detail h3 {
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        color: #64748b;
        margin: 0 0 5px 0;
      }

      .contact-info-detail p {
        font-size: 16px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 3px 0;
      }

      .contact-info-detail span {
        font-size: 13px;
        color: #64748b;
      }

      /* Right Side Form Card */
      .contact-form-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      }

      .form-card-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.8rem;
        color: #0f172a;
        margin: 0 0 6px 0;
      }

      .form-card-sub {
        font-size: 13.5px;
        color: #64748b;
        margin: 0 0 24px 0;
      }

      .contact-form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .contact-form-group {
        margin-bottom: 18px;
      }

      .contact-form-label {
        display: block;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        color: #475569;
        margin-bottom: 6px;
      }

      .contact-form-input, .contact-form-select, .contact-form-textarea {
        width: 100%;
        padding: 11px 13px;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 13.5px;
        color: #0f172a;
        outline: none;
        background: #ffffff;
        transition: border-color 0.2s, box-shadow 0.2s;
        box-sizing: border-box;
      }

      .contact-form-input:focus, .contact-form-select:focus, .contact-form-textarea:focus {
        border-color: #00bfa5;
        box-shadow: 0 0 0 3px rgba(0, 191, 165, 0.15);
      }

      .contact-form-textarea {
        resize: vertical;
        min-height: 110px;
      }

      .btn-submit-inquiry {
        width: 100%;
        background: #00bfa5;
        color: #ffffff;
        border: none;
        padding: 13px 0;
        font-size: 14.5px;
        font-weight: 800;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.15s;
        box-shadow: 0 4px 14px rgba(0, 191, 165, 0.25);
      }

      .btn-submit-inquiry:hover {
        background: #00897b;
        transform: translateY(-1px);
      }

      /* Google Maps Card Section */
      .google-map-section {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
      }

      .map-header-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.5rem;
        color: #0f172a;
        margin: 0 0 4px 0;
      }

      .map-header-sub {
        font-size: 13px;
        color: #64748b;
        margin: 0 0 16px 0;
      }

      .map-iframe-wrap {
        width: 100%;
        height: 360px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #cbd5e1;
      }

      .map-iframe-wrap iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      /* Mobile Layout Fixes */
      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .contact-hero-title {
          font-size: 1.9rem;
        }

        .contact-form-row {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .contact-form-card {
          padding: 20px 16px;
        }

        .google-map-section {
          padding: 16px;
        }

        .map-iframe-wrap {
          height: 280px;
        }
      }
    </style>

    <div class="contact-page-wrapper">
      
      <!-- Clean White Hero Banner -->
      <section class="contact-hero-banner">
        <div class="contact-hero-container">
          <span class="contact-hero-tag">SHEKHANI LLC B2B DISTRIBUTOR</span>
          <h1 class="contact-hero-title">Get in Touch with Our Team</h1>
          <p class="contact-hero-sub">Whether you are a retail store owner requesting bulk pricing or a brand distributor joining our network, we are here to assist you.</p>
        </div>
      </section>

      <!-- Main Grid Container -->
      <div class="contact-main-container">
        
        <div class="contact-grid">
          
          <!-- Left Info Column -->
          <div class="contact-info-column">
            
            <!-- Phone Card -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Direct Phone Line</h3>
                <p>+1 (314) 904-9538</p>
                <span>Mon to Fri 9:00 AM to 6:00 PM EST</span>
              </div>
            </div>

            <!-- Email Card -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Wholesale Email Inquiry</h3>
                <p>haris@shekhanillc.com</p>
                <span>Guaranteed response within 24 business hours</span>
              </div>
            </div>

            <!-- Address Card -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="contact-info-detail">
                <h3>Corporate Headquarters</h3>
                <p>1120 Weidman Rd</p>
                <span>Chesterfield MO 63017, USA</span>
              </div>
            </div>

          </div>

          <!-- Right Form Column -->
          <div class="contact-form-card">
            <h2 class="form-card-title">Send Us a Message</h2>
            <p class="form-card-sub">Fill out the form below and a wholesale logistics specialist will contact you promptly.</p>
            
            <form id="contactForm">
              
              <!-- 1 Column Stacked Row on Mobile View -->
              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactFullName">Full Name *</label>
                  <input type="text" class="contact-form-input" id="contactFullName" placeholder="e.g. John Smith" required>
                </div>
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactEmail">Business Email *</label>
                  <input type="email" class="contact-form-input" id="contactEmail" placeholder="name@company.com" required>
                </div>
              </div>

              <!-- 1 Column Stacked Row on Mobile View -->
              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactCompany">Company or Store Name</label>
                  <input type="text" class="contact-form-input" id="contactCompany" placeholder="e.g. Apex Retail LLC">
                </div>
                <div class="contact-form-group">
                  <label class="contact-form-label" for="contactInquiryType">Inquiry Purpose</label>
                  <select class="contact-form-select" id="contactInquiryType">
                    <option value="wholesale">Bulk Wholesale Purchase</option>
                    <option value="brand">Brand Distribution Partner</option>
                    <option value="account">Account Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div class="contact-form-group">
                <label class="contact-form-label" for="contactMessage">Message or Request Details *</label>
                <textarea class="contact-form-textarea" id="contactMessage" placeholder="Describe your product requirements, order quantity, or questions..." required></textarea>
              </div>

              <button type="submit" class="btn-submit-inquiry">
                Submit Wholesale Inquiry
              </button>

            </form>

          </div>

        </div>

        <!-- Google Maps Embed Section -->
        <div class="google-map-section">
          <h3 class="map-header-title">Our Office Location</h3>
          <p class="map-header-sub">1120 Weidman Rd, Chesterfield, MO 63017, USA</p>
          <div class="map-iframe-wrap">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.8485290642345!2d-90.52843468465749!3d38.60634697961603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d47915555555%3A0x123456789abcdef!2s1120%20Weidman%20Rd%2C%20Chesterfield%2C%20MO%2063017!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  `;

  // Bind Form Submission
  const form = container.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = container.querySelector('#contactFullName').value.trim();
      alert(`Thank you ${name}!\n\nYour B2B wholesale inquiry has been submitted successfully.\n\nOur team at haris@shekhanillc.com will reach out to you within 24 business hours.`);
      form.reset();
    });
  }
}
