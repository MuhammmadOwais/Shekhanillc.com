/**
 * ValuePropComparison Component for Shekhani LLC
 * Why Us vs Traditional Agencies Comparison Matrix
 * Dark theme styled for seamless integration
 */

export function renderValuePropComparison(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const comparisonRows = [
    {
      feature: "Upfront Cost & Retainers",
      agency: "$5,000 - $15,000 / month fees",
      shekhani: "$0 Upfront Cost (Shared Risk Model)"
    },
    {
      feature: "Google & Search Engine Visibility",
      agency: "Limited / Marketplace search only",
      shekhani: "Full Google Shopping & Organic SEO Indexing"
    },
    {
      feature: "Product Creative & A+ Content",
      agency: "Extra charge per listing / photo",
      shekhani: "Full End-to-End Graphic Overhaul Included"
    },
    {
      feature: "Omnichannel Distribution",
      agency: "Limited to single channel or consulting",
      shekhani: "Amazon, Walmart, eBay, TikTok & International"
    },
    {
      feature: "Brand Control & MAP Compliance",
      agency: "Advisory only / Client handles enforcement",
      shekhani: "Strict MAP Pricing Enforcement & IP Protection"
    },
    {
      feature: "Financial Alignment",
      agency: "Paid regardless of sales performance",
      shekhani: "We only win when your brand grows"
    }
  ];

  container.innerHTML = `
    <section class="value-prop-section-dark" id="valuePropSection">
      <div class="value-prop-container">
        <div class="value-prop-header">
          <span class="value-badge-dark">THE SHEKHANI ADVANTAGE</span>
          <h2 class="value-title-dark">Why Brands Partner With Us vs. Traditional Agencies</h2>
          <p class="value-subtitle-dark">
            Unlike traditional marketing agencies that charge heavy retainers regardless of results, we invest directly into optimizing and selling your products globally.
          </p>
        </div>

        <div class="table-responsive-dark">
          <table class="comparison-table-dark">
            <thead>
              <tr>
                <th class="col-feature-dark">Key Growth Factor</th>
                <th class="col-agency-dark">Traditional Agencies</th>
                <th class="col-shekhani-dark">
                  <div class="shekhani-head-badge-dark">SHEKHANI LLC PARTNERSHIP</div>
                </th>
              </tr>
            </thead>
            <tbody>
              ${comparisonRows.map(row => `
                <tr>
                  <td class="cell-feature-dark">${row.feature}</td>
                  <td class="cell-agency-dark">${row.agency}</td>
                  <td class="cell-shekhani-dark">
                    <span class="check-icon-dark">✓</span>
                    <strong class="shekhani-highlight-text-dark">${row.shekhani}</strong>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <style>
      .value-prop-section-dark {
        background-color: #0b0f19;
        padding: 70px 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
      .value-badge-dark {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #00d084;
        text-transform: uppercase;
        background: rgba(0, 208, 132, 0.15);
        padding: 5px 14px;
        border-radius: 30px;
        display: inline-block;
        margin-bottom: 12px;
        border: 1px solid rgba(0, 208, 132, 0.3);
      }
      .value-title-dark {
        font-size: 34px;
        font-weight: 800;
        color: #ffffff;
        margin: 0 0 10px 0;
        letter-spacing: -0.8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .value-subtitle-dark {
        font-size: 15px;
        color: #94a3b8;
        line-height: 1.55;
        margin: 0;
      }
      .table-responsive-dark {
        overflow-x: auto;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        background: #0f172a;
      }
      .comparison-table-dark {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        background: #0f172a;
      }
      .comparison-table-dark th, .comparison-table-dark td {
        padding: 18px 22px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 13.5px;
      }
      .comparison-table-dark th {
        background: #1e293b;
        font-weight: 800;
        color: #cbd5e1;
        text-transform: uppercase;
        font-size: 11.5px;
        letter-spacing: 1px;
      }
      .col-shekhani-dark {
        background: rgba(0, 208, 132, 0.08) !important;
        border-left: 3px solid #00d084 !important;
      }
      .shekhani-head-badge-dark {
        color: #00d084;
        font-weight: 900;
        font-size: 12.5px;
        letter-spacing: 1.2px;
      }
      .cell-feature-dark {
        font-weight: 700;
        color: #ffffff;
        width: 30%;
      }
      .cell-agency-dark {
        color: #94a3b8;
        width: 35%;
      }
      .cell-shekhani-dark {
        background: rgba(0, 208, 132, 0.05);
        border-left: 3px solid #00d084;
        color: #e2e8f0;
        width: 35%;
      }
      .shekhani-highlight-text-dark {
        color: #00d084;
        font-weight: 700;
      }
      .check-icon-dark {
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
        .value-prop-section-dark {
          padding: 40px 16px;
        }
        .value-title-dark {
          font-size: 24px;
        }
        .value-subtitle-dark {
          font-size: 13px;
        }
        .comparison-table-dark th, .comparison-table-dark td {
          padding: 14px 14px;
          font-size: 12.5px;
        }
      }
    </style>
  `;
}
