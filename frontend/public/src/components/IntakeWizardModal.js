/**
 * Multi-Step Interactive Brand Qualification & Intake Wizard for Shekhani LLC
 * Clean Faire-Style White Modal Theme matching Image 2
 */

export function renderIntakeWizardModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="intake-wizard-backdrop hidden" id="intakeWizardModal">
      <div class="intake-wizard-card">
        
        <!-- Header Bar with Brand Logo -->
        <div class="wizard-header-bar">
          <div class="wizard-brand-logo">S H E K H A N I</div>
          <button class="intake-wizard-close" id="intakeWizardClose" aria-label="Close modal">&times;</button>
        </div>

        <div class="wizard-content-wrap">
          <h2 class="wizard-title">Apply for Global Distribution</h2>
          <p class="wizard-subtitle">
            Partner with Shekhani LLC to expand your brand across global retail channels with zero upfront risk.
          </p>

          <!-- Progress Bar & Indicator -->
          <div class="wizard-progress-bar">
            <div class="wizard-progress-fill" id="wizardProgressFill" style="width: 25%;"></div>
          </div>
          <div class="wizard-steps-indicator" id="wizardStepsIndicator">Step 1 of 4: Brand Basics</div>

          <form id="intakeWizardForm" onsubmit="event.preventDefault();">
            
            <!-- STEP 1: BRAND BASICS -->
            <div class="wizard-step-pane active" id="wizardStep1">
              <div class="form-group">
                <label class="wizard-label">Brand Name *</label>
                <div class="wizard-input-wrapper">
                  <input type="text" id="wizBrandName" class="wizard-input" placeholder="e.g. Active Goods Co." required>
                </div>
              </div>
              <div class="form-group">
                <label class="wizard-label">Website or Main Storefront URL *</label>
                <div class="wizard-input-wrapper">
                  <input type="url" id="wizStoreUrl" class="wizard-input" placeholder="https://yourbrand.com" required>
                </div>
              </div>
              <div class="form-group">
                <label class="wizard-label">Primary Product Category *</label>
                <div class="wizard-input-wrapper">
                  <select id="wizCategory" class="wizard-select" required>
                    <option value="" disabled selected>Select Category...</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                    <option value="Health & Household">Health & Household</option>
                    <option value="Sports & Outdoor / Golf">Sports & Outdoor / Golf</option>
                    <option value="Patio Lawn & Garden">Patio Lawn & Garden</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>
              </div>
              <div class="wizard-btn-row">
                <button type="button" class="wizard-btn-primary" id="btnStep1Next">Next: Volume & Scale &rarr;</button>
              </div>
            </div>

            <!-- STEP 2: REVENUE & SCALE -->
            <div class="wizard-step-pane" id="wizardStep2">
              <label class="wizard-label mb-3">Current Annual Revenue Range *</label>
              <div class="radio-card-grid">
                <label class="radio-card">
                  <input type="radio" name="wizRevenue" value="under-500k" checked>
                  <div class="radio-card-content">
                    <div class="radio-card-title">Under $500,000 / year</div>
                    <div class="radio-card-desc">Emerging brand looking for initial marketplace scale.</div>
                  </div>
                </label>
                <label class="radio-card">
                  <input type="radio" name="wizRevenue" value="500k-2m">
                  <div class="radio-card-content">
                    <div class="radio-card-title">$500,000 - $2,000,000 / year</div>
                    <div class="radio-card-desc">Established brand seeking omnichannel expansion.</div>
                  </div>
                </label>
                <label class="radio-card">
                  <input type="radio" name="wizRevenue" value="2m-10m">
                  <div class="radio-card-content">
                    <div class="radio-card-title">$2,000,000 - $10,000,000 / year</div>
                    <div class="radio-card-desc">High-growth brand requiring full inventory buyouts.</div>
                  </div>
                </label>
                <label class="radio-card">
                  <input type="radio" name="wizRevenue" value="10m-plus">
                  <div class="radio-card-content">
                    <div class="radio-card-title">$10,000,000+ / year</div>
                    <div class="radio-card-desc">Enterprise brand seeking global MAP enforcement.</div>
                  </div>
                </label>
              </div>
              <div class="wizard-btn-row split-btns">
                <button type="button" class="wizard-btn-outline" id="btnStep2Back">&larr; Back</button>
                <button type="button" class="wizard-btn-primary" id="btnStep2Next">Next: Target Channels &rarr;</button>
              </div>
            </div>

            <!-- STEP 3: TARGET CHANNELS -->
            <div class="wizard-step-pane" id="wizardStep3">
              <label class="wizard-label mb-3">Target Channels & Global Regions</label>
              <div class="checkbox-card-grid">
                <label class="checkbox-card">
                  <input type="checkbox" name="wizChannels" value="Amazon US & Global" checked>
                  <span>Amazon FBA (US, UK, EU, UAE)</span>
                </label>
                <label class="checkbox-card">
                  <input type="checkbox" name="wizChannels" value="Walmart Marketplace" checked>
                  <span>Walmart Marketplace & WFS</span>
                </label>
                <label class="checkbox-card">
                  <input type="checkbox" name="wizChannels" value="TikTok Shop" checked>
                  <span>TikTok Shop Commerce & Creators</span>
                </label>
                <label class="checkbox-card">
                  <input type="checkbox" name="wizChannels" value="eBay Global" checked>
                  <span>eBay Global Network</span>
                </label>
                <label class="checkbox-card">
                  <input type="checkbox" name="wizChannels" value="Google Shopping & Search" checked>
                  <span>Google Shopping & Organic Indexing</span>
                </label>
              </div>
              <div class="wizard-btn-row split-btns">
                <button type="button" class="wizard-btn-outline" id="btnStep3Back">&larr; Back</button>
                <button type="button" class="wizard-btn-primary" id="btnStep3Next">Next: Contact Info &rarr;</button>
              </div>
            </div>

            <!-- STEP 4: CONTACT & SUBMIT -->
            <div class="wizard-step-pane" id="wizardStep4">
              <div class="form-group">
                <label class="wizard-label">Full Name *</label>
                <div class="wizard-input-wrapper">
                  <input type="text" id="wizContactName" class="wizard-input" placeholder="e.g. Sarah Jenkins" required>
                </div>
              </div>
              <div class="form-group">
                <label class="wizard-label">Work Email *</label>
                <div class="wizard-input-wrapper">
                  <input type="email" id="wizContactEmail" class="wizard-input" placeholder="sarah@yourbrand.com" required>
                </div>
              </div>
              <div class="form-group">
                <label class="wizard-label">Phone Number *</label>
                <div class="wizard-input-wrapper">
                  <input type="tel" id="wizContactPhone" class="wizard-input" placeholder="+1 (555) 000-0000" required>
                </div>
              </div>
              <div class="wizard-btn-row split-btns">
                <button type="button" class="wizard-btn-outline" id="btnStep4Back">&larr; Back</button>
                <button type="submit" class="wizard-btn-primary" id="btnWizardSubmit">Submit Brand Application</button>
              </div>
            </div>

            <!-- SUCCESS STATE -->
            <div class="wizard-step-pane" id="wizardSuccess" style="display:none; text-align:center; padding: 20px 0;">
              <div class="success-icon-badge">✓</div>
              <h3 style="color:#111827; font-size:22px; font-weight:800; margin-bottom:10px;">Application Received!</h3>
              <p style="color:#6b7280; font-size:14px; line-height:1.6; max-width:400px; margin:0 auto 24px auto;">
                Our Brand Acquisitions Team will evaluate your storefront's Google indexability & marketplace sales trajectory within 24 hours.
              </p>
              <button type="button" class="wizard-btn-primary" id="btnWizardFinish">Done</button>
            </div>

          </form>
        </div>
      </div>
    </div>

    <style>
      .intake-wizard-backdrop {
        position: fixed;
        inset: 0;
        z-index: 2000;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .intake-wizard-backdrop.hidden {
        display: none !important;
      }
      .intake-wizard-card {
        background: #ffffff;
        border-radius: 12px;
        width: 100%;
        max-width: 480px;
        padding: 28px 32px 32px 32px;
        position: relative;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .wizard-header-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .wizard-brand-logo {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 4px;
        color: #111827;
        text-transform: uppercase;
        font-family: Georgia, serif;
      }
      .intake-wizard-close {
        background: #f3f4f6;
        border: none;
        color: #6b7280;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .intake-wizard-close:hover {
        background: #e5e7eb;
        color: #111827;
      }
      .wizard-title {
        font-size: 22px;
        font-weight: 800;
        color: #111827;
        margin: 0 0 6px 0;
        letter-spacing: -0.5px;
      }
      .wizard-subtitle {
        font-size: 13px;
        color: #6b7280;
        line-height: 1.5;
        margin: 0 0 18px 0;
      }
      .wizard-progress-bar {
        height: 4px;
        background: #e5e7eb;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 6px;
      }
      .wizard-progress-fill {
        height: 100%;
        background: #00d084;
        transition: width 0.3s ease;
      }
      .wizard-steps-indicator {
        font-size: 11.5px;
        color: #6b7280;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .wizard-step-pane {
        display: none;
      }
      .wizard-step-pane.active {
        display: block;
      }
      .form-group {
        margin-bottom: 16px;
      }
      .wizard-label {
        display: block;
        font-size: 12.5px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 6px;
      }
      .wizard-input-wrapper {
        border: 1px solid #d1d5db;
        border-radius: 6px;
        overflow: hidden;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .wizard-input-wrapper:focus-within {
        border-color: #00d084;
        box-shadow: 0 0 0 3px rgba(0, 208, 132, 0.15);
      }
      .wizard-input, .wizard-select {
        width: 100%;
        background: #ffffff;
        border: none;
        padding: 10px 12px;
        color: #111827;
        font-size: 13.5px;
        outline: none;
      }
      .wizard-input::placeholder {
        color: #9ca3af;
      }
      .radio-card-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
      }
      .radio-card {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 10px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .radio-card:hover, .radio-card:has(input:checked) {
        border-color: #00d084;
        background: rgba(0, 208, 132, 0.04);
      }
      .radio-card-title {
        font-size: 13px;
        font-weight: 700;
        color: #111827;
      }
      .radio-card-desc {
        font-size: 11.5px;
        color: #6b7280;
        margin-top: 1px;
      }
      .checkbox-card-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .checkbox-card {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 10px 12px;
        color: #111827;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: border 0.2s ease;
      }
      .checkbox-card:hover, .checkbox-card:has(input:checked) {
        border-color: #00d084;
      }
      .wizard-btn-row {
        margin-top: 20px;
      }
      .wizard-btn-row.split-btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .wizard-btn-primary {
        background: #111827;
        color: #ffffff;
        border: none;
        padding: 12px 20px;
        border-radius: 6px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;
        text-align: center;
      }
      .wizard-btn-primary:hover {
        background: #00d084;
        color: #000000;
      }
      .wizard-btn-outline {
        background: transparent;
        color: #4b5563;
        border: 1px solid #d1d5db;
        padding: 12px 18px;
        border-radius: 6px;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .wizard-btn-outline:hover {
        color: #111827;
        border-color: #111827;
      }
      .success-icon-badge {
        width: 48px;
        height: 48px;
        background: rgba(0, 208, 132, 0.12);
        color: #00d084;
        border: 2px solid #00d084;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 900;
        margin: 0 auto 14px auto;
      }
    </style>
  `;

  // Attach Logic
  let currentStep = 1;
  const fill = document.getElementById('wizardProgressFill');
  const indicator = document.getElementById('wizardStepsIndicator');
  const modal = document.getElementById('intakeWizardModal');

  document.getElementById('intakeWizardClose')?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  function goToStep(step) {
    currentStep = step;
    document.querySelectorAll('.wizard-step-pane').forEach(el => el.classList.remove('active'));
    document.getElementById(`wizardStep${step}`).classList.add('active');
    
    fill.style.width = `${step * 25}%`;
    const stepTitles = ["Brand Basics", "Volume & Scale", "Target Channels", "Contact Info"];
    indicator.textContent = `Step ${step} of 4: ${stepTitles[step - 1]}`;
  }

  document.getElementById('btnStep1Next')?.addEventListener('click', () => {
    const brand = document.getElementById('wizBrandName').value;
    const url = document.getElementById('wizStoreUrl').value;
    if (brand && url) goToStep(2);
    else alert('Please enter your Brand Name and Store URL.');
  });

  document.getElementById('btnStep2Back')?.addEventListener('click', () => goToStep(1));
  document.getElementById('btnStep2Next')?.addEventListener('click', () => goToStep(3));

  document.getElementById('btnStep3Back')?.addEventListener('click', () => goToStep(2));
  document.getElementById('btnStep3Next')?.addEventListener('click', () => goToStep(4));

  document.getElementById('btnStep4Back')?.addEventListener('click', () => goToStep(3));

  document.getElementById('intakeWizardForm')?.addEventListener('submit', () => {
    document.querySelectorAll('.wizard-step-pane').forEach(el => el.classList.remove('active'));
    document.getElementById('wizardSuccess').style.display = 'block';
    indicator.textContent = 'Application Completed';
    fill.style.width = '100%';
  });

  document.getElementById('btnWizardFinish')?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}

export function openIntakeWizardModal() {
  const modal = document.getElementById('intakeWizardModal');
  if (modal) modal.classList.remove('hidden');
}
