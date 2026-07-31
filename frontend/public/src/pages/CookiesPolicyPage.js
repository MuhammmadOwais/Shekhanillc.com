/**
 * Shekhani LLC Cookies Policy Page (Full Width, Professional Layout, Zero Hyphens)
 */

export function renderCookiesPolicyPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="legal-page-wrapper-full">
      <div class="legal-full-container">
        
        <h1 class="legal-title-full">Cookies Policy</h1>

        <div class="legal-content-full">
          <section class="legal-section">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text data files stored on your computer, tablet, or mobile browser when visiting websites. They allow web platforms to remember user sessions, recognize returning business accounts, store cart selections, and provide a seamless navigation experience.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. How Shekhani LLC Uses Cookies</h2>
            <p>
              We use cookies and browser storage technologies to maintain platform security, preserve wholesale order sessions, and optimize web performance across desktop and mobile devices.
            </p>
            <ul class="legal-list">
              <li>• Essential Session Cookies: Required to keep business accounts logged in securely while navigating catalog pages and completing order queries.</li>
              <li>• Preference Cookies: Store your chosen website settings, such as language preferences and catalog filter selections.</li>
              <li>• Analytics Telemetry Cookies: Measure website performance, page loading times, and popular product category views to enhance user experience.</li>
              <li>• Security Cookies: Help detect malicious activity, prevent automated bot attacks, and protect transaction endpoints.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Managing Cookie Preferences</h2>
            <p>
              Most modern web browsers automatically accept cookies by default. You can modify your browser settings to block or delete cookies at any time.
            </p>
            <ul class="legal-list">
              <li>1. Google Chrome: Settings &rsaquo; Privacy and Security &rsaquo; Cookies and other site data.</li>
              <li>2. Mozilla Firefox: Options &rsaquo; Privacy & Security &rsaquo; Cookies and Site Data.</li>
              <li>3. Apple Safari: Preferences &rsaquo; Privacy &rsaquo; Block all cookies.</li>
              <li>4. Microsoft Edge: Settings &rsaquo; Site permissions &rsaquo; Cookies and site data.</li>
            </ul>
            <p style="margin-top: 12px;">
              Please note that disabling essential session cookies may prevent full access to wholesale order tools and account portal features.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Third Party Services</h2>
            <p>
              Shekhani LLC may utilize trusted third party service providers, such as CDN media hosting and analytical tracking tools, which set telemetry cookies to optimize global media delivery and monitor service availability.
            </p>
          </section>

          <section class="legal-section">
            <h2>5. Contact Technical Support</h2>
            <p>
              For technical questions regarding web cookie storage or browser telemetry, contact technical administration at <strong>haris@shekhanillc.com</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  `;
}
