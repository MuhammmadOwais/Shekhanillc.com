/**
 * Professional Light Theme Minimalist Footer Component for Shekhani LLC
 * Ultra-Compact Height (Desktop & Mobile), No Icons/Emojis, Only Terms of Service & Privacy Policy
 */

export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <footer class="shekhani-light-footer" id="mainFooter">
      <div class="shekhani-footer-container">
        
        <!-- Compact Inline Contact Strip (No Icons / No Emojis) -->
        <div class="footer-compact-contact">
          <div class="contact-item-inline">
            <span class="contact-label-small">Phone:</span>
            <a href="tel:+13149049538" class="contact-link-small">+1 (314) 904-9538</a>
          </div>
          <span class="contact-dot-sep">•</span>

          <div class="contact-item-inline">
            <span class="contact-label-small">Email:</span>
            <a href="mailto:sales@shekhanillc.com" class="contact-link-small">sales@shekhanillc.com</a>
          </div>
          <span class="contact-dot-sep">•</span>

          <div class="contact-item-inline">
            <span class="contact-label-small">Address:</span>
            <span class="contact-text-small">Chesterfield 63017 MO US</span>
          </div>
        </div>

        <!-- Ultra-Compact Bottom Copyright & Only Terms / Privacy Policy -->
        <div class="footer-compact-bottom">
          <span class="copyright-small">© 2026 Shekhani LLC. All rights reserved.</span>
          
          <nav class="footer-legal-inline">
            <a href="/terms-of-service" class="legal-link-small" id="ftTerms">Terms of Service</a>
            <span class="pipe-sep">|</span>
            <a href="/privacy-policy" class="legal-link-small" id="ftPrivacy">Privacy Policy</a>
          </nav>
        </div>

      </div>
    </footer>

    <style>
      .shekhani-light-footer {
        background-color: #ffffff;
        color: #334155;
        border-top: 2.5px solid #94a3b8;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        padding: 24px 0 18px 0;
        margin-top: 20px;
      }
      .shekhani-footer-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      /* Compact Inline Contact Strip */
      .footer-compact-contact {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px 18px;
        padding-bottom: 12px;
        border-bottom: 1px solid #f1f5f9;
        font-size: 12.5px;
      }
      .contact-item-inline {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .contact-label-small {
        font-weight: 700;
        color: #0f172a;
      }
      .contact-link-small {
        color: #059669;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;
      }
      .contact-link-small:hover {
        color: #00d084;
        text-decoration: underline;
      }
      .contact-text-small {
        color: #475569;
        font-weight: 500;
      }
      .contact-dot-sep {
        color: #cbd5e1;
        font-size: 10px;
      }

      /* Bottom Bar */
      .footer-compact-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        color: #64748b;
        flex-wrap: wrap;
        gap: 8px;
      }
      .copyright-small {
        font-weight: 500;
        color: #64748b;
      }
      .footer-legal-inline {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .legal-link-small {
        color: #64748b;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        transition: color 0.2s ease;
      }
      .legal-link-small:hover {
        color: #059669;
      }
      .pipe-sep {
        color: #cbd5e1;
        font-size: 11px;
      }

      /* Mobile Compact Adjustments */
      @media (max-width: 768px) {
        .shekhani-light-footer {
          padding: 16px 0 14px 0 !important;
        }
        .footer-compact-contact {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
          gap: 6px !important;
          padding-bottom: 10px !important;
        }
        .contact-dot-sep {
          display: none !important;
        }
        .footer-compact-bottom {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
          gap: 6px !important;
        }
        .contact-item-inline {
          font-size: 11.5px !important;
        }
        .legal-link-small, .copyright-small {
          font-size: 11px !important;
        }
      }
    </style>
  `;

  // Bind Only Terms & Privacy Links
  document.getElementById('ftTerms')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/terms-of-service');
  });

  document.getElementById('ftPrivacy')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/privacy-policy');
  });
}
