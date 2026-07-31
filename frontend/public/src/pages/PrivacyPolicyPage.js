/**
 * Shekhani LLC Privacy Policy Page (Full Width, Professional Layout, Zero Hyphens)
 */

export function renderPrivacyPolicyPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper-full">
      <div class="legal-full-container">
        
        <h1 class="legal-title-full">Privacy Policy</h1>

        <div class="legal-content-full">
          <section class="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Shekhani LLC is dedicated to protecting the commercial privacy and corporate data of our wholesale buyers, retail partners, and brand suppliers. This Privacy Policy details how we collect, store, utilize, and safeguard business information gathered across our website and digital transaction systems.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Information We Collect</h2>
            <p>
              We gather essential commercial data required to conduct secure B2B transactions and fulfill wholesale purchase orders.
            </p>
            <ul class="legal-list">
              <li>• Business Registration Data: Company legal name, resale tax identification numbers, business address, and contact details.</li>
              <li>• User Account Profile Data: Account representative name, business email address, phone numbers, and encrypted security passwords.</li>
              <li>• Financial and Transaction Data: Order histories, payment invoice records, bank wire routing details, and delivery destinations.</li>
              <li>• Technical Usage Data: IP addresses, browser types, session activity logs, and system performance telemetry.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. How We Use Business Data</h2>
            <p>
              Corporate information collected by Shekhani LLC is strictly utilized to operate and enhance our wholesale supply chain services.
            </p>
            <ul class="legal-list">
              <li>1. Processing and dispatching bulk purchase orders to verified retail destinations.</li>
              <li>2. Verifying business tax resale credentials and qualifying enterprise wholesale buyers.</li>
              <li>3. Communicating order tracking updates, invoice notifications, and customer support responses.</li>
              <li>4. Preventing unauthorized account access, payment fraud, and platform misuse.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or trade private commercial information to third party brokers. Data sharing is limited strictly to authorized service partners necessary to complete wholesale order fulfillment, such as logistics freight carriers, payment processing gateways, and legal regulatory authorities when required by law.
            </p>
          </section>

          <section class="legal-section">
            <h2>5. Data Security Measures</h2>
            <p>
              Shekhani LLC employs robust industry standard encryption protocols, secure SSL socket layers, firewalls, and restricted administrative access control to protect sensitive company records against loss, theft, or unauthorized access.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Your Commercial Privacy Rights</h2>
            <p>
              Registered partners maintain the right to review, update, or request deletion of their business contact information. You may opt out of promotional communications at any time by updating your account notification preferences or contacting our privacy officers.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Contacting Our Data Protection Team</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to exercise data privacy rights, email us at <strong>haris@shekhanillc.com</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  `;
}
