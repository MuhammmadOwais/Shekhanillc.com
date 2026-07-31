/**
 * Shekhani LLC Navbar Component
 * Supports Desktop & Mobile Language Selector, Mobile Search Overlay, & Strict Background Scroll Lock
 */
import { openAuthModal } from './AuthModal.js';

const categoriesList = [
  "Art & Craft",
  "Beauty & Personal Care",
  "DIY & Tools",
  "Fashion",
  "Golf",
  "Household & Health",
  "Home & Kitchen",
  "Office Supplies",
  "Patio Lawn & Garden",
  "Pet Supplies",
  "Toys & Games"
];

export function renderNavbar(containerId, { onSearch, onCartClick, onCategorySelect }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <!-- Tier 1: Announcement Bar -->
    <div class="top-announcement-bar">
      <span>Shop wholesale online from over 100,000 brands. <a href="javascript:void(0)" class="announcement-link" id="announcementSignUp">Sign up</a></span>
    </div>

    <!-- Tier 2: Main Header Row -->
    <header class="main-header">
      <div class="faire-header-inner">

        <!-- Mobile Hamburger Icon (Left on mobile) -->
        <div class="mobile-nav-left">
          <button class="hamburger-icon-btn" id="mobileHamburgerBtn" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        <!-- Logo -->
        <a href="/" class="brand-logo" id="headerBrandLogo">
          <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785445037/logoshekhanillc_an7mdq.png" alt="Shekhani LLC Wholesale Logo">
        </a>

        <!-- Desktop All Categories Dropdown -->
        <div class="all-cats-wrap" id="allCatsWrap">
          <button class="all-cats-btn" id="allCatsBtn">
            All categories
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="all-cats-dropdown" id="allCatsDropdown">
            ${categoriesList.map(cat => `<a href="javascript:void(0)" class="dropdown-cat-item" data-cat="${cat}">${cat}</a>`).join('')}
          </div>
        </div>

        <!-- Desktop Search Bar -->
        <div class="faire-search">
          <svg class="faire-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#999" stroke-width="2"/><path d="M20 20L16.65 16.65" stroke="#999" stroke-width="2" stroke-linecap="round"/></svg>
          <input type="text" id="searchInput" placeholder="Search wholesale products or brands">
        </div>

        <!-- Desktop Actions -->
        <div class="faire-actions">
          <!-- Desktop Language Selector -->
          <div class="lang-selector" id="langSelector">
            <button class="lang-btn" id="langBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3C12 3 8 7.5 8 12C8 16.5 12 21 12 21" stroke="currentColor" stroke-width="1.5"/><path d="M12 3C12 3 16 7.5 16 12C16 16.5 12 21 12 21" stroke="currentColor" stroke-width="1.5"/><path d="M3 12H21" stroke="currentColor" stroke-width="1.5"/></svg>
              <span class="currentLangLabel">EN-GB</span>
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="lang-dropdown" id="langDropdown">
              <button class="lang-option active" data-lang="EN-GB">English (UK)</button>
              <button class="lang-option" data-lang="EN-US">English (US)</button>
              <button class="lang-option" data-lang="ES">Español</button>
              <button class="lang-option" data-lang="FR">Français</button>
              <button class="lang-option" data-lang="DE">Deutsch</button>
              <button class="lang-option" data-lang="UR">Urdu</button>
            </div>
          </div>

          <a href="/shop" class="faire-nav-link" id="navShop">Shop Catalog</a>
          <a href="/blog" class="faire-nav-link" id="navBlog">Blog</a>
          <a class="faire-nav-link" id="navSignUpSell">Sign up to sell</a>
          <a class="faire-nav-link" id="navSignIn">Sign in</a>
          <button class="faire-signup-btn" id="signupBtn">Sign up to buy</button>

          <!-- Desktop Cart Button -->
          <button class="cart-icon-btn desktop-cart-only" id="cartBtn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span class="cart-count-badge" id="cartCount">0</span>
          </button>
        </div>

        <!-- Mobile Header Right Actions -->
        <div class="mobile-nav-right">
          <!-- Mobile Language Selector -->
          <div class="mobile-lang-selector" id="mobileLangSelector">
            <button class="mobile-lang-btn" id="mobileLangBtn">
              <span class="currentLangLabel">EN-GB</span>
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="mobile-lang-dropdown hidden" id="mobileLangDropdown">
              <button class="lang-option active" data-lang="EN-GB">English (UK)</button>
              <button class="lang-option" data-lang="EN-US">English (US)</button>
              <button class="lang-option" data-lang="ES">Español</button>
              <button class="lang-option" data-lang="FR">Français</button>
              <button class="lang-option" data-lang="DE">Deutsch</button>
              <button class="lang-option" data-lang="UR">Urdu</button>
            </div>
          </div>

          <button class="mobile-search-trigger-btn" id="mobileSearchBtn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button class="cart-icon-btn mobile-cart-only" id="mobileCartBtn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span class="cart-count-badge" id="mobileCartCount">0</span>
          </button>
        </div>

      </div>
    </header>

    <!-- MOBILE SEARCH OVERLAY -->
    <div class="mobile-search-overlay hidden" id="mobileSearchOverlay">
      <div class="mobile-search-bar-row">
        <div class="mobile-search-input-wrap">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="mobileSearchInput" placeholder="Search wholesale products or brands">
        </div>
        <button class="mobile-search-cancel-btn" id="mobileSearchCancelBtn">Cancel</button>
      </div>
    </div>

    <!-- MOBILE NAVIGATION DRAWER -->
    <div class="mobile-drawer-backdrop hidden" id="mobileDrawerBackdrop"></div>
    <aside class="mobile-drawer-panel hidden" id="mobileDrawerPanel">
      
      <!-- Top Turquoise Shekhani Card -->
      <div class="mobile-drawer-top-card">
        <div class="mobile-drawer-logo-wrap">
          <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785445037/logoshekhanillc_an7mdq.png" alt="Shekhani LLC Logo" class="mobile-drawer-logo-img">
        </div>
        <div class="mobile-drawer-auth-list">
          <div class="mobile-drawer-auth-item" id="drawerSignUpBuy">Sign up to buy <span>&rarr;</span></div>
          <div class="mobile-drawer-auth-item" id="drawerSignIn">Sign in <span>&rarr;</span></div>
          <div class="mobile-drawer-auth-item" id="drawerSignUpSell">Sign up to sell <span>&rarr;</span></div>
        </div>
      </div>

      <!-- Categories List -->
      <div class="mobile-drawer-categories">
        ${categoriesList.map(cat => `
          <div class="mobile-drawer-cat-item" data-cat="${cat}">
            <span>${cat}</span>
            <span class="chevron">&rsaquo;</span>
          </div>
        `).join('')}
      </div>

      <!-- Mobile Drawer Bottom Clean Section -->
      <div class="mobile-drawer-bottom">
        <div class="mobile-drawer-bottom-item" id="drawerHelpCenter">
          <span>Help Center</span>
          <span style="font-weight:normal; color:#888">&#9432;</span>
        </div>
        <div class="mobile-drawer-bottom-item" id="drawerBlogLink">
          <span>Blog</span>
          <span style="font-weight:normal; color:#888">&#128161;</span>
        </div>
      </div>
    </aside>
  `;

  // Bind Brand Logo Click to navigate to homepage URL '/'
  document.getElementById('headerBrandLogo')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/');
  });

  // Bind Shop Link Click
  document.getElementById('navShop')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/shop');
  });

  // Bind Blog Link Click
  document.getElementById('navBlog')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/blog');
  });

  // Bind Auth Triggers
  setupAuthTriggers();

  // Bind Events
  setupDropdowns(onCategorySelect);
  setupMobileSearch(onSearch);
  setupMobileDrawer(onCategorySelect);

  // Desktop Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput && onSearch) {
    searchInput.addEventListener('input', (e) => {
      onSearch(e.target.value.toLowerCase().trim());
    });
  }

  // Cart Buttons
  const cartBtn = document.getElementById('cartBtn');
  const mobileCartBtn = document.getElementById('mobileCartBtn');
  [cartBtn, mobileCartBtn].forEach(btn => {
    if (btn && onCartClick) btn.addEventListener('click', onCartClick);
  });
}

function lockBackgroundScroll(lock) {
  if (lock) {
    document.documentElement.classList.add('scroll-locked');
    document.body.classList.add('scroll-locked');
  } else {
    document.documentElement.classList.remove('scroll-locked');
    document.body.classList.remove('scroll-locked');
  }
}

function setupAuthTriggers() {
  document.getElementById('announcementSignUp')?.addEventListener('click', () => openAuthModal('signup', 'buy'));
  document.getElementById('signupBtn')?.addEventListener('click', () => openAuthModal('signup', 'buy'));
  document.getElementById('navSignUpSell')?.addEventListener('click', () => openAuthModal('signup', 'sell'));
  document.getElementById('navSignIn')?.addEventListener('click', () => openAuthModal('signin'));

  // Drawer Auth Links
  document.getElementById('drawerSignUpBuy')?.addEventListener('click', () => { closeDrawer(); openAuthModal('signup', 'buy'); });
  document.getElementById('drawerSignIn')?.addEventListener('click', () => { closeDrawer(); openAuthModal('signin'); });
  document.getElementById('drawerSignUpSell')?.addEventListener('click', () => { closeDrawer(); openAuthModal('signup', 'sell'); });

  // Drawer Bottom Links
  document.getElementById('drawerHelpCenter')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/support'); });
  document.getElementById('drawerBlogLink')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/blog'); });
}

function openDrawer() {
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const drawerPanel = document.getElementById('mobileDrawerPanel');
  if (drawerBackdrop && drawerPanel) {
    drawerBackdrop.classList.remove('hidden');
    drawerPanel.classList.remove('hidden');
    lockBackgroundScroll(true);
  }
}

function closeDrawer() {
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const drawerPanel = document.getElementById('mobileDrawerPanel');
  if (drawerBackdrop && drawerPanel) {
    drawerBackdrop.classList.add('hidden');
    drawerPanel.classList.add('hidden');
    lockBackgroundScroll(false);
  }
}

function setupDropdowns(onCategorySelect) {
  const allCatsWrap = document.getElementById('allCatsWrap');
  const allCatsBtn = document.getElementById('allCatsBtn');
  if (allCatsBtn && allCatsWrap) {
    allCatsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      allCatsWrap.classList.toggle('open');
    });
    document.addEventListener('click', () => allCatsWrap.classList.remove('open'));
  }

  // Handle Desktop Dropdown Category Clicks
  const dropdownCatItems = document.querySelectorAll('.dropdown-cat-item');
  dropdownCatItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = item.getAttribute('data-cat');
      if (cat && onCategorySelect) {
        onCategorySelect(cat);
        allCatsWrap?.classList.remove('open');
      }
    });
  });

  // Desktop Language Selector
  const langSelector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  if (langBtn && langSelector) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelector.classList.toggle('open');
    });
    document.addEventListener('click', () => langSelector.classList.remove('open'));
  }

  // Mobile Language Selector
  const mobileLangBtn = document.getElementById('mobileLangBtn');
  const mobileLangDropdown = document.getElementById('mobileLangDropdown');
  if (mobileLangBtn && mobileLangDropdown) {
    mobileLangBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileLangDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => mobileLangDropdown.classList.add('hidden'));
  }

  // Handle Language Selection Clicks
  const langOptions = document.querySelectorAll('.lang-option');
  const langLabels = document.querySelectorAll('.currentLangLabel');

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const code = opt.getAttribute('data-lang') || opt.textContent.trim();
      langLabels.forEach(lbl => lbl.textContent = code);
      langOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}

function setupMobileSearch(onSearch) {
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
  const mobileSearchCancelBtn = document.getElementById('mobileSearchCancelBtn');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  if (mobileSearchBtn && mobileSearchOverlay) {
    mobileSearchBtn.addEventListener('click', () => {
      mobileSearchOverlay.classList.remove('hidden');
      lockBackgroundScroll(true);
      if (mobileSearchInput) mobileSearchInput.focus();
    });
  }

  if (mobileSearchCancelBtn && mobileSearchOverlay) {
    mobileSearchCancelBtn.addEventListener('click', () => {
      mobileSearchOverlay.classList.add('hidden');
      lockBackgroundScroll(false);
      if (mobileSearchInput) mobileSearchInput.value = '';
      if (onSearch) onSearch('');
    });
  }

  if (mobileSearchInput && onSearch) {
    mobileSearchInput.addEventListener('input', (e) => {
      onSearch(e.target.value.toLowerCase().trim());
    });
  }
}

function setupMobileDrawer(onCategorySelect) {
  const hamburgerBtn = document.getElementById('mobileHamburgerBtn');
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const drawerPanel = document.getElementById('mobileDrawerPanel');

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  const catItems = drawerPanel ? drawerPanel.querySelectorAll('.mobile-drawer-categories .mobile-drawer-cat-item') : [];
  catItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-cat');
      if (cat && onCategorySelect) {
        onCategorySelect(cat);
        closeDrawer();
      }
    });
  });
}

export function updateCartCount(count) {
  const cartCount = document.getElementById('cartCount');
  const mobileCartCount = document.getElementById('mobileCartCount');
  if (cartCount) cartCount.textContent = count;
  if (mobileCartCount) mobileCartCount.textContent = count;
}
