/**
 * Shekhani LLC Spreetail-Style Black B2B Navbar Component
 * Features: Pure Black Background, Updated White Logo, Sleek Nav Links, Services Dropdown (No Emojis), Partner Login & Get Started CTA
 * Mobile Drawer Fixed Dark Theme
 */
import { openAuthModal } from './AuthModal.js';

export function renderNavbar(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <!-- Main Navigation Header (Black Spreetail Style) -->
    <header class="main-header spreetail-header">
      <div class="spreetail-header-inner">

        <!-- Mobile Hamburger Icon -->
        <div class="mobile-nav-left">
          <button class="hamburger-icon-btn dark-mode-hamburger" id="mobileHamburgerBtn" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        <!-- Brand Logo -->
        <a href="/" class="brand-logo white-logo-link" id="headerBrandLogo">
          <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785787233/ChatGPT_Image_Aug_2_2026_11_57_51_PM_snkitt.png" alt="Shekhani LLC Logo" class="spreetail-white-logo" onerror="this.style.display='none';this.parentElement.querySelector('.logo-text-fallback').style.display='flex'">
          <span class="logo-text-fallback" style="display:none;color:#ffffff;font-size:18px;font-weight:900;letter-spacing:1px;align-items:center;gap:4px;"><span style="color:#00d084">S</span>HEKHANI LLC</span>
        </a>

        <!-- Desktop Navigation Links Center -->
        <nav class="desktop-main-nav dark-nav">
          <a href="/" class="spreetail-nav-link active" id="navHome">Home</a>
          
          <!-- Services Dropdown -->
          <div class="nav-dropdown-wrapper" id="servicesDropdownWrapper">
            <a href="javascript:void(0)" class="spreetail-nav-link dropdown-trigger" id="navServices">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>

            <div class="services-dropdown-menu" id="servicesDropdownMenu">
              <a href="/product-transformation" class="dropdown-service-item" id="dropdownProductTrans">
                <span class="service-dot"></span>
                <div class="dropdown-item-text">
                  <span class="item-title">Product Transformation</span>
                  <span class="item-sub">Visual & Content Upgrade</span>
                </div>
              </a>

              <a href="/full-marketplace-management" class="dropdown-service-item" id="dropdownFullMarketplace">
                <span class="service-dot"></span>
                <div class="dropdown-item-text">
                  <span class="item-title">Full Marketplace Management</span>
                  <span class="item-sub">Multi-Channel Operations</span>
                </div>
              </a>

              <a href="/targeted-marketing-ads" class="dropdown-service-item" id="dropdownTargetedMarketing">
                <span class="service-dot"></span>
                <div class="dropdown-item-text">
                  <span class="item-title">Targeted Marketing & Ads</span>
                  <span class="item-sub">Paid Ads & Traffic Engine</span>
                </div>
              </a>

              <a href="/global-market-expansion" class="dropdown-service-item" id="dropdownGlobalExpansion">
                <span class="service-dot"></span>
                <div class="dropdown-item-text">
                  <span class="item-title">Global Market Expansion</span>
                  <span class="item-sub">International Expansion</span>
                </div>
              </a>
            </div>
          </div>

          <a href="/about" class="spreetail-nav-link" id="navAbout">About Us</a>
          <a href="/shop" class="spreetail-nav-link" id="navShop">Shop Catalog</a>
          <a href="/blog" class="spreetail-nav-link" id="navBlog">Blog</a>
          <a href="/contact" class="spreetail-nav-link" id="navContact">Contact</a>
        </nav>

        <!-- Right Header Actions -->
        <div class="spreetail-actions">
          <!-- Partner Login Outline Button -->
          <button class="spreetail-outline-btn desktop-only" id="navSignIn">Partner Login</button>

          <!-- Vibrant Get Started CTA Button -->
          <button class="spreetail-cta-btn" id="signupBtn">Get Started</button>
        </div>

      </div>
    </header>

    <!-- MOBILE NAVIGATION DRAWER -->
    <div class="mobile-drawer-backdrop hidden" id="mobileDrawerBackdrop"></div>
    <aside class="mobile-drawer-panel dark-drawer hidden" id="mobileDrawerPanel">
      <div class="mobile-drawer-top-card dark-card">
        <div class="mobile-drawer-logo-wrap">
          <img src="https://res.cloudinary.com/sfjl53dg/image/upload/v1785541119/logoshekhanilc_fa0vxy.png" alt="Shekhani LLC Logo" class="spreetail-white-logo drawer-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <span class="logo-text-fallback" style="display:none;color:#ffffff;font-size:18px;font-weight:900;letter-spacing:1px;align-items:center;gap:4px;"><span style="color:#00d084">S</span>HEKHANI LLC</span>
        </div>
      </div>

      <div class="mobile-drawer-nav-list dark-list">
        <a href="/" class="mobile-drawer-nav-item dark-item" id="drawerHome">Home</a>
        
        <div class="mobile-services-group">
          <span class="mobile-group-label">OUR SERVICES</span>
          <a href="/product-transformation" class="mobile-drawer-subitem" id="drawerProductTrans">Product Transformation</a>
          <a href="/full-marketplace-management" class="mobile-drawer-subitem" id="drawerFullMarketplace">Full Marketplace Management</a>
          <a href="/targeted-marketing-ads" class="mobile-drawer-subitem" id="drawerTargetedMarketing">Targeted Marketing & Ads</a>
          <a href="/global-market-expansion" class="mobile-drawer-subitem" id="drawerGlobalExpansion">Global Market Expansion</a>
        </div>

        <a href="/about" class="mobile-drawer-nav-item dark-item" id="drawerAbout">About Us</a>
        <a href="/shop" class="mobile-drawer-nav-item dark-item" id="drawerShop">Shop Catalog</a>
        <a href="/blog" class="mobile-drawer-nav-item dark-item" id="drawerBlog">Blog</a>
        <a href="/contact" class="mobile-drawer-nav-item dark-item" id="drawerContact">Contact</a>
      </div>

      <div class="mobile-drawer-bottom dark-bottom">
        <button class="spreetail-outline-btn full-width" id="drawerSignIn">Partner Login</button>
        <button class="spreetail-cta-btn cyan-signup full-width" id="drawerSignUp">Apply for Partnership</button>
      </div>
    </aside>

    <style>
      .spreetail-header {
        background: #000000 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
      .cyan-signup {
        background-color: #00D2FF !important;
        color: #090D16 !important;
        font-weight: 800 !important;
        box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3) !important;
      }
      .cyan-signup:hover {
        background-color: #00e5ff !important;
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(0, 210, 255, 0.4) !important;
      }
      .spreetail-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 36px;
        max-width: 1400px;
        margin: 0 auto;
      }
      .spreetail-white-logo {
        height: 38px;
        width: auto;
        max-width: 180px;
        object-fit: contain;
        display: block;
        transition: transform 0.2s ease;
      }
      .spreetail-white-logo:hover {
        transform: scale(1.02);
      }
      .white-logo-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        min-width: 100px;
      }
      .dark-nav {
        display: flex;
        align-items: center;
        gap: 32px;
      }
      .spreetail-nav-link {
        font-size: 14px;
        font-weight: 500;
        color: #e2e8f0;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .spreetail-nav-link:hover, .spreetail-nav-link.active {
        color: #00d084;
      }

      /* Services Dropdown Styling */
      .nav-dropdown-wrapper {
        position: relative;
        padding: 8px 0;
      }
      .dropdown-trigger {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .services-dropdown-menu {
        position: absolute;
        top: 100%;
        left: -10px;
        width: 290px;
        background: #090d14;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        padding: 12px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        display: none;
        flex-direction: column;
        gap: 6px;
        z-index: 1100;
      }
      .nav-dropdown-wrapper:hover .services-dropdown-menu,
      .services-dropdown-menu.show {
        display: flex;
      }
      .dropdown-service-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .dropdown-service-item:hover {
        background: rgba(0, 208, 132, 0.12);
      }
      .service-dot {
        width: 7px;
        height: 7px;
        background-color: #00d084;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .dropdown-item-text {
        display: flex;
        flex-direction: column;
      }
      .item-title {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
      }
      .dropdown-service-item:hover .item-title {
        color: #00d084;
      }
      .item-sub {
        font-size: 10.5px;
        color: #94a3b8;
      }

      .spreetail-actions {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .spreetail-outline-btn {
        background: transparent;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.4);
        padding: 8px 18px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .spreetail-outline-btn:hover {
        border-color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
      }
      .spreetail-cta-btn {
        background: #00d084;
        color: #000000;
        border: none;
        padding: 9px 20px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.25s ease;
      }
      .spreetail-cta-btn:hover {
        background: #00b371;
        box-shadow: 0 4px 14px rgba(0, 208, 132, 0.4);
        transform: translateY(-1px);
      }
      .spreetail-outline-btn.full-width, .spreetail-cta-btn.full-width {
        width: 100%;
        margin-top: 8px;
        text-align: center;
      }

      /* Mobile Dark Drawer Fixed Colors */
      .dark-drawer {
        background: #09090b !important;
        color: #ffffff !important;
      }
      .dark-card {
        background: #141417 !important;
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .dark-list {
        display: flex;
        flex-direction: column;
        padding: 20px 24px;
        gap: 14px;
        background: #09090b !important;
      }
      .dark-item {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff !important;
        text-decoration: none;
      }
      .mobile-services-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: rgba(255, 255, 255, 0.03);
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .mobile-group-label {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #00d084;
      }
      .mobile-drawer-subitem {
        font-size: 13.5px;
        color: #cbd5e1 !important;
        text-decoration: none;
        padding: 4px 0;
        display: block;
      }
      .mobile-drawer-subitem:hover {
        color: #00d084 !important;
      }
      .dark-bottom {
        padding: 20px 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        background: #09090b !important;
      }
      .dark-bottom .spreetail-outline-btn {
        background: transparent !important;
        color: #ffffff !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
      }
      .dark-bottom .spreetail-cta-btn {
        background: #00d084 !important;
        color: #000000 !important;
      }
      .dark-mode-hamburger {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 4px;
      }

      @media (max-width: 900px) {
        .dark-nav, .desktop-only {
          display: none !important;
        }
        .spreetail-header-inner {
          padding: 12px 16px;
        }
        .spreetail-actions {
          gap: 8px;
        }
        .spreetail-cta-btn {
          padding: 7px 14px;
          font-size: 12px;
        }
      }
    </style>
  `;

  // Bind Brand Logo Click
  document.getElementById('headerBrandLogo')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/');
  });

  // Nav Links
  document.getElementById('navHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/');
  });

  document.getElementById('navAbout')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/about');
  });

  document.getElementById('navShop')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/shop');
  });

  document.getElementById('navBlog')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/blog');
  });

  document.getElementById('navContact')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.navigateToRoute) window.navigateToRoute('/contact');
  });

  // Dropdown Items Routing
  const dropdownRoutes = [
    { id: 'dropdownProductTrans', route: '/product-transformation' },
    { id: 'dropdownFullMarketplace', route: '/full-marketplace-management' },
    { id: 'dropdownTargetedMarketing', route: '/targeted-marketing-ads' },
    { id: 'dropdownGlobalExpansion', route: '/global-market-expansion' },
    { id: 'drawerProductTrans', route: '/product-transformation' },
    { id: 'drawerFullMarketplace', route: '/full-marketplace-management' },
    { id: 'drawerTargetedMarketing', route: '/targeted-marketing-ads' },
    { id: 'drawerGlobalExpansion', route: '/global-market-expansion' }
  ];

  dropdownRoutes.forEach(item => {
    document.getElementById(item.id)?.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
      if (window.navigateToRoute) window.navigateToRoute(item.route);
    });
  });

  // Auth Triggers
  setupAuthTriggers();

  // Mobile Drawer
  setupMobileDrawer();
}

import { openIntakeWizardModal } from './IntakeWizardModal.js';

function setupAuthTriggers() {
  const triggerAuth = (mode, role) => openAuthModal(mode, role);

  document.getElementById('signupBtn')?.addEventListener('click', () => openIntakeWizardModal());
  document.getElementById('navSignIn')?.addEventListener('click', () => triggerAuth('signin'));

  // Drawer Auth Links
  document.getElementById('drawerSignIn')?.addEventListener('click', () => { closeDrawer(); triggerAuth('signin'); });
  document.getElementById('drawerSignUp')?.addEventListener('click', () => { closeDrawer(); openIntakeWizardModal(); });

  // Drawer Navigation Links
  document.getElementById('drawerHome')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/'); });
  document.getElementById('drawerAbout')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/about'); });
  document.getElementById('drawerShop')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/shop'); });
  document.getElementById('drawerBlog')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/blog'); });
  document.getElementById('drawerContact')?.addEventListener('click', () => { closeDrawer(); if (window.navigateToRoute) window.navigateToRoute('/contact'); });
}

function setupMobileDrawer() {
  const hamburgerBtn = document.getElementById('mobileHamburgerBtn');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const panel = document.getElementById('mobileDrawerPanel');

  if (hamburgerBtn && backdrop && panel) {
    hamburgerBtn.addEventListener('click', () => {
      backdrop.classList.remove('hidden');
      panel.classList.remove('hidden');
    });

    backdrop.addEventListener('click', closeDrawer);
  }
}

function closeDrawer() {
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const panel = document.getElementById('mobileDrawerPanel');
  if (backdrop && panel) {
    backdrop.classList.add('hidden');
    panel.classList.add('hidden');
  }
}

export function updateCartCount(count) {
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = count;
}