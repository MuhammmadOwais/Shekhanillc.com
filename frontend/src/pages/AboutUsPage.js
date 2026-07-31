/**
 * Corporate Level About Us Page Component for Shekhani LLC
 * Route: /about
 * Clean White Hero Section, Company Mission, Key Metric Counters, 4 Corporate Pillars & Contact CTA
 * Zero hyphen (-) characters in displayed text content.
 */

export function renderAboutUsPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .about-page-wrapper {
        background-color: #ffffff;
        padding: 0 0 90px;
        min-height: 85vh;
      }

      /* Clean White Hero Section */
      .about-hero-section {
        background: #ffffff;
        color: #0f172a;
        padding: 50px 20px 40px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
      }

      .about-hero-container {
        max-width: 860px;
        margin: 0 auto;
      }

      .about-hero-tag {
        display: inline-block;
        background: rgba(0, 191, 165, 0.1);
        color: #00897b;
        border: 1px solid rgba(0, 191, 165, 0.25);
        padding: 4px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      .about-hero-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.8rem;
        font-weight: 400;
        color: #0f172a;
        margin: 0 0 14px 0;
        letter-spacing: -0.5px;
        line-height: 1.25;
      }

      .about-hero-sub {
        font-size: 15.5px;
        color: #64748b;
        line-height: 1.6;
        margin: 0;
      }

      /* Key Metrics Stat Bar */
      .about-stats-bar {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        max-width: 1100px;
        margin: 40px auto 60px auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 30px;
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
        font-size: 2.2rem;
        font-weight: 800;
        color: #00897b;
        margin: 0 0 4px 0;
      }

      .stat-label {
        font-size: 13px;
        color: #64748b;
        font-weight: 600;
        margin: 0;
      }

      /* Main Site Container */
      .about-container {
        width: 92%;
        max-width: 1200px;
        margin: 0 auto;
      }

      /* Mission & Vision Section */
      .mission-vision-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        margin-bottom: 70px;
      }

      .mission-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 36px;
      }

      .mission-card h2 {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.8rem;
        color: #0f172a;
        margin: 0 0 14px 0;
      }

      .mission-card p {
        font-size: 14.5px;
        color: #475569;
        line-height: 1.65;
        margin: 0;
      }

      /* Core Pillars Grid */
      .pillars-section {
        margin-bottom: 70px;
      }

      .pillars-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.2rem;
        color: #0f172a;
        text-align: center;
        margin: 0 0 40px 0;
      }

      .pillars-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }

      .pillar-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 26px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        transition: transform 0.2s;
      }

      .pillar-card:hover {
        transform: translateY(-3px);
      }

      .pillar-icon {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        background: #e6f8f5;
        color: #00897b;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
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

      /* Corporate Contact CTA Banner */
      .about-cta-banner {
        background: linear-gradient(135deg, #00bfa5 0%, #00897b 100%);
        color: #ffffff;
        border-radius: 12px;
        padding: 44px;
        text-align: center;
      }

      .about-cta-banner h2 {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.2rem;
        margin: 0 0 10px 0;
      }

      .about-cta-banner p {
        font-size: 15px;
        opacity: 0.95;
        margin: 0 0 24px 0;
      }

      .btn-about-contact {
        background: #0f172a;
        color: #ffffff;
        border: none;
        padding: 14px 32px;
        font-size: 14.5px;
        font-weight: 800;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .btn-about-contact:hover {
        background: #1e293b;
      }

      @media (max-width: 992px) {
        .about-stats-bar {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
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
        .about-hero-title {
          font-size: 1.9rem;
        }
        .about-stats-bar {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .pillars-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="about-page-wrapper">
      
      <!-- Clean White Hero Section -->
      <section class="about-hero-section">
        <div class="about-hero-container">
          <span class="about-hero-tag">ABOUT SHEKHANI LLC</span>
          <h1 class="about-hero-title">Empowering Retailers & Brand Distributors Nationwide</h1>
          <p class="about-hero-sub">Shekhani LLC is a premier B2B wholesale distributor and supply chain marketplace based in Chesterfield Missouri, connecting independent retail store owners with top manufacturers.</p>
        </div>
      </section>

      <!-- Key Stats Bar -->
      <div class="about-stats-bar">
        <div class="stat-item">
          <p class="stat-number">30+</p>
          <p class="stat-label">Wholesale Categories</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">50,000</p>
          <p class="stat-label">Sq Ft Distribution Hub</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">1,000+</p>
          <p class="stat-label">Verified Retail Partners</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">99.4%</p>
          <p class="stat-label">On time Logistics Rate</p>
        </div>
      </div>

      <div class="about-container">
        
        <!-- Mission & Vision Cards -->
        <div class="mission-vision-grid">
          <div class="mission-card">
            <h2>Our Mission</h2>
            <p>To streamline B2B wholesale logistics by providing retail store owners with transparent volume pricing, curated product lines, and fast ground delivery across all 50 states.</p>
          </div>
          <div class="mission-card">
            <h2>Our Vision</h2>
            <p>Becoming North America's most trusted wholesale distribution partner, empowering independent brands and store owners to grow their businesses with confidence.</p>
          </div>
        </div>

        <!-- Corporate Pillars Section -->
        <div class="pillars-section">
          <h2 class="pillars-title">Our Core Corporate Pillars</h2>
          
          <div class="pillars-grid">
            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Verified Quality</h3>
              <p>Every brand and SKU in our catalog passes strict quality compliance before distribution.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3>Nationwide Speed</h3>
              <p>Dispatched from Chesterfield Missouri to ensure rapid transit to your retail doorstep.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Transparent Pricing</h3>
              <p>Direct B2B wholesale pricing with tiered volume discounts for high margin retail sales.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3>Dedicated Support</h3>
              <p>Direct phone and email support from our experienced B2B supply chain specialists.</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA Banner -->
        <div class="about-cta-banner">
          <h2>Partner with Shekhani LLC Today</h2>
          <p>Ready to stock your retail shelves or distribute your product line through our network?</p>
          <button type="button" class="btn-about-contact" id="btnAboutContactUs">
            Contact Our Team
          </button>
        </div>

      </div>
    </div>
  `;

  // Bind Contact Button
  container.querySelector('#btnAboutContactUs')?.addEventListener('click', () => {
    if (window.navigateToRoute) window.navigateToRoute('/contact');
  });
}
