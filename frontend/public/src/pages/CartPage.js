/**
 * Shekhani LLC Cart & Order Checkout Page Component
 * Handles Cart items list, quantity updates, subtotal, and Under Progress Checkout Notice
 */

export function renderCartPage(containerId, { cart, onUpdateQuantity, onRemoveItem, onContinueShopping }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const estimatedShipping = cart.length > 0 ? 25.00 : 0;
  const grandTotal = subtotal + estimatedShipping;

  container.innerHTML = `
    <style>
      .cart-page-wrapper {
        background-color: #f8fafc;
        padding: 50px 0 90px;
        min-height: 85vh;
      }

      .cart-container {
        width: 92%;
        max-width: 1200px;
        margin: 0 auto;
      }

      .cart-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        border-bottom: 2px solid var(--color-turquoise, #00bfa5);
        padding-bottom: 16px;
      }

      .cart-title {
        font-family: var(--font-serif, Georgia, serif);
        font-size: 2.2rem;
        color: #0f172a;
        margin: 0;
      }

      .btn-continue-shop {
        background: transparent;
        color: var(--color-turquoise-dark, #00897b);
        border: 1px solid var(--color-turquoise, #00bfa5);
        padding: 8px 18px;
        font-size: 13px;
        font-weight: 700;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .btn-continue-shop:hover {
        background: var(--color-turquoise, #00bfa5);
        color: #ffffff;
      }

      .cart-layout-grid {  
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 32px;
      }

      .cart-items-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 28px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
      }

      .cart-item-row {
        display: grid;
        grid-template-columns: 80px 2fr 1fr 1fr 40px;
        gap: 16px;
        align-items: center;
        padding: 18px 0;
        border-bottom: 1px solid #f1f5f9;
      }

      .cart-item-row:last-child {
        border-bottom: none;
      }

      .cart-item-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 6px;
        background: #f1f5f9;
      }

      .cart-item-name {
        font-size: 15px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 4px 0;
      }

      .cart-item-meta {
        font-size: 12.5px;
        color: #64748b;
        margin: 0;
      }

      .cart-qty-control {
        display: flex;
        align-items: center;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        overflow: hidden;
        width: 100px;
      }

      .qty-btn {
        background: #f8fafc;
        border: none;
        width: 30px;
        height: 32px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        color: #334155;
      }

      .qty-val {
        width: 40px;
        text-align: center;
        font-size: 13.5px;
        font-weight: 700;
      }

      .cart-item-price {
        font-size: 15px;
        font-weight: 800;
        color: #0f172a;
        text-align: right;
      }

      .btn-remove-item {
        background: none;
        border: none;
        color: #ef4444;
        font-size: 18px;
        cursor: pointer;
        padding: 4px;
      }

      /* Summary Card */
      .cart-summary-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 28px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        height: fit-content;
      }

      .summary-title {
        font-size: 18px;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 20px 0;
        padding-bottom: 12px;
        border-bottom: 1px solid #f1f5f9;
      }

      .summary-row {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #475569;
        margin-bottom: 12px;
      }

      .summary-row.total {
        font-size: 18px;
        font-weight: 800;
        color: #0f172a;
        border-top: 2px solid #f1f5f9;
        padding-top: 14px;
        margin-top: 14px;
      }

      .btn-place-order {
        width: 100%;
        background: var(--color-turquoise, #00bfa5);
        color: #ffffff;
        border: none;
        padding: 14px 0;
        font-size: 15px;
        font-weight: 800;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 24px;
        transition: all 0.2s;
        box-shadow: 0 4px 14px rgba(0, 191, 165, 0.3);
      }

      .btn-place-order:hover {
        background: #00897b;
        transform: translateY(-1px);
      }

      .cart-empty-box {
        text-align: center;
        padding: 60px 20px;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
      }

      @media (max-width: 992px) {
        .cart-layout-grid {
          grid-template-columns: 1fr;
        }
        .cart-item-row {
          grid-template-columns: 60px 1fr 1fr;
          gap: 12px;
        }
      }
    </style>

    <div class="cart-page-wrapper">
      <div class="cart-container">
        
        <!-- Header -->
        <div class="cart-header-row">
          <h1 class="cart-title">Your Wholesale Order Query Cart</h1>
          <button type="button" class="btn-continue-shop" id="btnContinueShopping">
            &larr; Continue Shopping
          </button>
        </div>

        ${cart.length === 0 ? `
          <div class="cart-empty-box">
            <h2 style="font-size: 20px; color: #0f172a; margin-bottom: 8px;">Your cart is currently empty</h2>
            <p style="color: #64748b; margin-bottom: 24px;">Browse our wholesale catalog and add products to start your order query.</p>
            <button type="button" class="btn-continue-shop" id="btnContinueShoppingEmpty" style="background: var(--color-turquoise, #00bfa5); color: #fff;">
              Explore Shop Catalog
            </button>
          </div>
        ` : `
          <div class="cart-layout-grid">
            
            <!-- Items List -->
            <div class="cart-items-card">
              ${cart.map((item, idx) => `
                <div class="cart-item-row">
                  <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                  <div>
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-meta">${item.category} &bull; ${item.sku || 'SKU-REG'}</p>
                  </div>
                  
                  <div class="cart-qty-control">
                    <button type="button" class="qty-btn btn-qty-minus" data-idx="${idx}">-</button>
                    <span class="qty-val">${item.quantity || 1}</span>
                    <button type="button" class="qty-btn btn-qty-plus" data-idx="${idx}">+</button>
                  </div>

                  <div class="cart-item-price">
                    US$ ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </div>

                  <button type="button" class="btn-remove-item" data-idx="${idx}" title="Remove Item">&times;</button>
                </div>
              `).join('')}
            </div>

            <!-- Order Summary & Checkout -->
            <div class="cart-summary-card">
              <h2 class="summary-title">Order Summary</h2>
              
              <div class="summary-row">
                <span>Items Subtotal (${cart.reduce((total, i) => total + (i.quantity || 1), 0)} items)</span>
                <strong>US$ ${subtotal.toFixed(2)}</strong>
              </div>

              <div class="summary-row">
                <span>Estimated Freight Shipping</span>
                <strong>US$ ${estimatedShipping.toFixed(2)}</strong>
              </div>

              <div class="summary-row total">
                <span>Estimated Total</span>
                <span style="color: var(--color-turquoise-dark, #00897b);">US$ ${grandTotal.toFixed(2)}</span>
              </div>

              <button type="button" class="btn-place-order" id="btnPlaceOrder">
                Place Wholesale Order
              </button>

              <p style="font-size: 11.5px; color: #94a3b8; text-align: center; margin-top: 14px;">
                🔒 Secure B2B encrypted transaction protocol
              </p>
            </div>

          </div>
        `}

      </div>
    </div>
  `;

  // Bind Continue Shopping
  const bindContinue = (id) => {
    container.querySelector(id)?.addEventListener('click', () => {
      if (onContinueShopping) onContinueShopping();
    });
  };
  bindContinue('#btnContinueShopping');
  bindContinue('#btnContinueShoppingEmpty');

  // Quantity controls
  container.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (cart[idx]) {
        const newQty = (cart[idx].quantity || 1) - 1;
        if (newQty <= 0) {
          if (onRemoveItem) onRemoveItem(idx);
        } else if (onUpdateQuantity) {
          onUpdateQuantity(idx, newQty);
        }
      }
    });
  });

  container.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (cart[idx] && onUpdateQuantity) {
        onUpdateQuantity(idx, (cart[idx].quantity || 1) + 1);
      }
    });
  });

  container.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (onRemoveItem) onRemoveItem(idx);
    });
  });

  // Bind Place Order Under Progress Notice Modal Alert
  container.querySelector('#btnPlaceOrder')?.addEventListener('click', () => {
    alert(`⚠️ Website Ordering Notice:\n\nShekhani LLC B2B Online Ordering system is currently under progress & development.\n\nTo complete your wholesale purchase query or request volume pricing, please contact our team directly:\n\n📧 Email: haris@shekhanillc.com\n📞 Phone: +1 (314) 904-9538\n📍 Address: 1120 Weidman Rd, Chesterfield MO 63017, USA`);
  });
}
