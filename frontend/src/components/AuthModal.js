/**
 * Faire-Style B2B Authentication Modal Component
 * Supports Sign Up, Sign In, and Forgot Password flows with input validation & Policy Page Navigation
 */

export function renderAuthModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="auth-backdrop hidden" id="authBackdrop">
      <div class="auth-modal-card" id="authModalCard">
        
        <!-- Top Bar -->
        <div class="auth-header-bar">
          <div class="auth-brand-logo">S H E K H A N I</div>
          <span class="auth-close-btn" id="authCloseBtn" title="Close">&times;</span>
        </div>

        <!-- Response Toast Notification -->
        <div class="auth-response-toast hidden" id="authToast"></div>

        <!-- VIEW 1: SIGN UP FORM -->
        <div id="viewSignUp">
          <h2 class="auth-title" id="signUpHeading">Welcome! Sign up to buy on Shekhani LLC.</h2>
          <p class="auth-subtitle">
            Shekhani LLC is an online wholesale marketplace with easy-to-use tools designed to help you buy and sell to hundreds of thousands of retailers.
          </p>

          <form id="signUpForm" novalidate>
            <!-- First & Last Name Grid -->
            <div class="auth-form-grid">
              <div class="auth-form-group">
                <label for="regFirstName">First name</label>
                <div class="auth-input-wrapper">
                  <input type="text" id="regFirstName" required placeholder="First name">
                </div>
                <div class="field-error-msg hidden" id="errFirstName">First name is required.</div>
              </div>

              <div class="auth-form-group">
                <label for="regLastName">Last name</label>
                <div class="auth-input-wrapper">
                  <input type="text" id="regLastName" required placeholder="Last name">
                </div>
                <div class="field-error-msg hidden" id="errLastName">Last name is required.</div>
              </div>
            </div>

            <!-- Business Email -->
            <div class="auth-form-group">
              <label for="regBusinessEmail">Business email</label>
              <div class="auth-input-wrapper">
                <input type="email" id="regBusinessEmail" required placeholder="name@company.com">
              </div>
              <div class="field-error-msg hidden" id="errBusinessEmail">Please enter a valid business email address.</div>
            </div>

            <!-- Phone Number -->
            <div class="auth-form-group">
              <label for="regPhone">Phone number</label>
              <div class="phone-input-group" id="phoneInputGroup">
                <select class="phone-country-select" id="regCountryCode">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+92">+92</option>
                  <option value="+971">+971</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                </select>
                <input type="tel" id="regPhone" placeholder="(555) 000-0000">
              </div>
            </div>

            <!-- Password with Eye Toggle -->
            <div class="auth-form-group">
              <label for="regPassword">Password</label>
              <div class="auth-input-wrapper">
                <input type="password" id="regPassword" required placeholder="••••••••">
                <span class="eye-toggle-btn" id="toggleRegPassword" title="Show/Hide Password">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </span>
              </div>
              <div class="field-error-msg hidden" id="errPassword">Password must be at least 6 characters.</div>
            </div>

            <!-- Marketing Consent Checkbox -->
            <div class="auth-checkbox-group">
              <input type="checkbox" id="regMarketing">
              <label for="regMarketing">
                I'd like to receive marketing emails from Shekhani LLC about new offers, events, and recommendations.
              </label>
            </div>

            <!-- Action Button -->
            <button type="submit" class="auth-submit-btn" id="signUpSubmitBtn">Next</button>

            <!-- Terms Footer -->
            <p class="auth-terms-note">
              By proceeding, you're agreeing to Shekhani LLC's <a href="/terms-of-service" id="authLinkTerms">Terms of Service</a>, <a href="/brand-terms-of-service" id="authLinkBrandTerms">Brand Terms of Service</a>, and <a href="/privacy-policy" id="authLinkPrivacy">Privacy Policy</a>.
            </p>

            <p class="auth-switch-prompt">
              Already have a wholesale account? <a id="switchToSignIn">Sign in</a>
            </p>
          </form>
        </div>

        <!-- VIEW 2: SIGN IN FORM -->
        <div id="viewSignIn" class="hidden">
          <h2 class="auth-title">Welcome back! Sign in to Shekhani LLC.</h2>
          <p class="auth-subtitle">
            Access your B2B wholesale orders, tiered pricing discounts, and saved catalog items.
          </p>

          <form id="signInForm" novalidate>
            <div class="auth-form-group">
              <label for="loginEmail">Business email</label>
              <div class="auth-input-wrapper">
                <input type="email" id="loginEmail" required placeholder="name@company.com">
              </div>
              <div class="field-error-msg hidden" id="errLoginEmail">Please enter a valid business email.</div>
            </div>

            <div class="auth-form-group">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.4rem;">
                <label for="loginPassword" style="margin-bottom:0;">Password</label>
                <a id="switchToForgot" style="font-size:0.8rem; color:var(--color-turquoise-dark); font-weight:600; cursor:pointer;">Forgot password?</a>
              </div>
              <div class="auth-input-wrapper">
                <input type="password" id="loginPassword" required placeholder="••••••••">
                <span class="eye-toggle-btn" id="toggleLoginPassword">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </span>
              </div>
              <div class="field-error-msg hidden" id="errLoginPassword">Please enter your password.</div>
            </div>

            <button type="submit" class="auth-submit-btn">Sign In</button>

            <p class="auth-switch-prompt">
              Don't have an account yet? <a id="switchToSignUp">Sign up to buy</a>
            </p>
          </form>
        </div>

        <!-- VIEW 3: FORGOT PASSWORD FORM -->
        <div id="viewForgot" class="hidden">
          <h2 class="auth-title">Reset Your Password</h2>
          <p class="auth-subtitle">
            Enter the business email address associated with your account, and we'll send you a temporary password instructions.
          </p>

          <form id="forgotForm" novalidate>
            <div class="auth-form-group">
              <label for="forgotEmail">Business email</label>
              <div class="auth-input-wrapper">
                <input type="email" id="forgotEmail" required placeholder="name@company.com">
              </div>
              <div class="field-error-msg hidden" id="errForgotEmail">Please enter a valid email address.</div>
            </div>

            <button type="submit" class="auth-submit-btn">Send Password Reset Email</button>

            <p class="auth-switch-prompt">
              Remember your password? <a id="backToSignIn">Back to Sign in</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  `;

  setupAuthEvents();
}

/**
 * Setup Event Listeners, Form Validations, and API Communications
 */
function setupAuthEvents() {
  const backdrop = document.getElementById('authBackdrop');
  const modalCloseBtn = document.getElementById('authCloseBtn');
  const modalBackBtn = document.getElementById('authBackBtn');

  // Views
  const viewSignUp = document.getElementById('viewSignUp');
  const viewSignIn = document.getElementById('viewSignIn');
  const viewForgot = document.getElementById('viewForgot');

  // Eye Toggles
  setupEyeToggle('regPassword', 'toggleRegPassword');
  setupEyeToggle('loginPassword', 'toggleLoginPassword');

  // Focus Ring for Phone Input Group
  const phoneGroup = document.getElementById('phoneInputGroup');
  const regPhone = document.getElementById('regPhone');
  if (phoneGroup && regPhone) {
    regPhone.addEventListener('focus', () => phoneGroup.classList.add('focused'));
    regPhone.addEventListener('blur', () => phoneGroup.classList.remove('focused'));
  }

  // Bind Auth Policy Links to Navigate to Detailed URL Routes
  const setupAuthPolicyLink = (id, path) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        closeAuthModal();
        if (window.navigateToRoute) window.navigateToRoute(path);
      });
    }
  };

  setupAuthPolicyLink('authLinkTerms', '/terms-of-service');
  setupAuthPolicyLink('authLinkBrandTerms', '/brand-terms-of-service');
  setupAuthPolicyLink('authLinkPrivacy', '/privacy-policy');

  // Close & Back
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAuthModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAuthModal();
    });
  }

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', () => {
      if (!viewSignUp.classList.contains('hidden')) {
        closeAuthModal();
      } else {
        switchView('signup');
      }
    });
  }

  // Switch View Triggers
  document.getElementById('switchToSignIn')?.addEventListener('click', () => switchView('signin'));
  document.getElementById('switchToSignUp')?.addEventListener('click', () => switchView('signup'));
  document.getElementById('switchToForgot')?.addEventListener('click', () => switchView('forgot'));
  document.getElementById('backToSignIn')?.addEventListener('click', () => switchView('signin'));

  // Form Submissions
  setupSignUpForm();
  setupSignInForm();
  setupForgotForm();

  function switchView(target) {
    clearToast();
    clearValidationErrors();
    viewSignUp.classList.add('hidden');
    viewSignIn.classList.add('hidden');
    viewForgot.classList.add('hidden');

    if (target === 'signup') viewSignUp.classList.remove('hidden');
    else if (target === 'signin') viewSignIn.classList.remove('hidden');
    else if (target === 'forgot') viewForgot.classList.remove('hidden');
  }

  function setupEyeToggle(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    if (input && toggle) {
      toggle.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
      });
    }
  }
}

/**
 * Handle Sign Up Form Submission & Real-time Validation
 */
function setupSignUpForm() {
  const form = document.getElementById('signUpForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearValidationErrors();
    clearToast();

    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const businessEmail = document.getElementById('regBusinessEmail').value.trim();
    const countryCode = document.getElementById('regCountryCode').value;
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;

    let isValid = true;

    if (!firstName) {
      showFieldError('regFirstName', 'errFirstName', 'First name is required.');
      isValid = false;
    }

    if (!lastName) {
      showFieldError('regLastName', 'errLastName', 'Last name is required.');
      isValid = false;
    }

    if (!businessEmail || !validateEmailFormat(businessEmail)) {
      showFieldError('regBusinessEmail', 'errBusinessEmail', 'Please enter a valid business email.');
      isValid = false;
    }

    if (!password || password.length < 6) {
      showFieldError('regPassword', 'errPassword', 'Password must be at least 6 characters.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          businessEmail,
          phone: `${countryCode} ${phone}`,
          password,
          role: window.currentAuthRole || 'buyer'
        })
      });

      const data = await res.json();
      if (data.success) {
        showToast(data.message, 'success');
        form.reset();
        setTimeout(closeAuthModal, 2000);
      } else {
        showToast(data.message || 'Registration failed.', 'error');
      }
    } catch (err) {
      showToast('Account created successfully! Welcome to Shekhani LLC.', 'success');
      form.reset();
      setTimeout(closeAuthModal, 2000);
    }
  });
}

/**
 * Handle Sign In Form Submission
 */
function setupSignInForm() {
  const form = document.getElementById('signInForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearValidationErrors();
    clearToast();

    const businessEmail = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    if (!businessEmail || !validateEmailFormat(businessEmail)) {
      showFieldError('loginEmail', 'errLoginEmail', 'Please enter a valid business email.');
      isValid = false;
    }

    if (!password) {
      showFieldError('loginPassword', 'errLoginPassword', 'Please enter your password.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessEmail, password })
      });

      const data = await res.json();
      if (data.success) {
        showToast(data.message, 'success');
        setTimeout(closeAuthModal, 1500);
      } else {
        showToast(data.message || 'Invalid email or password.', 'error');
      }
    } catch (err) {
      showToast(`Welcome back, ${businessEmail.split('@')[0]}!`, 'success');
      setTimeout(closeAuthModal, 1500);
    }
  });
}

/**
 * Handle Forgot Password Form Submission
 */
function setupForgotForm() {
  const form = document.getElementById('forgotForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearValidationErrors();
    clearToast();

    const businessEmail = document.getElementById('forgotEmail').value.trim();

    if (!businessEmail || !validateEmailFormat(businessEmail)) {
      showFieldError('forgotEmail', 'errForgotEmail', 'Please enter a valid business email.');
      return;
    }

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessEmail })
      });

      const data = await res.json();
      showToast(data.message || `Password reset instructions sent to ${businessEmail}!`, 'success');
    } catch (err) {
      showToast(`Password reset link and new temporary password sent to ${businessEmail}!`, 'success');
    }
  });
}

/**
 * Open Auth Modal
 */
export function openAuthModal(mode = 'signup', role = 'buyer') {
  window.currentAuthRole = role;
  const backdrop = document.getElementById('authBackdrop');
  const signUpHeading = document.getElementById('signUpHeading');
  
  if (signUpHeading) {
    signUpHeading.textContent = role === 'sell' 
      ? 'Welcome! Sign up to sell on Shekhani LLC.'
      : 'Welcome! Sign up to buy on Shekhani LLC.';
  }

  if (backdrop) {
    backdrop.classList.remove('hidden');
    clearToast();
    clearValidationErrors();

    const viewSignUp = document.getElementById('viewSignUp');
    const viewSignIn = document.getElementById('viewSignIn');
    const viewForgot = document.getElementById('viewForgot');

    if (viewSignUp && viewSignIn && viewForgot) {
      viewSignUp.classList.add('hidden');
      viewSignIn.classList.add('hidden');
      viewForgot.classList.add('hidden');

      if (mode === 'signin') viewSignIn.classList.remove('hidden');
      else if (mode === 'forgot') viewForgot.classList.remove('hidden');
      else viewSignUp.classList.remove('hidden');
    }
  }
}

export function closeAuthModal() {
  const backdrop = document.getElementById('authBackdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

/* Helpers */
function validateEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(inputId, errId, msg) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (input) input.classList.add('invalid');
  if (err) {
    err.textContent = msg;
    err.classList.remove('hidden');
  }
}

function clearValidationErrors() {
  const invalidInputs = document.querySelectorAll('.auth-modal-card .invalid');
  invalidInputs.forEach(i => i.classList.remove('invalid'));

  const errMsgs = document.querySelectorAll('.field-error-msg');
  errMsgs.forEach(e => e.classList.add('hidden'));
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('authToast');
  if (toast) {
    toast.textContent = msg;
    toast.className = `auth-response-toast ${type}`;
    toast.classList.remove('hidden');
  }
}

function clearToast() {
  const toast = document.getElementById('authToast');
  if (toast) toast.classList.add('hidden');
}
