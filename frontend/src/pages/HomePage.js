import { renderNavbar, updateCartCount } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';
import { renderCategoryPills, updateActivePillUI } from '../components/CategoryPills.js';
import { renderFeaturedBrands } from '../components/FeaturedBrands.js';
import { renderBestSellersSlider } from '../components/BestSellersSlider.js';
import { renderExploreCategories } from '../components/ExploreCategories.js';
import { renderHomeBlogSection } from '../components/HomeBlogSection.js';
import { renderProductModal, closeProductModal } from '../components/ProductModal.js';
import { renderAuthModal } from '../components/AuthModal.js';

// Import Dedicated Pages
import { renderShopPage } from './ShopPage.js';
import { renderCartPage } from './CartPage.js';
import { renderBlogPage } from './BlogPage.js';
import { renderHelpCenterPage } from './HelpCenterPage.js';
import { renderContactPage } from './ContactPage.js';
import { renderAboutUsPage } from './AboutUsPage.js';

// Import 11 Separate Category Pages
import { renderArtCraftPage } from './ArtCraftPage.js';
import { renderBeautyPersonalCarePage } from './BeautyPersonalCarePage.js';
import { renderDIYToolsPage } from './DIYToolsPage.js';
import { renderFashionPage } from './FashionPage.js';
import { renderGolfPage } from './GolfPage.js';
import { renderHouseholdHealthPage } from './HouseholdHealthPage.js';
import { renderHomeKitchenPage } from './HomeKitchenPage.js';
import { renderOfficeSuppliesPage } from './OfficeSuppliesPage.js';
import { renderPatioLawnGardenPage } from './PatioLawnGardenPage.js';
import { renderPetSuppliesPage } from './PetSuppliesPage.js';
import { renderToysGamesPage } from './ToysGamesPage.js';

// Import Legal Policy Pages
import { renderTermsOfServicePage } from './TermsOfServicePage.js';
import { renderBrandTermsPage } from './BrandTermsPage.js';
import { renderPrivacyPolicyPage } from './PrivacyPolicyPage.js';
import { renderCookiesPolicyPage } from './CookiesPolicyPage.js';
import { renderIPPolicyPage } from './IPPolicyPage.js';

export function initHomePage() {
  // State
  let allProducts = [];
  let currentCategory = 'All';
  let cart = [];

  const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5000/api'
    : '/api';

  // DOM Containers
  const heroContainer = document.getElementById('heroContainer');
  const featuredBrandsContainer = document.getElementById('featuredBrandsContainer');
  const bestsellersContainer = document.getElementById('bestsellersContainer');
  const exploreCategoriesContainer = document.getElementById('exploreCategoriesContainer');
  const homeBlogSectionContainer = document.getElementById('homeBlogSectionContainer');
  const modalClose = document.getElementById('modalClose');
  const productModal = document.getElementById('productModal');

  // Render Auth Modal Container
  renderAuthModal('authModalContainer');

  /**
   * Category Slugs Mapping
   */
  const categoryPageRenderers = {
    '/art-craft': renderArtCraftPage,
    '/beauty-personal-care': renderBeautyPersonalCarePage,
    '/diy-tools': renderDIYToolsPage,
    '/fashion': renderFashionPage,
    '/golf': renderGolfPage,
    '/household-health': renderHouseholdHealthPage,
    '/home-kitchen': renderHomeKitchenPage,
    '/office-supplies': renderOfficeSuppliesPage,
    '/patio-lawn-garden': renderPatioLawnGardenPage,
    '/pet-supplies': renderPetSuppliesPage,
    '/toys-games': renderToysGamesPage
  };

  const categoryToSlugMap = {
    'art & craft': '/art-craft',
    'beauty & personal care': '/beauty-personal-care',
    'diy & tools': '/diy-tools',
    'fashion': '/fashion',
    'golf': '/golf',
    'household & health': '/household-health',
    'home & kitchen': '/home-kitchen',
    'office supplies': '/office-supplies',
    'patio lawn & garden': '/patio-lawn-garden',
    'pet supplies': '/pet-supplies',
    'toys & games': '/toys-games'
  };

  /**
   * Legal Policy Slugs Mapping
   */
  const policyRouteMap = {
    '/terms-of-service': 'terms',
    '/brand-terms-of-service': 'brand-terms',
    '/privacy-policy': 'privacy',
    '/cookies-policy': 'cookies',
    '/ip-policy': 'ip-policy'
  };

  /**
   * Global SPA Router Function supporting HTML5 pushState
   */
  window.navigateToRoute = function(path, updateHistory = true) {
    if (updateHistory && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    const policyKey = policyRouteMap[path];
    const categoryRenderer = categoryPageRenderers[path];

    let pageContainer = document.getElementById('pageContainer');
    if (!pageContainer) {
      pageContainer = document.createElement('div');
      pageContainer.id = 'pageContainer';
      document.body.insertBefore(pageContainer, document.getElementById('footerContainer'));
    }

    const categoryPills = document.getElementById('categoryPills');

    if (policyKey) {
      // Hide Homepage Components
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      if (policyKey === 'terms') renderTermsOfServicePage('pageContainer');
      else if (policyKey === 'brand-terms') renderBrandTermsPage('pageContainer');
      else if (policyKey === 'privacy') renderPrivacyPolicyPage('pageContainer');
      else if (policyKey === 'cookies') renderCookiesPolicyPage('pageContainer');
      else if (policyKey === 'ip-policy') renderIPPolicyPage('pageContainer');

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/about') {
      // Render Dedicated About Us Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      renderAboutUsPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/contact') {
      // Render Dedicated Contact Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      renderContactPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/support') {
      // Render Dedicated Help Center Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      renderHelpCenterPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/blog') {
      // Render Dedicated Blog Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      renderBlogPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/shop') {
      // Render Dedicated Shop Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      renderShopPage('pageContainer', {
        allProducts,
        cart,
        onAddToCart: (product) => {
          const existing = cart.find(i => i.id === product.id);
          if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
          } else {
            cart.push({ ...product, quantity: 1 });
          }
          updateCartCount(cart.reduce((t, i) => t + (i.quantity || 1), 0));
          window.navigateToRoute('/cart');
        },
        onViewCart: () => window.navigateToRoute('/cart')
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/cart') {
      // Render Dedicated Cart Page Component
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
      pageContainer.style.display = 'block';

      const renderCartView = () => {
        renderCartPage('pageContainer', {
          cart,
          onUpdateQuantity: (idx, newQty) => {
            if (cart[idx]) {
              cart[idx].quantity = newQty;
              updateCartCount(cart.reduce((t, i) => t + (i.quantity || 1), 0));
              renderCartView();
            }
          },
          onRemoveItem: (idx) => {
            cart.splice(idx, 1);
            updateCartCount(cart.reduce((t, i) => t + (i.quantity || 1), 0));
            renderCartView();
          },
          onContinueShopping: () => window.navigateToRoute('/shop')
        });
      };

      renderCartView();
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (categoryRenderer) {
      // Render Specific Category Page Component (e.g. GolfPage.js, FashionPage.js)
      if (heroContainer) heroContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'block';
      pageContainer.style.display = 'block';

      categoryRenderer('pageContainer', {
        allProducts,
        cart,
        onAddToCart: (product) => {
          const existing = cart.find(i => i.id === product.id);
          if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
          } else {
            cart.push({ ...product, quantity: 1 });
          }
          updateCartCount(cart.reduce((t, i) => t + (i.quantity || 1), 0));
          window.navigateToRoute('/cart');
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else {
      // Main Homepage View (Clean Hero + Featured Brands + Bestsellers Slider + Explore Categories + Home Blog Section)
      pageContainer.style.display = 'none';
      if (heroContainer) heroContainer.style.display = 'block';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'block';
      if (bestsellersContainer) bestsellersContainer.style.display = 'block';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'block';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'block';
      if (categoryPills) categoryPills.style.display = 'block';

      if (path === '/' || path === '') {
        currentCategory = 'All';
        updateActivePillUI('categoryPills', currentCategory);
      }
    }
  };

  // Back / Forward Browser History Event Listener
  window.addEventListener('popstate', () => {
    window.navigateToRoute(window.location.pathname, false);
  });

  // Render Navbar & Footer
  renderNavbar('navbarContainer', {
    onSearch: (query) => {
      window.navigateToRoute('/shop');
    },
    onCartClick: () => {
      window.navigateToRoute('/cart');
    },
    onCategorySelect: (cat) => {
      const slug = categoryToSlugMap[cat.toLowerCase()] || '/';
      window.navigateToRoute(slug);
    }
  });

  renderFooter('footerContainer');

  // Render Dual-Video Hero Section
  renderHeroSection(heroContainer);

  // Render Featured Brands Component Below Hero Section
  renderFeaturedBrands('featuredBrandsContainer');

  // Render Bestsellers Slider Component Below Featured Brands
  renderBestSellersSlider('bestsellersContainer');

  // Render Explore Categories Component Below Bestsellers
  renderExploreCategories('exploreCategoriesContainer');

  // Render Prominent Dark Home Blog Section Below Explore Categories
  renderHomeBlogSection('homeBlogSectionContainer');

  // Initial Route Check on Page Load
  window.navigateToRoute(window.location.pathname, false);

  // Event Handlers
  if (modalClose) {
    modalClose.addEventListener('click', () => closeProductModal('productModal'));
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal('productModal');
    });
  }

  // Fetch Data & Render
  fetchCategories();
  fetchProducts();

  function renderHeroSection(container) {
    if (!container) return;
    container.innerHTML = `
      <section class="hero-video-section">
        <div class="hero-video-wrapper">
          <video id="heroVideo1" class="hero-video active" autoplay muted playsinline loop>
            <source src="https://res.cloudinary.com/sfjl53dg/video/upload/v1785457438/7065801-uhd_2160_3840_24fps_bvfex8.mp4" type="video/mp4">
          </video>
        </div>
        
        <div class="hero-video-overlay"></div>

        <div class="site-container hero-content">
          <div class="hero-tag-badge">
            <span class="hero-badge-dot"></span>
            <span class="hero-badge-text">SHEKHANI LLC</span>
          </div>
          <h1 class="hero-title">Your Trusted Partner for Growth & Brand Contributions</h1>
          <p class="hero-subtitle">
            Connecting top manufacturers, brand distributors, and retail store owners with seamless B2B wholesale logistics and nationwide product distribution.
          </p>
          <div class="hero-cta-group">
            <button class="btn-hero-white" id="heroShopBtn">Shop Catalog</button>
            <button class="btn-hero-outline" id="heroContactBtn">Contact Us</button>
          </div>
        </div>
      </section>
    `;

    document.getElementById('heroShopBtn')?.addEventListener('click', () => {
      window.navigateToRoute('/shop');
    });

    document.getElementById('heroContactBtn')?.addEventListener('click', () => {
      window.navigateToRoute('/contact');
    });
  }

  async function fetchCategories() {
    try {
      const res = await fetch(`${API_BASE}/categories`);
      const result = await res.json();
      if (result.success && Array.isArray(result.data)) {
        renderCategoryPills('categoryPills', result.data, currentCategory, (selectedCat) => {
          const slug = categoryToSlugMap[selectedCat.toLowerCase()] || '/';
          window.navigateToRoute(slug);
        });
      }
    } catch (err) {
      console.warn('Could not fetch categories:', err);
    }
  }

  async function fetchProducts() {
    try {
      const res = await fetch(`${API_BASE}/products`);
      const result = await res.json();
      if (result.success && Array.isArray(result.data)) {
        allProducts = result.data;
        // Refresh active route with fetched products
        window.navigateToRoute(window.location.pathname, false);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  }
}
