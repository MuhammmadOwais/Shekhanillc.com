/**
 * Interactive Marketplace Listing Transformation Component for Shekhani LLC
 * Clean, high-contrast dark theme layout without emojis.
 * Showcases Before (Unoptimized listing) vs After (Shekhani Optimized storefront) with clean badges.
 */

export function renderListingBeforeAfterSlider(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="listing-slider-section">
      <div class="slider-container">
        <div class="slider-header">
          <span class="slider-badge">PROOF OF EXECUTION</span>
          <h2 class="slider-heading">Storefront & Listing Transformation</h2>
          <p class="slider-subheading">
            See how we transform basic marketplace listings into high-converting, brand-protected digital storefronts indexed across Google and global retail channels.
          </p>
        </div>

        <div class="transformation-cards-grid">
          <!-- BEFORE CARD -->
          <div class="transform-card card-before">
            <div class="card-status-pill pill-before">UNOPTIMIZED STOREFRONT</div>
            <div class="card-image-box">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80" alt="Unoptimized listing example" class="transform-img">
              <div class="map-status-banner banner-warning">MAP Price Erosion Detected ($19.99 vs $29.99 MSRP)</div>
            </div>
            <div class="transform-details">
              <h4 class="transform-title">Basic Marketplace Listing</h4>
              <ul class="transform-list list-before">
                <li><span class="dot-red"></span> Low-resolution studio photography & missing infographics</li>
                <li><span class="dot-red"></span> Generic title tags lacking Google SEO search indexation</li>
                <li><span class="dot-red"></span> Unauthorized 3P sellers causing buybox price erosion</li>
                <li><span class="dot-red"></span> Low conversion velocity & zero brand storefront design</li>
              </ul>
            </div>
          </div>

          <!-- VS DIVIDER -->
          <div class="transform-vs-badge">VS</div>

          <!-- AFTER CARD -->
          <div class="transform-card card-after">
            <div class="card-status-pill pill-after">SHEKHANI OPTIMIZED</div>
            <div class="card-image-box">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" alt="Optimized brand store" class="transform-img">
              <div class="map-status-banner banner-success">Strict MAP Enforcement & Verified Storefront</div>
            </div>
            <div class="transform-details">
              <h4 class="transform-title">Enterprise Brand Storefront & Listing</h4>
              <ul class="transform-list list-after">
                <li><span class="dot-green"></span> 3D studio renders & high-converting A+ infographics</li>
                <li><span class="dot-green"></span> Full Amazon A+ Content & custom Brand Store build</li>
                <li><span class="dot-green"></span> Page 1 Google Organic SEO & Google Shopping sync</li>
                <li><span class="dot-green"></span> +64% Average Conversion Increase & $0 upfront cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .listing-slider-section {
        background-color: #05070a;
        padding: 80px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .slider-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .slider-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 50px auto;
      }
      .slider-badge {
        display: inline-block;
        font-size: 11.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .slider-heading {
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-bottom: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .slider-subheading {
        font-size: 16px;
        color: #94a3b8;
        line-height: 1.6;
      }
      .transformation-cards-grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 24px;
        align-items: center;
      }
      .transform-card {
        background: #0f172a;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        transition: all 0.35s ease;
      }
      .card-before {
        border-color: rgba(239, 68, 68, 0.25);
      }
      .card-after {
        border-color: rgba(0, 208, 132, 0.35);
        box-shadow: 0 10px 30px rgba(0, 208, 132, 0.08);
      }
      .card-status-pill {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
        padding: 6px 14px;
        border-radius: 20px;
        margin-bottom: 16px;
        text-transform: uppercase;
      }
      .pill-before {
        background: rgba(239, 68, 68, 0.12);
        color: #f87171;
        border: 1px solid rgba(239, 68, 68, 0.3);
      }
      .pill-after {
        background: rgba(0, 208, 132, 0.12);
        color: #00d084;
        border: 1px solid rgba(0, 208, 132, 0.3);
      }
      .card-image-box {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        height: 230px;
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .transform-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .map-status-banner {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        font-size: 12px;
        font-weight: 700;
        padding: 8px 12px;
        border-radius: 6px;
        text-align: center;
        backdrop-filter: blur(4px);
      }
      .banner-warning {
        background: rgba(239, 68, 68, 0.9);
        color: #ffffff;
      }
      .banner-success {
        background: rgba(0, 208, 132, 0.9);
        color: #000000;
      }
      .transform-title {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 14px;
      }
      .transform-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .transform-list li {
        font-size: 13.5px;
        line-height: 1.45;
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .dot-red {
        width: 7px;
        height: 7px;
        background-color: #ef4444;
        border-radius: 50%;
        margin-top: 6px;
        flex-shrink: 0;
      }
      .dot-green {
        width: 7px;
        height: 7px;
        background-color: #00d084;
        border-radius: 50%;
        margin-top: 6px;
        flex-shrink: 0;
      }
      .list-before li {
        color: #94a3b8;
      }
      .list-after li {
        color: #e2e8f0;
        font-weight: 600;
      }
      .transform-vs-badge {
        width: 44px;
        height: 44px;
        background: #00d084;
        color: #000000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 900;
        box-shadow: 0 0 20px rgba(0, 208, 132, 0.35);
      }

      @media (max-width: 900px) {
        .listing-slider-section {
          padding: 40px 16px;
        }
        .slider-heading {
          font-size: 24px;
        }
        .slider-subheading {
          font-size: 13px;
        }
        .transformation-cards-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .transform-vs-badge {
          margin: 0 auto;
        }
        .card-image-box {
          height: 180px;
        }
      }
    </style>
  `;
}
