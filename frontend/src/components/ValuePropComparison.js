/**
 * ValuePropComparison Component for Shekhani LLC
 * Why Us vs Traditional Agencies Comparison Matrix
 * Revamped to match the light emerald B2B website theme
 */

export function renderValuePropComparison(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const comparisonRows = [
    {
      feature: "Upfront Cost & Retainers",
      agency: "$5,000 - $15,000 / month fees",
      shekhani: "$0 Upfront Cost (Shared Risk Model)",
      winner: "shekhani"
    },
    {
      feature: "Product Creative & A+ Content",
      agency: "Extra charge per listing / photo",
      shekhani: "Full End-to-End Graphic Overhaul Included",
      winner: "shekhani"
    },
    {
      feature: "Omnichannel Distribution",
      agency: "Limited to single channel or consulting",
      shekhani: "Amazon, Walmart, eBay, TikTok & International",
      winner: "shekhani"
    },
    {
      feature: "Brand Control & MAP Compliance",
      agency: "Advisory only / Client handles enforcement",
      shekhani: "Strict MAP Pricing Enforcement & IP Protection",
      winner: "shekhani"
    },
    {
      feature: "Financial Alignment",
      agency: "Paid regardless of sales performance",
      shekhani: "We only win when your brand grows",
      winner: "shekhani"
    }
  ];

  container.innerHTML = `
    <section class="value-prop-section" id="valuePropSection">
      <div class="value-prop-container">
        <div class="value-prop-header">
          <span class="value-badge">THE SHEKHANI ADVANTAGE</span>
          <h2 class="value-title">Why Brands Partner With Us vs. Traditional Agencies</h2>
          <p class="value-subtitle">
            Unlike traditional marketing agencies that charge heavy retainers regardless of results, we invest directly into optimizing and selling your products globally.
          </p>
        </div>

        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="col-feature">Key Growth Factor</th>
                <th class="col-agency">Traditional Agencies</th>
                <th class="col-shekhani">
                  <div class="shekhani-head-badge">SHEKHANI LLC PARTNERSHIP</div>
                </th>
              </tr>
            </thead>
            <tbody>
              ${comparisonRows.map(row => `
                <tr>
                  <td class="cell-feature">${row.feature}</td>
                  <td class="cell-agency">${row.agency}</td>
                  <td class="cell-shekhani">
                    <span class="check-icon">✓</span>
                    <strong class="shekhani-highlight-text">${row.shekhani}</strong>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <style>
      .value-prop-section {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdf4 100%);
        padding: 60px 24px;
        border-bottom: 1px solid #e2e8f0;
      }
      .value-prop-container {
        max-width: 1140px;
        margin: 0 auto;
      }
      .value-prop-header {
        text-align: center;
        max-width: 740px;
        margin: 0 auto 36px auto;
      }
      .value-badge {
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
      .value-title {
        font-size: 34px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .value-subtitle {
        font-size: 15px;
        color: #475569;
        line-height: 1.55;
        margin: 0;
      }
      .table-responsive {
        overflow-x: auto;
        border: 1px solid #cbd5e1;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        background: #ffffff;
      }
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        background: #ffffff;
      }
      .comparison-table th, .comparison-table td {
        padding: 18px 22px;
        border-bottom: 1px solid #e2e8f0;
        font-size: 13.5px;
      }
      .comparison-table th {
        background: #f8fafc;
        font-weight: 800;
        color: #334155;
        text-transform: uppercase;
        font-size: 11.5px;
        letter-spacing: 1px;
      }
      .col-shekhani {
        background: #f0fdf4 !important;
        border-left: 3px solid #00d084 !important;
      }
      .shekhani-head-badge {
        color: #059669;
        font-weight: 900;
        font-size: 12.5px;
        letter-spacing: 1.2px;
      }
      .cell-feature {
        font-weight: 700;
        color: #0f172a;
        width: 30%;
      }
      .cell-agency {
        color: #64748b;
        width: 35%;
      }
      .cell-shekhani {
        background: #f0fdf4;
        border-left: 3px solid #00d084;
        color: #065f46;
        width: 35%;
      }
      .shekhani-highlight-text {
        color: #047857;
        font-weight: 700;
      }
      .check-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background: #00d084;
        color: #000000;
        border-radius: 50%;
        font-size: 11px;
        font-weight: 900;
        margin-right: 8px;
        flex-shrink: 0;
      }

      @media (max-width: 768px) {
        .value-prop-section {
          padding: 40px 16px;
        }
        .value-title {
          font-size: 24px;
        }
        .value-subtitle {
          font-size: 13px;
        }
        .comparison-table th, .comparison-table td {
          padding: 14px 14px;
          font-size: 12.5px;
        }
      }
    </style>
  `;
}
