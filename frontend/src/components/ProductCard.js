/**
 * ProductCard Component Renderer
 */
export function createProductCardHTML(product) {
  const featuredBadge = product.isFeatured ? '<span class="badge badge-featured">Featured</span>' : '';
  const trendingBadge = product.isTrending ? '<span class="badge badge-trending">Trending</span>' : '';

  return `
    <div class="product-card">
      <div class="card-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="badge-group">
          ${featuredBadge}
          ${trendingBadge}
        </div>
        <span class="badge-sku">${product.sku}</span>
      </div>
      <div class="card-content">
        <span class="card-category">${product.category}</span>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <div class="price-box">
            <span class="price-label">Wholesale Price</span>
            <span class="price-val">$${product.price.toFixed(2)}</span>
          </div>
          <button class="btn-view" data-id="${product.id}">Quick View</button>
        </div>
      </div>
    </div>
  `;
}
