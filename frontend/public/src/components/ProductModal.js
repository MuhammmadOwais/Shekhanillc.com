/**
 * ProductModal Component
 */
export function renderProductModal(modalId, product, onAddToCart) {
  const modal = document.getElementById(modalId);
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody || !product) return;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrapper">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-info">
        <span class="modal-category">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-sku">SKU Code: <strong>${product.sku}</strong></div>
        <div class="stock-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          In Stock & Ready to Ship
        </div>
        <div class="modal-price">$${product.price.toFixed(2)} <span style="font-size:0.85rem; font-weight:normal; color: var(--text-muted)">/ unit</span></div>
        <p class="modal-desc">${product.description}</p>
        
        <div style="display:flex; gap:0.75rem; margin-top: auto;">
          <button class="btn-primary" id="modalAddToCart" style="flex:1;">Add to Order Query (${product.sku})</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  const addBtn = document.getElementById('modalAddToCart');
  if (addBtn) {
    addBtn.onclick = () => {
      onAddToCart(product);
      closeProductModal(modalId);
    };
  }
}

export function closeProductModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}
