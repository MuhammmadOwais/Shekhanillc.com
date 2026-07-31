/**
 * Shekhani LLC IP Policy Page (Full Width, Professional Layout, Zero Hyphens)
 */

export function renderIPPolicyPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper-full">
      <div class="legal-full-container">
        
        <h1 class="legal-title-full">Intellectual Property Policy</h1>

        <div class="legal-content-full">
          <section class="legal-section">
            <h2>1. Overview and Commitment</h2>
            <p>
              Shekhani LLC respects intellectual property rights and expects brand suppliers, retail buyers, and platform users to adhere to copyright, trademark, and trade secret laws. We enforce strict policies against unauthorized asset reproduction, brand infringement, and counterfeit goods distribution.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Trademarks and Proprietary Branding</h2>
            <p>
              All brand logos, company names, service marks, graphics, header designs, and platform visual identities displayed on Shekhani LLC are registered trademarks of Shekhani LLC or authorized brand partners.
            </p>
            <ul class="legal-list">
              <li>• You may not use, copy, reproduce, or modify Shekhani LLC trademarks without prior explicit written permission.</li>
              <li>• Brand product titles and trademarks belonging to third party manufacturers are used under license or distribution agreements.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Copyright Ownership and Content Usage</h2>
            <p>
              Original platform code, UI layout designs, product photography, digital imagery, text documentation, and software architecture are protected under copyright laws.
            </p>
            <ul class="legal-list">
              <li>1. Retail buyers are granted limited non transferable rights to utilize product descriptions and authorized media solely to resell legitimate inventory purchased through Shekhani LLC.</li>
              <li>2. Scraping, copying master database content, or duplicating website code for unauthorized platform construction is strictly prohibited.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Infringement Reporting Procedure</h2>
            <p>
              If you believe your copyrighted work or registered trademark has been used on Shekhani LLC without authorization, please submit a formal infringement notification to our compliance department containing the following details:
            </p>
            <ul class="legal-list">
              <li>• Physical or electronic signature of the intellectual property owner or authorized representative.</li>
              <li>• Identification of the copyrighted work or trademark claimed to have been infringed.</li>
              <li>• Specific URL location or product SKU on Shekhani LLC containing the material.</li>
              <li>• Your business address, telephone number, and official email address.</li>
              <li>• A formal statement expressing good faith belief that the contested material is unauthorized.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Compliance Contact</h2>
            <p>
              Send formal intellectual property notices and brand authorization documents to <strong>haris@shekhanillc.com</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  `;
}
