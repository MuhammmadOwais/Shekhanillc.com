/**
 * Faire-Style Clean White Footer Component for Shekhani LLC
 * Matches Reference Screenshot Layout (Logo & Headline Left, 3 Columns Right, Pipe Legal Bar)
 * Zero hyphen (-) characters in displayed text content.
 */

import { openAuthModal } from './AuthModal.js';

export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .shekhani-footer {
        background-color: #ffffff;
        color: #111111;
        border-top: 1px solid #e2e8f0;
        font-family: var(--font-sans, 'Inter', sans-serif);
        padding: 60px 0 30px;
      }

      .shekhani-footer-container {
        width: 92%;
        max-width: 1280px;
        margin: 0 auto;
      }

      /* Main Top Grid (Left Headline + Right 3 Nav Columns) */
      .shekhani-footer-main {
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        gap: 60px;
        align-items: start;
        padding-bottom: 50px;
        border-bottom: 1px solid #f1f5f9;
      }

      /* Left Side Brand Info */
      .shekhani-footer-brand {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .shekhani-footer-logo {
        height: 28px;
        width: auto;
        object-fit: contain;
        align-self: flex-start;
      }

      .shekhani-footer-headline {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 1.75rem;
        font-weight: 400;
        color: #111111;
        line-height: 1.35;
        margin: 0;
        max-width: 440px;
        letter-spacing: -0.3px;
      }

      /* Right Side 3 Navigation Columns */
      .shekhani-footer-nav-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }

      .shekhani-footer-col-title {
        font-size: 13px;
        font-weight: 800;
        color: #111111;
        margin: 0 0 16px 0;
        letter-spacing: 0.2px;
      }

      .shekhani-footer-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .shekhani-footer-nav a {
        color: #475569;
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        transition: color 0.2s ease;
        cursor: pointer;
      }

      .shekhani-footer-nav a:hover {
        color: #00897b;
      }

      /* Bottom Legal Bar matching reference screenshot */
      .shekhani-footer-legal-bar {
        padding-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 12.5px;
        color: #64748b;
      }

      .shekhani-footer-legal-bar strong {
        font-weight: 600;
        color: #475569;
      }

      .shekhani-footer-policies {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .shekhani-footer-policies a {
        color: #64748b;
        text-decoration: none;
        transition: color 0.2s;
        cursor: pointer;
      }

      .shekhani-footer-policies a:hover {
        color: #00897b;
      }

      .policy-pipe {
        color: #cbd5e1;
        user-select: none;
      }

      @media (max-width: 992px) {
        .shekhani-footer-main {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .shekhani-footer-headline {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 600px) {
        .shekhani-footer {
          padding: 40px 0 24px;
        }
        .shekhani-footer-nav-grid {
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .shekhani-footer-legal-bar {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
      }
    </style>

    <footer class="shekhani-footer" id="footer">
      <div class="shekhani-footer-container">
        
        <!-- Main Footer Row -->
        <div class="shekhani-footer-main">
          
          <!-- Left Column: Shekhani Logo & Headline -->
          <div class="shekhani-footer-brand">
            <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785445037/logoshekhanillc_an7mdq.png" alt="Shekhani LLC Logo" class="shekhani-footer-logo">
            <h2 class="shekhani-footer-headline">
              The online wholesale marketplace connecting independent retailers and brands around the world.
            </h2>
          </div>

          <!-- Right Side 3 Navigation Columns -->
          <div class="shekhani-footer-nav-grid">
            
            <!-- Column 1: Company -->
            <div>
              <h3 class="shekhani-footer-col-title">Company</h3>
              <ul class="shekhani-footer-nav">
                <li><a href="/about" id="footAbout">About Us</a></li>
                <li><a href="/shop" id="footShopCatalog">Shop Catalog</a></li>
                <li><a href="/contact" id="footContact">Contact Us</a></li>
              </ul>
            </div>

            <!-- Column 2: Support -->
            <div>
              <h3 class="shekhani-footer-col-title">Support</h3>
              <ul class="shekhani-footer-nav">
                <li><a href="/support" id="footHelp">Help Center</a></li>
                <li><a href="javascript:void(0)" id="footSignUpSell">Sign Up to Sell</a></li>
                <li><a href="javascript:void(0)" id="footWholesaleMarkets">Wholesale Markets</a></li>
              </ul>
            </div>

            <!-- Column 3: Explore -->
            <div>
              <h3 class="shekhani-footer-col-title">Explore</h3>
              <ul class="shekhani-footer-nav">
                <li><a href="/blog" id="footBlog">Blog</a></li>
                <li><a href="/art-craft" id="footCatArt">Art and Craft</a></li>
                <li><a href="/fashion" id="footCatFashion">Fashion Catalog</a></li>
              </ul>
            </div>

          </div>

        </div>

        <!-- Bottom Legal Bar (Pipe Separated matching Screenshot) -->
        <div class="shekhani-footer-legal-bar">
          <div>
            <strong>&copy; 2026 Shekhani LLC. All rights reserved.</strong>
          </div>

          <div class="shekhani-footer-policies">
            <a href="/terms-of-service" id="linkTerms">Terms of Service</a>
            <span class="policy-pipe">|</span>
            <a href="/brand-terms-of-service" id="linkBrandTerms">Brand Terms of Service</a>
            <span class="policy-pipe">|</span>
            <a href="/privacy-policy" id="linkPrivacy">Privacy Policy</a>
            <span class="policy-pipe">|</span>
            <a href="/cookies-policy" id="linkCookies">Cookies Policy</a>
            <span class="policy-pipe">|</span>
            <a href="/ip-policy" id="linkIP">IP Policy</a>
          </div>
        </div>

      </div>
    </footer>
  `;

  // Bind Auth Triggers
  document.getElementById('footSignUpSell')?.addEventListener('click', () => openAuthModal('signup', 'sell'));

  // Route Navigations
  const bindRoute = (id, path) => {
    document.getElementById(id)?.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.navigateToRoute) window.navigateToRoute(path);
    });
  };

  bindRoute('footAbout', '/about');
  bindRoute('footShopCatalog', '/shop');
  bindRoute('footContact', '/contact');
  bindRoute('footHelp', '/support');
  bindRoute('footBlog', '/blog');
  bindRoute('footCatArt', '/art-craft');
  bindRoute('footCatFashion', '/fashion');

  bindRoute('linkTerms', '/terms-of-service');
  bindRoute('linkBrandTerms', '/brand-terms-of-service');
  bindRoute('linkPrivacy', '/privacy-policy');
  bindRoute('linkCookies', '/cookies-policy');
  bindRoute('linkIP', '/ip-policy');

  document.getElementById('footWholesaleMarkets')?.addEventListener('click', () => {
    alert("Shekhani LLC Wholesale Markets calendar for 2026: Chesterfield Trade Market, Missouri Expo, and Regional Retailer Summits.");
  });
}
