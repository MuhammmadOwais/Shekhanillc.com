/**
 * Performance Proof Section Component for Shekhani LLC
 * Displays real Cloudinary proof screenshots with dimmed & blurred backgrounds
 * overlaid with crisp verified revenue, ROAS, and order metrics.
 */

export function renderPerformanceProofSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const proofs = [
    {
      title: "Lifetime Account Revenue",
      stat: "$409,686.63",
      substat: "9.98 ROAS | 10.02% ACOS",
      tag: "Verified Lifetime Scale",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785632106/performancelifetime_z3d7uz.jpg"
    },
    {
      title: "12-Month Sales Volume",
      stat: "$412,764.12",
      substat: "8,274 Units | $55.43 Avg Order",
      tag: "1-Year Performance",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785632105/salessnapshot_itw4us.jpg"
    },
    {
      title: "2026 YTD Ad Revenue",
      stat: "$82,773.15",
      substat: "4.75 ROAS | 21.07% ACOS",
      tag: "Jan 1 - Jul 29, 2026",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785632105/july1to29july2026_hmodqb.jpg"
    },
    {
      title: "Marketplace Fulfillment",
      stat: "6,637 Orders",
      substat: "99.8% On-Time Dispatch Rate",
      tag: "Last 365 Days",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785632105/manageorders_whlljz.jpg"
    }
  ];

  container.innerHTML = `
    <section class="performance-proof-section">
      <div class="proof-container">
        <div class="proof-header">
          <span class="proof-badge">VERIFIED TRACK RECORD & PROOF</span>
          <h2 class="proof-heading">Real Marketplace Performance & ROAS</h2>
          <p class="proof-subheading">
            Live sales snapshot data from brand storefronts managed, optimized, and scaled under the Shekhani LLC distribution engine.
          </p>
        </div>

        <div class="proof-grid">
          ${proofs.map(p => `
            <div class="proof-card">
              <!-- Dimmed & Blurred Background Screenshot -->
              <div class="proof-bg" style="background-image: url('${p.image}');"></div>
              <div class="proof-overlay"></div>
              
              <!-- Content Overlay -->
              <div class="proof-content">
                <div class="proof-tag-row">
                  <span class="proof-card-tag">${p.tag}</span>
                </div>
                <div class="proof-main-stat">${p.stat}</div>
                <div class="proof-title">${p.title}</div>
                <div class="proof-substat">${p.substat}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .performance-proof-section {
        background-color: #080c14;
        padding: 70px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .proof-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .proof-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 48px auto;
      }
      .proof-badge {
        display: inline-block;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .proof-heading {
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-bottom: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .proof-subheading {
        font-size: 16px;
        color: #94a3b8;
        line-height: 1.6;
        font-weight: 400;
      }
      .proof-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .proof-card {
        position: relative;
        height: 240px;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: #0f172a;
        transition: all 0.35s ease;
      }
      .proof-card:hover {
        border-color: #00d084;
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 208, 132, 0.15);
      }
      .proof-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0.3;
        filter: blur(5px) grayscale(20%);
        transition: all 0.4s ease;
      }
      .proof-card:hover .proof-bg {
        opacity: 0.45;
        filter: blur(2px) grayscale(0%);
        transform: scale(1.04);
      }
      .proof-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.92) 100%);
      }
      .proof-content {
        position: relative;
        z-index: 10;
        padding: 24px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .proof-card-tag {
        display: inline-block;
        font-size: 11px;
        font-weight: 700;
        background: rgba(0, 208, 132, 0.15);
        color: #00d084;
        border: 1px solid rgba(0, 208, 132, 0.3);
        padding: 4px 10px;
        border-radius: 20px;
      }
      .proof-main-stat {
        font-size: 30px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-top: 8px;
      }
      .proof-title {
        font-size: 14px;
        font-weight: 600;
        color: #e2e8f0;
      }
      .proof-substat {
        font-size: 12px;
        color: #00d084;
        font-weight: 700;
        margin-top: 4px;
      }

      @media (max-width: 1024px) {
        .proof-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .performance-proof-section {
          padding: 40px 16px;
        }
        .proof-heading {
          font-size: 24px;
        }
        .proof-subheading {
          font-size: 13px;
        }
        .proof-grid {
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .proof-card {
          height: 200px;
        }
        .proof-main-stat {
          font-size: 26px;
        }
      }
    </style>
  `;
}
