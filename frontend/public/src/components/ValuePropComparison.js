/**
 * Shekhani Advantage Component for Shekhani LLC
 * Overhauled to a compact, sleek 3-Card Grid layout with 3 Cloudinary logistics/fulfillment images.
 * Replaces heavy boring text table with an executive visual representation.
 */

export function renderValuePropComparison(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cards = [
    {
      badge: "GLOBAL LOGISTICS FOOTPRINT",
      title: "Multichannel Distribution Hubs",
      desc: "Our automated warehouse hubs across North America & Europe power 2-day Prime/Walmart shipping with 99.8% dispatch reliability.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787825/pexels-andri-file-288172640-36906867_ptktf6.jpg",
      highlight: "2-Day Nationwide & Global Delivery"
    },
    {
      badge: "CAPITAL & INVENTORY BUYOUTS",
      title: "$0 Upfront Partner Investment",
      desc: "We purchase your inventory at wholesale terms upfront, eliminating financial risk while we handle listing optimization, ads, and MAP compliance.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787825/pexels-anntarazevich-8110796_iwrpir.jpg",
      highlight: "100% Upfront Inventory Buyout"
    },
    {
      badge: "SEARCH & BRAND PROTECTION",
      title: "Google SEO & Legal MAP Defense",
      desc: "We syndicate your catalog across Google Shopping and enforce strict MAP pricing algorithms to permanently remove unauthorized 3P sellers.",
      image: "https://res.cloudinary.com/sfjl53dg/image/upload/v1785787825/pexels-artbovich-7511748_blii26.jpg",
      highlight: "Strict MAP & IP Rights Protection"
    }
  ];

  container.innerHTML = `
    <section class="shekhani-advantage-section" id="valuePropSection">
      <div class="advantage-container">
        <div class="advantage-header">
          <span class="advantage-badge">THE SHEKHANI ADVANTAGE</span>
          <h2 class="advantage-heading">Built Different Than Traditional Agencies</h2>
          <p class="advantage-subheading">
            We buy your inventory, optimize your storefronts, and scale your brand across global retail channels with zero monthly fees.
          </p>
        </div>

        <div class="advantage-cards-grid">
          ${cards.map(c => `
            <div class="advantage-card">
              <div class="advantage-card-img-box">
                <img src="${c.image}" alt="${c.title}" class="advantage-card-img">
                <span class="advantage-card-badge">${c.badge}</span>
              </div>
              <div class="advantage-card-content">
                <h3 class="advantage-card-title">${c.title}</h3>
                <p class="advantage-card-desc">${c.desc}</p>
                <div class="advantage-highlight-pill">
                  <span class="highlight-dot"></span>
                  ${c.highlight}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .shekhani-advantage-section {
        background-color: #05070a;
        padding: 70px 24px;
        color: #ffffff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .advantage-container {
        max-width: 1240px;
        margin: 0 auto;
      }
      .advantage-header {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 40px auto;
      }
      .advantage-badge {
        display: inline-block;
        font-size: 11.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .advantage-heading {
        font-size: 34px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -1px;
        margin-bottom: 12px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .advantage-subheading {
        font-size: 15px;
        color: #94a3b8;
        line-height: 1.6;
        font-weight: 400;
      }
      .advantage-cards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .advantage-card {
        background: #0f172a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 0.35s ease;
      }
      .advantage-card:hover {
        border-color: #00d084;
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 208, 132, 0.15);
      }
      .advantage-card-img-box {
        position: relative;
        height: 170px;
        width: 100%;
        overflow: hidden;
        background: #090d16;
      }
      .advantage-card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.88;
        transition: transform 0.4s ease;
      }
      .advantage-card:hover .advantage-card-img {
        transform: scale(1.05);
        opacity: 1;
      }
      .advantage-card-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1px;
        background: rgba(5, 7, 10, 0.85);
        color: #00d084;
        border: 1px solid rgba(0, 208, 132, 0.3);
        padding: 4px 10px;
        border-radius: 20px;
        backdrop-filter: blur(4px);
      }
      .advantage-card-content {
        padding: 22px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }
      .advantage-card-title {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 10px;
        line-height: 1.3;
      }
      .advantage-card-desc {
        font-size: 13.5px;
        color: #cbd5e1;
        line-height: 1.55;
        margin-bottom: 18px;
      }
      .advantage-highlight-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11.5px;
        font-weight: 700;
        color: #00d084;
        background: rgba(0, 208, 132, 0.1);
        border: 1px solid rgba(0, 208, 132, 0.25);
        padding: 6px 12px;
        border-radius: 6px;
        width: fit-content;
      }
      .highlight-dot {
        width: 6px;
        height: 6px;
        background-color: #00d084;
        border-radius: 50%;
        box-shadow: 0 0 6px #00d084;
      }

      @media (max-width: 900px) {
        .shekhani-advantage-section {
          padding: 40px 16px;
        }
        .advantage-heading {
          font-size: 24px;
        }
        .advantage-subheading {
          font-size: 13px;
        }
        .advantage-cards-grid {
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory;
          gap: 14px;
          padding-bottom: 14px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .advantage-cards-grid::-webkit-scrollbar {
          display: none;
        }
        .advantage-card {
          flex: 0 0 84%;
          max-width: 300px;
          scroll-snap-align: start;
        }
        .advantage-card-img-box {
          height: 140px;
        }
        .advantage-card-content {
          padding: 16px 14px;
        }
        .advantage-card-title {
          font-size: 16px;
        }
        .advantage-card-desc {
          font-size: 12.5px;
          margin-bottom: 14px;
        }
      }
    </style>
  `;
}
