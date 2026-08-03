/**
 * Performance Proof Section Component for Shekhani LLC
 * Displays real Cloudinary proof screenshots with dimmed & blurred backgrounds.
 * Clicking any block opens an interactive Lightbox Modal with the blurred full image.
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
          ${proofs.map((p, index) => `
            <div class="proof-card" data-index="${index}" style="cursor: pointer;">
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
                <div class="proof-click-hint">Click to expand preview &rarr;</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Lightbox Modal for Blurred Image Expansion -->
    <div class="proof-lightbox-backdrop hidden" id="proofLightbox">
      <div class="proof-lightbox-card">
        <button class="proof-lightbox-close" id="proofLightboxClose" aria-label="Close modal">&times;</button>
        <div class="proof-lightbox-header">
          <span class="proof-card-tag" id="lightboxTag"></span>
          <h3 id="lightboxTitle" style="font-size:22px; font-weight:800; color:#ffffff; margin: 8px 0 4px 0;"></h3>
          <p id="lightboxStat" style="color:#00d084; font-size:18px; font-weight:800; margin:0;"></p>
        </div>
        <div class="proof-lightbox-img-wrapper">
          <img id="lightboxImage" src="" alt="Proof Screenshot" class="proof-blurred-modal-img">
        </div>
      </div>
    </div>

    <style>
      .performance-proof-section {
        background-color: #080c14;
        padding: 70px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(10, 2, 2, 0.08);
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
        aspect-ratio: 1 / 1;
        height: auto;
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
        opacity: 0.4;
        filter: blur(1.5px) grayscale(10%);
        transition: all 0.4s ease;
      }
      .proof-card:hover .proof-bg {
        opacity: 0.55;
        filter: blur(0px) grayscale(0%);
        transform: scale(1.04);
      }
      .proof-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.88) 100%);
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
      .proof-click-hint {
        font-size: 11px;
        color: #00d084;
        font-weight: 700;
        margin-top: 10px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(0, 208, 132, 0.1);
        border: 1px dashed rgba(0, 208, 132, 0.4);
        padding: 5px 10px;
        border-radius: 6px;
        transition: all 0.25s ease;
        width: fit-content;
      }
      .proof-card:hover .proof-click-hint {
        background: #00d084;
        color: #000000;
        border-style: solid;
        box-shadow: 0 0 10px rgba(0, 208, 132, 0.4);
      }

      /* Lightbox Modal CSS */
      .proof-lightbox-backdrop {
        position: fixed;
        inset: 0;
        z-index: 2500;
        background: rgba(8, 12, 20, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .proof-lightbox-backdrop.hidden {
        display: none !important;
      }
      .proof-lightbox-card {
        background: #0f172a;
        border: 1px solid rgba(0, 208, 132, 0.3);
        border-radius: 16px;
        width: 100%;
        max-width: 800px;
        padding: 24px;
        position: relative;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      }
      .proof-lightbox-close {
        position: absolute;
        top: 16px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #ffffff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      .proof-lightbox-close:hover {
        background: #00d084;
        color: #000000;
      }
      .proof-lightbox-header {
        margin-bottom: 16px;
      }
      .proof-lightbox-img-wrapper {
        border-radius: 10px;
        overflow: hidden;
        max-height: 480px;
        background: #000000;
      }
      .proof-blurred-modal-img {
        width: 100%;
        height: auto;
        max-height: 480px;
        object-fit: contain;
        display: block;
        opacity: 0.95;
        filter: blur(1px);
        transition: filter 0.3s ease;
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
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory;
          gap: 14px;
          padding-bottom: 14px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .proof-grid::-webkit-scrollbar {
          display: none;
        }
        .proof-card {
          flex: 0 0 78%;
          max-width: 270px;
          aspect-ratio: 1 / 1 !important;
          height: auto !important;
          scroll-snap-align: start;
        }
        .proof-content {
          padding: 18px 16px;
        }
        .proof-main-stat {
          font-size: 24px;
          margin-top: 6px;
        }
        .proof-title {
          font-size: 13px;
        }
        .proof-substat {
          font-size: 11.5px;
          margin-top: 2px;
        }
        .proof-click-hint {
          font-size: 10px;
          margin-top: 4px;
          padding: 3px 8px;
        }
      }
    </style>
  `;

  // Attach Click Handlers to Expand Lightbox Modal with Dimmed & Blurred Image
  const modal = document.getElementById('proofLightbox');
  const modalClose = document.getElementById('proofLightboxClose');
  const lbImage = document.getElementById('lightboxImage');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbStat = document.getElementById('lightboxStat');
  const lbTag = document.getElementById('lightboxTag');

  document.querySelectorAll('.proof-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-index');
      const item = proofs[idx];
      if (item && modal) {
        lbImage.src = item.image;
        lbTitle.textContent = item.title;
        lbStat.textContent = `${item.stat} (${item.substat})`;
        lbTag.textContent = item.tag;
        modal.classList.remove('hidden');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}
