/**
 * Shekhani LLC Terms of Service Page (Full Width, Professional Layout, Zero Hyphens)
 */

export function renderTermsOfServicePage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper-full">
      <div class="legal-full-container">
        
        <h1 class="legal-title-full">Terms of Service</h1>

        <div class="legal-content-full">
          <section class="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              Welcome to Shekhani LLC. These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Shekhani LLC concerning your access to and use of our wholesale B2B platform, services, and associated web infrastructure. By registering an account or purchasing products through our platform, you acknowledge that you have read, understood, and agreed to be bound by all of these terms.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. B2B Eligibility and Account Registration</h2>
            <p>
              Our services are strictly tailored for legitimate business entities, retail store owners, verified distributors, and commercial enterprise buyers.
            </p>
            <ul class="legal-list">
              <li>• You must be at least 18 years of age or possess legal authorization to represent your business organization.</li>
              <li>• All information submitted during registration must be truthful, accurate, complete, and current.</li>
              <li>• You are solely responsible for maintaining the confidentiality of your account credentials and password.</li>
              <li>• Shekhani LLC reserves the right to suspend or terminate accounts that provide fraudulent business information.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Wholesale Pricing and Orders</h2>
            <p>
              Wholesale pricing offered on Shekhani LLC is confidential business information intended exclusively for registered enterprise partners.
            </p>
            <ul class="legal-list">
              <li>• Prices are displayed in United States Dollars and exclude applicable shipping fees, taxes, and tariffs.</li>
              <li>• Minimum order quantities may apply depending on specific product categories and brand agreements.</li>
              <li>• Orders placed through the platform represent binding offers to purchase wholesale inventory.</li>
              <li>• Shekhani LLC reserves the right to accept, limit, or decline any bulk order prior to dispatch.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Payment Terms and Invoicing</h2>
            <p>
              All wholesale purchases must be settled using authorized payment methods prior to fulfillment unless approved for extended credit terms.
            </p>
            <ul class="legal-list">
              <li>1. Accepted payment methods include major credit cards, debit cards, electronic bank wire transfers, and ACH payments.</li>
              <li>2. Invoices generated upon order confirmation must be settled in full prior to warehouse release.</li>
              <li>3. Late payments on extended line credit may incur administrative interest charges at standard commercial rates.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Shipping, Logistics, and Freight</h2>
            <p>
              Freight delivery schedules are estimates calculated upon order verification. Shekhani LLC coordinates nationwide logistics across primary freight corridors to ensure timely wholesale distribution. Risk of loss passes to the buyer upon carrier pickup at our warehouse distribution hubs.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Returns, Claims, and Damaged Freight</h2>
            <p>
              Any claims regarding freight discrepancies, missing items, or damaged wholesale inventory must be reported to our customer support team within 7 business days of delivery receipt. Returned goods must remain unopened in original master carton packaging.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              Shekhani LLC shall not be liable for indirect, incidental, consequential, or punitive damages arising from product distribution delays, market fluctuations, or commercial stock unavailability beyond reasonable control.
            </p>
          </section>

          <section class="legal-section">
            <h2>8. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms of Service, please contact our legal department via email at <strong>haris@shekhanillc.com</strong> or phone at <strong>+1 (314) 904-9538</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  `;
}
