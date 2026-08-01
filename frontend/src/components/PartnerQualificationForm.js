/**
 * PartnerQualificationForm Component for Shekhani LLC
 * Professional Light Theme Flat Lead Evaluation & Contact Form
 * Flat Seamless Layout (No heavy card box), Compact Mobile Height
 */

export function renderPartnerQualificationForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="partner-form-section" id="partnerFormSection">
      <div class="partner-form-container">
        <div class="partner-form-header">
          <span class="partner-form-badge">GET STARTED TODAY</span>
          <h2 class="partner-form-title">Submit Your Brand For Evaluation</h2>
          <p class="partner-form-subtitle">
            Fill out the details below and our brand partnership team will review your catalog for global marketplace optimization and distribution.
          </p>
        </div>

        <!-- Flat Seamless Form (No Heavy Box / Rect Container) -->
        <form class="flat-qualification-form" id="brandEvalForm">
          <div class="form-grid-2">
            <div class="form-group">
              <label for="brandName">Brand Name *</label>
              <input type="text" id="brandName" placeholder="e.g. Acme Goods Co." required>
            </div>

            <div class="form-group">
              <label for="productCategory">Product Category *</label>
              <select id="productCategory" required>
                <option value="" disabled selected>Select category...</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Art & Craft">Art & Craft</option>
                <option value="Fashion & Accessories">Fashion & Accessories</option>
                <option value="Patio, Lawn & Garden">Patio, Lawn & Garden</option>
                <option value="Pet Supplies">Pet Supplies</option>
                <option value="Office & Electronics">Office & Electronics</option>
                <option value="Other">Other / Multiple</option>
              </select>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label for="currentRevenue">Current Annual Revenue *</label>
              <select id="currentRevenue" required>
                <option value="" disabled selected>Select annual revenue...</option>
                <option value="Under $100k">Under $100,000</option>
                <option value="$100k - $500k">$100,000 - $500,000</option>
                <option value="$500k - $2M">$500,000 - $2,000,000</option>
                <option value="$2M+">$2,000,000+</option>
              </select>
            </div>

            <div class="form-group">
              <label for="websiteLink">Website / Storefront Link *</label>
              <input type="url" id="websiteLink" placeholder="https://yourbrand.com" required>
            </div>
          </div>

          <div class="form-group full-width-group">
            <label>Target Marketplaces (Select all that apply)</label>
            <div class="flat-checkbox-strip">
              <label class="custom-checkbox"><input type="checkbox" value="Amazon" checked> Amazon (FBA/FBM)</label>
              <label class="custom-checkbox"><input type="checkbox" value="Walmart" checked> Walmart Marketplace</label>
              <label class="custom-checkbox"><input type="checkbox" value="eBay"> eBay Global</label>
              <label class="custom-checkbox"><input type="checkbox" value="TikTok Shop" checked> TikTok Shop</label>
              <label class="custom-checkbox"><input type="checkbox" value="International"> International Channels</label>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label for="contactEmail">Work Email *</label>
              <input type="email" id="contactEmail" placeholder="partner@yourbrand.com" required>
            </div>

            <div class="form-group">
              <label for="contactPhone">Phone Number</label>
              <input type="tel" id="contactPhone" placeholder="+1 (555) 000-0000">
            </div>
          </div>

          <div class="form-submit-wrap">
            <button type="submit" class="submit-eval-btn" id="submitEvalBtn">
              Submit Brand For Evaluation
            </button>
          </div>

          <div class="form-status-msg hidden" id="formStatusMsg"></div>
        </form>
      </div>
    </section>

    <style>
      .partner-form-section {
        position: relative;
        background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f0fdf4 100%);
        padding: 55px 24px;
      }
      .partner-form-container {
        max-width: 860px;
        margin: 0 auto;
      }
      .partner-form-header {
        text-align: center;
        margin-bottom: 32px;
      }
      .partner-form-badge {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #059669;
        text-transform: uppercase;
        background: #dcfce7;
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 10px;
        border: 1px solid #86efac;
      }
      .partner-form-title {
        font-size: 34px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 8px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .partner-form-subtitle {
        font-size: 15px;
        color: #475569;
        line-height: 1.5;
        margin: 0;
      }

      /* Flat Form Styling (No Card Box) */
      .flat-qualification-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .form-grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
      }
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .form-group label {
        font-size: 12.5px;
        font-weight: 700;
        color: #1e293b;
      }
      .form-group input, .form-group select {
        padding: 12px 14px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-size: 13.5px;
        color: #0f172a;
        background: #ffffff;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
      }
      .form-group input:focus, .form-group select:focus {
        outline: none;
        border-color: #00d084;
        box-shadow: 0 0 0 3px rgba(0, 208, 132, 0.18);
      }
      .flat-checkbox-strip {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        background: #ffffff;
        padding: 14px 16px;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
      }
      .custom-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12.5px;
        color: #334155;
        font-weight: 600;
        cursor: pointer;
      }
      .custom-checkbox input[type="checkbox"] {
        accent-color: #00d084;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
      .form-submit-wrap {
        margin-top: 6px;
      }
      .submit-eval-btn {
        width: 100%;
        background: #00d084;
        color: #000000;
        padding: 14px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 4px 14px rgba(0, 208, 132, 0.3);
      }
      .submit-eval-btn:hover {
        background: #00b371;
        box-shadow: 0 6px 20px rgba(0, 208, 132, 0.4);
        transform: translateY(-1px);
      }
      .form-status-msg {
        padding: 12px;
        border-radius: 8px;
        font-size: 13.5px;
        text-align: center;
        font-weight: 600;
      }
      .form-status-msg.success {
        background: #f0fdf4;
        color: #15803d;
        border: 1px solid #bbf7d0;
      }
      .form-status-msg.hidden {
        display: none;
      }

      /* Compact Mobile Form Styling */
      @media (max-width: 768px) {
        .partner-form-section {
          padding: 30px 14px !important;
        }
        .partner-form-header {
          margin-bottom: 20px !important;
        }
        .partner-form-title {
          font-size: 23px !important;
          margin-bottom: 6px !important;
        }
        .partner-form-subtitle {
          font-size: 12.5px !important;
        }
        .flat-qualification-form {
          gap: 10px !important;
        }
        .form-grid-2 {
          grid-template-columns: 1fr !important;
          gap: 10px !important;
        }
        .form-group {
          gap: 4px !important;
        }
        .form-group label {
          font-size: 11.5px !important;
        }
        .form-group input, .form-group select {
          padding: 9px 11px !important;
          font-size: 12.5px !important;
          border-radius: 8px !important;
        }
        .flat-checkbox-strip {
          padding: 10px 12px !important;
          gap: 8px 12px !important;
        }
        .custom-checkbox {
          font-size: 11.5px !important;
        }
        .submit-eval-btn {
          padding: 11px !important;
          font-size: 13.5px !important;
          border-radius: 8px !important;
        }
      }
    </style>
  `;

  const form = document.getElementById('brandEvalForm');
  const statusMsg = document.getElementById('formStatusMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const brand = document.getElementById('brandName').value;
      if (statusMsg) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.innerHTML = `✓ Thank you! Evaluation request submitted for <strong>${brand}</strong>. Our team will contact you within 24 hours.`;
        form.reset();
      }
    });
  }
}
