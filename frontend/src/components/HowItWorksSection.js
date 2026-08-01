/**
 * HowItWorksSection Component for Shekhani LLC
 * Minimalist, Clean 3-Step Scaling Engine Section
 * Light Theme with Subtle Green Gradient Touch
 */

export function renderHowItWorksSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const steps = [
    {
      num: "01",
      badge: "PARTNER & ALIGN",
      title: "Zero Upfront Cost Partnership",
      desc: "We partner with global brands that need marketplace distribution under a 100% shared risk model with zero retainers or upfront fees."
    },
    {
      num: "02",
      badge: "OPTIMIZE & RANK",
      title: "Storefront & Listing Overhaul",
      desc: "Our team crafts high-converting product photography, A+ content, SEO copywriting, and store listing ranking."
    },
    {
      num: "03",
      badge: "SCALE GLOBALLY",
      title: "Omnichannel Selling & Reach",
      desc: "We list and sell your products across Amazon, Walmart, eBay, TikTok Shop, Mercado Libre, and retail distribution networks."
    }
  ];

  container.innerHTML = `
    <section class="spreetail-how-section" id="howItWorksSection">
      <div class="spreetail-glow-bg"></div>

      <div class="spreetail-how-container">
        <div class="spreetail-how-header">
          <span class="spreetail-how-badge">THE GROWTH PROCESS</span>
          <h2 class="spreetail-how-title">How It Works: 3 Step Scaling Engine</h2>
          <p class="spreetail-how-subtitle">
            From undiscovered brand to global sales leader with zero upfront cost and full operational support.
          </p>
        </div>

        <div class="spreetail-steps-grid">
          ${steps.map(s => `
            <div class="spreetail-step-card">
              <div class="step-card-top">
                <span class="spreetail-card-badge">${s.badge}</span>
                <span class="spreetail-step-num">${s.num}</span>
              </div>
              <h3 class="spreetail-card-title">${s.title}</h3>
              <p class="spreetail-card-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .spreetail-how-section {
        position: relative;
        background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%);
        padding: 60px 24px;
        overflow: hidden;
      }
      .spreetail-glow-bg {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 350px;
        background: radial-gradient(circle, rgba(0, 208, 132, 0.12) 0%, rgba(16, 185, 129, 0.03) 50%, rgba(0, 0, 0, 0) 80%);
        filter: blur(60px);
        pointer-events: none;
      }
      .spreetail-how-container {
        position: relative;
        max-width: 1140px;
        margin: 0 auto;
        z-index: 10;
      }
      .spreetail-how-header {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 36px auto;
      }
      .spreetail-how-badge {
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #059669;
        text-transform: uppercase;
        background: #dcfce7;
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 12px;
        border: 1px solid #86efac;
      }
      .spreetail-how-title {
        font-size: 34px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .spreetail-how-subtitle {
        font-size: 15px;
        color: #475569;
        line-height: 1.5;
        margin: 0;
      }
      .spreetail-steps-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .spreetail-step-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 26px 22px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
      }
      .spreetail-step-card:hover {
        border-color: #00d084;
        transform: translateY(-4px);
        box-shadow: 0 16px 30px rgba(0, 208, 132, 0.15);
      }
      .step-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
      }
      .spreetail-card-badge {
        font-size: 9.5px;
        font-weight: 800;
        letter-spacing: 1.2px;
        color: #059669;
        text-transform: uppercase;
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        padding: 3px 8px;
        border-radius: 4px;
      }
      .spreetail-step-num {
        font-size: 28px;
        font-weight: 800;
        color: #cbd5e1;
        transition: color 0.3s ease;
      }
      .spreetail-step-card:hover .spreetail-step-num {
        color: #00d084;
      }
      .spreetail-card-title {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 10px 0;
        line-height: 1.3;
      }
      .spreetail-card-desc {
        font-size: 13.5px;
        color: #475569;
        line-height: 1.55;
        margin: 0;
      }

      @media (max-width: 900px) {
        .spreetail-steps-grid {
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .spreetail-how-section {
          padding: 40px 16px;
        }
        .spreetail-how-title {
          font-size: 25px;
        }
        .spreetail-how-subtitle {
          font-size: 13px;
        }
        .spreetail-step-card {
          padding: 20px 16px;
        }
      }
    </style>
  `;
}
