/**
 * Shekhani LLC Help Center Component
 * Route: /support
 * Features 4 Column Desktop Layout, Search Hero, FAQs & Contact Support
 * Zero hyphen (-) characters in displayed text content.
 */

export function renderHelpCenterPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .help-page-wrapper {
        background-color: #f8fafc;
        padding: 0 0 80px;
        min-height: 85vh;
      }

      /* Hero Search Section */
      .help-hero-section {
        background: linear-gradient(135deg, #00bfa5 0%, #00897b 100%);
        color: #ffffff;
        padding: 60px 20px;
        text-align: center;
        margin-bottom: 50px;
      }

      .help-hero-container {
        max-width: 760px;
        margin: 0 auto;
      }

      .help-hero-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.6rem;
        font-weight: 400;
        margin: 0 0 12px 0;
      }

      .help-hero-sub {
        font-size: 15px;
        opacity: 0.95;
        margin: 0 0 28px 0;
      }

      .help-search-box {
        position: relative;
        width: 100%;
      }

      .help-search-input {
        width: 100%;
        height: 52px;
        padding: 0 20px 0 50px;
        border: none;
        border-radius: 26px;
        font-size: 15px;
        color: #111111;
        outline: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }

      .help-search-icon {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: #666666;
        pointer-events: none;
      }

      /* Main Site Container */
      .help-container {
        width: 92%;
        max-width: 1280px;
        margin: 0 auto;
      }

      .section-heading-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2rem;
        color: #0f172a;
        margin: 0 0 30px 0;
        text-align: center;
      }

      /* Desktop 4-Column Support Topics Grid */
      .help-topics-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin-bottom: 60px;
      }

      .help-topic-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 24px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .help-topic-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }

      .help-topic-icon {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        background: #e6f8f5;
        color: #00897b;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }

      .help-topic-title {
        font-size: 17px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 14px 0;
      }

      .help-article-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .help-article-item {
        margin-bottom: 10px;
      }

      .help-article-link {
        font-size: 13.5px;
        color: #475569;
        text-decoration: none;
        transition: color 0.2s;
        cursor: pointer;
        display: block;
      }

      .help-article-link:hover {
        color: #00897b;
        text-decoration: underline;
      }

      /* FAQs Section */
      .help-faq-section {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 36px;
        margin-bottom: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
      }

      .faq-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }

      .faq-item h3 {
        font-size: 16px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 8px 0;
      }

      .faq-item p {
        font-size: 13.5px;
        color: #64748b;
        line-height: 1.5;
        margin: 0;
      }

      /* Contact Support Banner */
      .help-contact-banner {
        background: #0f172a;
        color: #ffffff;
        border-radius: 12px;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
      }

      .help-contact-info h3 {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.8rem;
        margin: 0 0 6px 0;
      }

      .help-contact-info p {
        font-size: 14px;
        color: #94a3b8;
        margin: 0;
      }

      .btn-contact-support {
        background: #00bfa5;
        color: #ffffff;
        border: none;
        padding: 12px 24px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .btn-contact-support:hover {
        background: #00897b;
      }

      @media (max-width: 1024px) {
        .help-topics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 640px) {
        .help-hero-title {
          font-size: 1.8rem;
        }
        .help-topics-grid {
          grid-template-columns: 1fr;
        }
        .faq-grid {
          grid-template-columns: 1fr;
        }
        .help-contact-banner {
          flex-direction: column;
          text-align: center;
        }
      }
    </style>

    <div class="help-page-wrapper">
      
      <!-- Top Hero Search Section -->
      <section class="help-hero-section">
        <div class="help-hero-container">
          <h1 class="help-hero-title">How can we help you today?</h1>
          <p class="help-hero-sub">Search our wholesale support portal for answers on ordering, shipping, payments and logistics.</p>
          
          <div class="help-search-box">
            <svg class="help-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" class="help-search-input" id="helpSearchInput" placeholder="Search support articles, topics or questions...">
          </div>
        </div>
      </section>

      <div class="help-container">
        
        <h2 class="section-heading-title">Explore Support Topics</h2>

        <!-- Desktop 4-Column Support Topics Grid -->
        <div class="help-topics-grid">
          
          <!-- Column 1: Buying on Shekhani LLC -->
          <div class="help-topic-card">
            <div class="help-topic-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 class="help-topic-title">Buying on Shekhani LLC</h3>
            <ul class="help-article-list">
              <li class="help-article-item"><span class="help-article-link">How to place wholesale orders</span></li>
              <li class="help-article-item"><span class="help-article-link">Understanding minimum order quantities</span></li>
              <li class="help-article-item"><span class="help-article-link">Payment terms and accepted methods</span></li>
              <li class="help-article-item"><span class="help-article-link">Order tracking and status updates</span></li>
            </ul>
          </div>

          <!-- Column 2: Selling on Shekhani LLC -->
          <div class="help-topic-card">
            <div class="help-topic-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3 class="help-topic-title">Selling on Shekhani LLC</h3>
            <ul class="help-article-list">
              <li class="help-article-item"><span class="help-article-link">Brand distributor onboarding guide</span></li>
              <li class="help-article-item"><span class="help-article-link">Wholesale catalog listing setup</span></li>
              <li class="help-article-item"><span class="help-article-link">Commission structure and payouts</span></li>
              <li class="help-article-item"><span class="help-article-link">Managing inventory stock levels</span></li>
            </ul>
          </div>

          <!-- Column 3: Shipping & Logistics -->
          <div class="help-topic-card">
            <div class="help-topic-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="help-topic-title">Shipping & Fulfillment</h3>
            <ul class="help-article-list">
              <li class="help-article-item"><span class="help-article-link">Nationwide freight shipping rates</span></li>
              <li class="help-article-item"><span class="help-article-link">Estimated delivery timelines</span></li>
              <li class="help-article-item"><span class="help-article-link">Warehouse locations and pickup</span></li>
              <li class="help-article-item"><span class="help-article-link">Handling damaged or missing goods</span></li>
            </ul>
          </div>

          <!-- Column 4: Account & Safety -->
          <div class="help-topic-card">
            <div class="help-topic-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="help-topic-title">Account & Safety</h3>
            <ul class="help-article-list">
              <li class="help-article-item"><span class="help-article-link">Reseller tax ID verification</span></li>
              <li class="help-article-item"><span class="help-article-link">Updating business account profile</span></li>
              <li class="help-article-item"><span class="help-article-link">Password reset and security settings</span></li>
              <li class="help-article-item"><span class="help-article-link">Privacy controls and data safety</span></li>
            </ul>
          </div>

        </div>

        <!-- FAQs Section -->
        <h2 class="section-heading-title">Frequently Asked Questions</h2>
        
        <div class="help-faq-section">
          <div class="faq-grid">
            <div class="faq-item">
              <h3>What are the qualifications to buy wholesale on Shekhani LLC?</h3>
              <p>Retail store owners and corporate buyers with a valid state reseller permit or tax ID can purchase wholesale products directly from our catalog.</p>
            </div>
            <div class="faq-item">
              <h3>How fast are orders processed and dispatched?</h3>
              <p>Most wholesale orders are processed and shipped from our main Chesterfield Missouri warehouse within 24 to 48 business hours.</p>
            </div>
            <div class="faq-item">
              <h3>What payment options do you support for bulk purchases?</h3>
              <p>We accept major credit cards, wire transfers, ACH payments, and net payment terms for approved trade accounts.</p>
            </div>
            <div class="faq-item">
              <h3>How do I apply to list my brand on Shekhani LLC?</h3>
              <p>Click Sign up to sell in the main menu to submit your brand distribution application for team review.</p>
            </div>
          </div>
        </div>

        <!-- Direct Contact Support Banner -->
        <div class="help-contact-banner">
          <div class="help-contact-info">
            <h3>Still need assistance?</h3>
            <p>Our dedicated B2B wholesale support team is available Monday through Friday to answer your inquiries.</p>
          </div>
          <button type="button" class="btn-contact-support" id="btnSupportEmail">
            Contact Support Team
          </button>
        </div>

      </div>
    </div>
  `;

  // Bind Events
  container.querySelectorAll('.help-article-link').forEach(link => {
    link.addEventListener('click', () => {
      alert(`Article Info: ${link.textContent.trim()}\n\nFor detailed assistance regarding this topic, please contact support at haris@shekhanillc.com or +1 (314) 904-9538.`);
    });
  });

  container.querySelector('#btnSupportEmail')?.addEventListener('click', () => {
    alert(`Shekhani LLC Wholesale Support:\n\nEmail: haris@shekhanillc.com\nPhone: +1 (314) 904-9538\nAddress: 1120 Weidman Rd, Chesterfield MO 63017, USA`);
  });
}
