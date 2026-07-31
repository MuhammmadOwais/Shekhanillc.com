/**
 * Shekhani LLC Brand Terms of Service Page (Full Width, Professional Layout, Zero Hyphens)
 */

export function renderBrandTermsPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper-full">
      <div class="legal-full-container">
        
        <h1 class="legal-title-full">Brand Terms of Service</h1>

        <div class="legal-content-full">
          <section class="legal-section">
            <h2>1. Scope of Brand Representation</h2>
            <p>
              These Brand Terms of Service govern manufacturers, brand owners, authorized master distributors, and suppliers listing products on Shekhani LLC. By partnering with Shekhani LLC, brand suppliers grant us non exclusive rights to market, sell, and distribute listed products across our verified retail partner network.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Product Quality and Authenticity Warranties</h2>
            <p>
              Brand partners guarantee that all inventory supplied to Shekhani LLC is 100 percent authentic, genuine, compliant with federal safety standards, and free from manufacturing defects.
            </p>
            <ul class="legal-list">
              <li>• Suppliers must provide certificates of authenticity or brand authorization letters upon request.</li>
              <li>• Counterfeit, refurbished, or expired products are strictly prohibited on the platform.</li>
              <li>• Brand owners bear full responsibility for product liability compliance within destination sales regions.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Minimum Advertised Price (MAP) Policies</h2>
            <p>
              Shekhani LLC respects and enforces brand owner Minimum Advertised Price (MAP) guidelines. Retail buyers participating in our platform are bound by contract to uphold published brand MAP thresholds across online marketplaces and physical store locations.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Inventory Supply and Fulfillment</h2>
            <p>
              Brand suppliers must maintain consistent stock levels to satisfy wholesale buyer orders efficiently.
            </p>
            <ul class="legal-list">
              <li>1. Stock availability feeds must be updated daily or synchronized via API integration.</li>
              <li>2. Backorders must be communicated to Shekhani LLC logistics coordinators within 24 hours.</li>
              <li>3. Packaging must adhere to standard master carton specifications to prevent transit damage.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Wholesale Margins and Brand Settlement</h2>
            <p>
              Wholesale payouts and distribution margins are governed by individual vendor supplier contracts. Settlement disbursements are processed according to agreed schedule terms, typically net 30 days post warehouse receipt verification.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Brand Termination and Delisting</h2>
            <p>
              Either party may terminate brand listing partnerships upon 30 days written notice. Existing wholesale pending orders placed prior to notice must be honored in full.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Vendor Support</h2>
            <p>
              For vendor onboarding inquiries, brand compliance, or MAP enforcement reports, reach out to our Brand Relations team at <strong>haris@shekhanillc.com</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  `;
}
