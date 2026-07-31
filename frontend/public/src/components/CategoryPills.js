/**
 * CategoryPills Component (11 Custom Categories without All Products option)
 */

export function renderCategoryPills(containerId, categories, activeCategory, onSelectCategory) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <nav class="faire-pill-nav">
      <div class="faire-pill-inner" id="pillInner"></div>
    </nav>
  `;

  const pillInner = document.getElementById('pillInner');
  
  // Filter out "All" or "All Products" if present in categories array
  const categoryList = categories.filter(c => c !== 'All' && c !== 'All Products');

  categoryList.forEach(cat => {
    const pill = document.createElement('a');
    pill.className = `pill-link ${cat === activeCategory ? 'active-pill' : ''}`;
    pill.setAttribute('data-category', cat);
    pill.textContent = cat;

    pill.addEventListener('click', (e) => {
      e.preventDefault();
      onSelectCategory(cat);
    });

    pillInner.appendChild(pill);
  });
}

export function updateActivePillUI(containerId, activeCategory) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const pills = container.querySelectorAll('.pill-link');
  pills.forEach(pill => {
    if (pill.getAttribute('data-category') === activeCategory) {
      pill.classList.add('active-pill');
    } else {
      pill.classList.remove('active-pill');
    }
  });
}
