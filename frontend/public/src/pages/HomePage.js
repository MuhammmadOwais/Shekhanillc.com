import { renderNavbar, updateCartCount } from '../components/Navbar.js?v=b2b_v6';
import { renderFooter } from '../components/Footer.js?v=b2b_v4';
import { renderCategoryPills, updateActivePillUI } from '../components/CategoryPills.js?v=b2b_v1';
import { renderFeaturedBrands } from '../components/FeaturedBrands.js?v=b2b_v1';
import { renderBestSellersSlider } from '../components/BestSellersSlider.js?v=b2b_v1';
import { renderExploreCategories } from '../components/ExploreCategories.js?v=b2b_v1';
import { renderTrustedMarketplaces } from '../components/TrustedMarketplaces.js?v=b2b_v4';
import { renderHowItWorksSection } from '../components/HowItWorksSection.js?v=b2b_v4';
import { renderValuePropComparison } from '../components/ValuePropComparison.js?v=b2b_v2';
import { renderPartnerQualificationForm } from '../components/PartnerQualificationForm.js?v=b2b_v3';
import { renderHomeBlogSection } from '../components/HomeBlogSection.js?v=b2b_v1';
import { renderPerformanceProofSection } from '../components/PerformanceProofSection.js?v=b2b_v1';
import { renderGoogleVisibilitySection } from '../components/GoogleVisibilitySection.js?v=b2b_v1';
import { renderIntakeWizardModal, openIntakeWizardModal } from '../components/IntakeWizardModal.js?v=b2b_v1';
import { renderListingBeforeAfterSlider } from '../components/ListingBeforeAfterSlider.js?v=b2b_v1';
import { renderLiveChannelRadar } from '../components/LiveChannelRadar.js?v=b2b_v1';
import { renderProductModal, closeProductModal } from '../components/ProductModal.js?v=b2b_v1';
import { renderAuthModal } from '../components/AuthModal.js?v=b2b_v1';

import { renderServicesSection } from '../components/ServicesSection.js?v=b2b_v2';
import { renderInteractiveTabbedSection } from '../components/InteractiveTabbedSection.js?v=b2b_v2';
import { renderProductTransformationPage } from './ProductTransformationPage.js';
import { renderFullMarketplaceManagementPage } from './FullMarketplaceManagementPage.js';
import { renderTargetedMarketingAdsPage } from './TargetedMarketingAdsPage.js';
import { renderGlobalMarketExpansionPage } from './GlobalMarketExpansionPage.js';

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
  const trustedMarketplacesContainer = document.getElementById('trustedMarketplacesContainer');
  const performanceProofContainer = document.getElementById('performanceProofContainer');
  const channelRadarContainer = document.getElementById('channelRadarContainer');
  const servicesSectionContainer = document.getElementById('servicesSectionContainer');
  const beforeAfterContainer = document.getElementById('beforeAfterContainer');
  const googleVisibilityContainer = document.getElementById('googleVisibilityContainer');
  const interactiveTabbedContainer = document.getElementById('interactiveTabbedContainer');
  const howItWorksSectionContainer = document.getElementById('howItWorksSectionContainer');
  const valuePropContainer = document.getElementById('valuePropContainer');
  const partnerFormContainer = document.getElementById('partnerFormContainer');
  const homeBlogSectionContainer = document.getElementById('homeBlogSectionContainer');
  const featuredBrandsContainer = document.getElementById('featuredBrandsContainer');
  const bestsellersContainer = document.getElementById('bestsellersContainer');
  const exploreCategoriesContainer = document.getElementById('exploreCategoriesContainer');
  const modalClose = document.getElementById('modalClose');
  const productModal = document.getElementById('productModal');

  // Service Pages Mapping
  const servicePageRenderers = {
    '/product-transformation': renderProductTransformationPage,
    '/full-marketplace-management': renderFullMarketplaceManagementPage,
    '/targeted-marketing-ads': renderTargetedMarketingAdsPage,
    '/global-market-expansion': renderGlobalMarketExpansionPage
  };

  // Render Auth Modal & Intake Wizard Container
  renderAuthModal('authModalContainer');
  renderIntakeWizardModal('intakeWizardModalContainer');

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

    const serviceRenderer = servicePageRenderers[path];

    function hideAllHomepageSections() {
      if (heroContainer) heroContainer.style.display = 'none';
      if (trustedMarketplacesContainer) trustedMarketplacesContainer.style.display = 'none';
      if (performanceProofContainer) performanceProofContainer.style.display = 'none';
      if (channelRadarContainer) channelRadarContainer.style.display = 'none';
      if (servicesSectionContainer) servicesSectionContainer.style.display = 'none';
      if (beforeAfterContainer) beforeAfterContainer.style.display = 'none';
      if (googleVisibilityContainer) googleVisibilityContainer.style.display = 'none';
      if (interactiveTabbedContainer) interactiveTabbedContainer.style.display = 'none';
      if (howItWorksSectionContainer) howItWorksSectionContainer.style.display = 'none';
      if (valuePropContainer) valuePropContainer.style.display = 'none';
      if (partnerFormContainer) partnerFormContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';
    }

    if (serviceRenderer) {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      serviceRenderer('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (policyKey) {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      if (policyKey === 'terms') renderTermsOfServicePage('pageContainer');
      else if (policyKey === 'brand-terms') renderBrandTermsPage('pageContainer');
      else if (policyKey === 'privacy') renderPrivacyPolicyPage('pageContainer');
      else if (policyKey === 'cookies') renderCookiesPolicyPage('pageContainer');
      else if (policyKey === 'ip-policy') renderIPPolicyPage('pageContainer');

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/about') {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      renderAboutUsPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/contact') {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      renderContactPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/support') {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      renderHelpCenterPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/blog') {
      hideAllHomepageSections();
      pageContainer.style.display = 'block';

      renderBlogPage('pageContainer');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (path === '/shop') {
      hideAllHomepageSections();
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
      hideAllHomepageSections();
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
      hideAllHomepageSections();
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
      // Main Homepage View
      pageContainer.style.display = 'none';
      if (heroContainer) heroContainer.style.display = 'block';
      if (trustedMarketplacesContainer) trustedMarketplacesContainer.style.display = 'block';
      if (performanceProofContainer) performanceProofContainer.style.display = 'block';
      if (channelRadarContainer) channelRadarContainer.style.display = 'block';
      if (servicesSectionContainer) servicesSectionContainer.style.display = 'block';
      if (beforeAfterContainer) beforeAfterContainer.style.display = 'block';
      if (googleVisibilityContainer) googleVisibilityContainer.style.display = 'block';
      if (interactiveTabbedContainer) interactiveTabbedContainer.style.display = 'block';
      if (howItWorksSectionContainer) howItWorksSectionContainer.style.display = 'block';
      if (valuePropContainer) valuePropContainer.style.display = 'block';
      if (partnerFormContainer) partnerFormContainer.style.display = 'block';
      if (homeBlogSectionContainer) homeBlogSectionContainer.style.display = 'none';
      if (featuredBrandsContainer) featuredBrandsContainer.style.display = 'none';
      if (bestsellersContainer) bestsellersContainer.style.display = 'none';
      if (exploreCategoriesContainer) exploreCategoriesContainer.style.display = 'none';
      if (categoryPills) categoryPills.style.display = 'none';

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

  // Render Trusted By Brands & Marketplaces Component Right Below Hero
  renderTrustedMarketplaces('trustedMarketplacesContainer');

  // Render Verified Performance & ROAS Proof Section Below Trusted Marketplaces
  renderPerformanceProofSection('performanceProofContainer');

  // Render Live Omnichannel Retail Ecosystem Radar Below Performance Proof
  renderLiveChannelRadar('channelRadarContainer');

  // Render Services Green Gradient Section Right Below Live Channel Radar
  renderServicesSection('servicesSectionContainer');

  // Render Storefront Listing Before & After Transformation Slider Below Services
  renderListingBeforeAfterSlider('beforeAfterContainer');

  // Render Google & Search Engine Visibility Section Right Below Listing Slider
  renderGoogleVisibilitySection('googleVisibilityContainer');

  // Render Interactive Launch, Sell, Ship, Grow Tabbed Section
  renderInteractiveTabbedSection('interactiveTabbedContainer');

  // Render How It Works Section Component Below Services Section
  renderHowItWorksSection('howItWorksSectionContainer');

  // Render Value Proposition Comparison Component Below How It Works
  renderValuePropComparison('valuePropContainer');

  // Render Partner Qualification Lead Form Component
  renderPartnerQualificationForm('partnerFormContainer');

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
      <section class="spreetail-hero-section">
        <!-- Background Video -->
        <div class="hero-video-wrapper">
          <video id="heroVideo1" class="hero-video active" autoplay muted playsinline loop>
            <source src="https://res.cloudinary.com/sfjl53dg/video/upload/v1785457438/7065801-uhd_2160_3840_24fps_bvfex8.mp4" type="video/mp4">
          </video>
        </div>
        
        <!-- Dark Overlay -->
        <div class="hero-video-overlay"></div>

        <div class="spreetail-hero-container">
          <h1 class="spreetail-hero-title">
            Accelerate Your Brand Across Global Marketplaces.<br>
            <span class="spreetail-title-highlight">Zero Risk. Total Brand Control.</span>
          </h1>

          <p class="spreetail-hero-subtitle">
            We buy your inventory upfront, optimize your product listings, enforce MAP pricing, and scale your brand across Amazon, Walmart, eBay, and TikTok Shop worldwide.
          </p>

          <div class="spreetail-hero-cta-row">
            <button class="spreetail-btn-emerald" id="heroPartnerBtn">Submit Brand For Evaluation</button>
            <button class="spreetail-btn-outline" id="heroHowBtn">Explore Distribution Model</button>
          </div>

          <!-- Stat Metrics Row -->
          <div class="spreetail-stats-row">
            <div class="stat-card">
              <div class="stat-number">$10M+</div>
              <div class="stat-label">Capital Deployed in Inventory Buyouts</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">99.8%</div>
              <div class="stat-label">On-Time Order Fulfillment</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">MAP & Brand Control Enforcement</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">4+</div>
              <div class="stat-label">Global Retail Marketplaces</div>
            </div>
          </div>
        </div>
      </section>

      <style>
        .spreetail-hero-section {
          position: relative;
          background: #05070a;
          color: #ffffff;
          padding: 100px 24px 70px 24px;
          overflow: hidden;
          text-align: center;
        }
        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 7, 10, 0.75) 0%, rgba(5, 7, 10, 0.88) 100%);
          z-index: 2;
        }
        .spreetail-hero-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          z-index: 10;
        }
        .spreetail-hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin-bottom: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .spreetail-title-highlight {
          color: #ffffff;
          background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .spreetail-hero-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #cbd5e1;
          max-width: 820px;
          margin: 0 auto 36px auto;
          font-weight: 400;
        }
        .spreetail-hero-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 70px;
        }
        .spreetail-btn-emerald {
          background: #00d084;
          color: #000000;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(0, 208, 132, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 48px;
        }
        .spreetail-btn-emerald:hover {
          background: #00b371;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 208, 132, 0.4);
        }
        .spreetail-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 48px;
        }
        .spreetail-btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Stats Row Styles */
        .spreetail-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .stat-card {
          text-align: center;
        }
        .stat-number {
          font-size: 38px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .stat-label {
          font-size: 13px;
          color: #cbd5e1;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .spreetail-hero-section {
            padding: 36px 14px 28px 14px;
          }
          .spreetail-hero-title {
            font-size: 26px;
            line-height: 1.2;
            margin-bottom: 14px;
            letter-spacing: -0.5px;
          }
          .spreetail-hero-subtitle {
            font-size: 13px;
            line-height: 1.5;
            margin-bottom: 22px;
          }
          .spreetail-hero-cta-row {
            flex-direction: flex;
            align-items: stretch;
            justify-content: center;
            gap: 10px;
            margin-bottom: 32px;
          }
          .spreetail-btn-emerald, .spreetail-btn-outline {
            width: auto;
            flex: 1;
            padding: 10px 12px;
            font-size: 12px;
            height: auto;
            min-height: 48px;
            white-space: normal;
            word-break: break-word;
            line-height: 1.35;
          }
          .spreetail-stats-row {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 6px;
            padding-top: 20px;
          }
          .stat-number {
            font-size: 17px;
            margin-bottom: 2px;
          }
          .stat-label {
            font-size: 10px;
            line-height: 1.25;
          }
        }
      </style>
    `;

    document.getElementById('heroPartnerBtn')?.addEventListener('click', () => {
      openIntakeWizardModal();
    });

    document.getElementById('heroHowBtn')?.addEventListener('click', () => {
      const section = document.getElementById('howItWorksSection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const defaultProductsList = [
    { id: 1, sku: "SKU-GOLF-01", name: "Professional Golf Glove & Ball Set", category: "Golf", price: 28.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&auto=format&fit=crop&q=80", description: "Premium cabretta leather golf glove with 12 tour-grade golf balls for professional players." },
    { id: 2, sku: "SKU-GOLF-02", name: "Precision Laser Golf Rangefinder", category: "Golf", price: 89.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&auto=format&fit=crop&q=80", description: "High precision 800-yard laser rangefinder with slope measurement and flag lock." },
    { id: 3, sku: "SKU-GOLF-03", name: "Tour Stand Golf Bag Lightweight", category: "Golf", price: 110.00, inStock: true, image: "https://images.unsplash.com/photo-1593111774601-dfbce3240b2a?w=600&auto=format&fit=crop&q=80", description: "Ergonomic 14-divider lightweight golf stand bag with waterproof garment pockets." },
    { id: 4, sku: "SKU-ART-01", name: "Brushes for Kids & Artist Painting", category: "Art & Craft", price: 18.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80", description: "Assorted paint brushes set with durable bristles for school painting and watercolor." },
    { id: 5, sku: "SKU-ART-02", name: "Jumbo Sidewalk Chalk Holders Set", category: "Art & Craft", price: 9.00, inStock: true, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80", description: "Colorful sidewalk chalk holder set protecting hands while drawing outdoor pavement art." },
    { id: 6, sku: "SKU-ART-03", name: "24-Color Professional Acrylic Paint Tubes", category: "Art & Craft", price: 24.00, inStock: true, image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80", description: "Rich pigment acrylic paint set for canvas, wood, and ceramic crafting." },
    { id: 7, sku: "SKU-BEAUTY-01", name: "Organic Hydrating Rosewater Facial Mist", category: "Beauty & Personal Care", price: 16.50, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80", description: "100% pure organic rosewater toner mist for instant skin hydration and glow." },
    { id: 8, sku: "SKU-BEAUTY-02", name: "Vitamin C Brightening Facial Serum 30ml", category: "Beauty & Personal Care", price: 22.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1608248597261-83325705438f?w=600&auto=format&fit=crop&q=80", description: "Potent 20% Vitamin C serum enriched with hyaluronic acid for hyperpigmentation treatment." },
    { id: 9, sku: "SKU-BEAUTY-03", name: "Natural Charcoal Detoxifying Bath Soap", category: "Beauty & Personal Care", price: 7.50, inStock: true, image: "https://images.unsplash.com/photo-1607006482602-76ca072b4482?w=600&auto=format&fit=crop&q=80", description: "Activated bamboo charcoal body bar deeply cleansing pores and removing impurities." },
    { id: 10, sku: "SKU-TOOLS-01", name: "Heavy-Duty 45-Piece Home Tool Set", category: "DIY & Tools", price: 42.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=600&auto=format&fit=crop&q=80", description: "Complete household repair tool kit with hammer, pliers, screwdriver bits, and tape measure." },
    { id: 11, sku: "SKU-FASHION-01", name: "Classic Minimalist Polarized Sunglasses", category: "Fashion", price: 29.99, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80", description: "UV400 protection polarized sunglasses with lightweight stainless steel frame." },
    { id: 12, sku: "SKU-HEALTH-01", name: "Sonic Electric Toothbrush With 4 Heads", category: "Household & Health", price: 34.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&auto=format&fit=crop&q=80", description: "40,000 VPM sonic power toothbrush with 5 smart cleaning modes and travel case." },
    { id: 13, sku: "SKU-KITCHEN-01", name: "Non-Stick Ceramic Frying Pan 10-Inch", category: "Home & Kitchen", price: 36.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80", description: "Eco-friendly toxin-free ceramic non-stick skillet for effortless cooking and cleaning." },
    { id: 14, sku: "SKU-OFFICE-01", name: "Ergonomic Memory Foam Seat Cushion", category: "Office Supplies", price: 25.00, inStock: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80", description: "Contoured orthopedic foam tailbone cushion relieving lower back pressure during work." },
    { id: 15, sku: "SKU-GARDEN-01", name: "Solar Outdoor LED Garden Pathway Lights", category: "Patio Lawn & Garden", price: 31.00, inStock: true, image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80", description: "Waterproof solar landscape lights illuminating garden walkways automatically at dusk." },
    { id: 16, sku: "SKU-PET-01", name: "Interactive Automatic Laser Toy for Cats", category: "Pet Supplies", price: 19.50, inStock: true, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80", description: "360-degree rotating automated red laser light exerciser keeping cats active." },
    { id: 17, sku: "SKU-TOYS-01", name: "Educational STEM Solar Robot Kit 12-in-1", category: "Toys & Games", price: 26.00, isFeatured: true, inStock: true, image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80", description: "Solar powered building science kit for kids promoting hands-on engineering skills." }
  ];

  // Initialize with fallback static products immediately
  window.shekhaniGlobalProducts = defaultProductsList;
  allProducts = defaultProductsList;

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
      if (result.success && Array.isArray(result.data) && result.data.length > 0) {
        allProducts = result.data;
        // Refresh active route with fetched products
        window.navigateToRoute(window.location.pathname, false);
      }
    } catch (err) {
      console.warn('Backend API unavailable, using embedded products catalog:', err);
    }
  }
}
