// In-Memory User Storage for Authentication
const users = [];

/**
 * Business Email Validation Regex
 */
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Handle Sign Up
 */
exports.signup = (req, res) => {
  try {
    const { firstName, lastName, businessEmail, phone, password, role } = req.body;

    // Server-side validation
    if (!firstName || !lastName || !businessEmail || !password) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    if (!validateEmail(businessEmail)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid business email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.businessEmail.toLowerCase() === businessEmail.toLowerCase());
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'An account with this business email already exists.' });
    }

    const newUser = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      phone: phone || '',
      password, // In production, password would be hashed with bcrypt
      role: role || 'buyer',
      createdAt: new Date()
    };

    users.push(newUser);

    res.status(201).json({
      success: true,
      message: `Welcome to Shekhani LLC, ${newUser.firstName}! Your wholesale account has been created.`,
      user: {
        id: newUser.id,
        name: `${newUser.firstName} ${newUser.lastName}`,
        email: newUser.businessEmail,
        role: newUser.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during sign up', error: error.message });
  }
};

/**
 * Handle Sign In
 */
exports.signin = (req, res) => {
  try {
    const { businessEmail, password } = req.body;

    if (!businessEmail || !password) {
      return res.status(400).json({ success: false, message: 'Please enter your business email and password.' });
    }

    if (!validateEmail(businessEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    const user = users.find(u => u.businessEmail.toLowerCase() === businessEmail.toLowerCase() && u.password === password);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password combination.' });
    }

    res.json({
      success: true,
      message: `Welcome back, ${user.firstName}!`,
      user: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.businessEmail,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during sign in', error: error.message });
  }
};

/**
 * Handle Forgot Password (Simulates sending a reset password to the business email)
 */
exports.forgotPassword = (req, res) => {
  try {
    const { businessEmail } = req.body;

    if (!businessEmail || !validateEmail(businessEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid business email address.' });
    }

    // Simulate generating and sending a new password to the user's email
    const tempPassword = 'SHK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    
    const user = users.find(u => u.businessEmail.toLowerCase() === businessEmail.toLowerCase());
    if (user) {
      user.password = tempPassword;
    }

    res.json({
      success: true,
      message: `A new temporary password [${tempPassword}] and reset instructions have been sent to ${businessEmail}.`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error processing forgot password', error: error.message });
  }
};
