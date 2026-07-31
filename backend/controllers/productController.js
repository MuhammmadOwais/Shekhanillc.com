const products = require('../db/products.json');

/**
 * Get all products (supports category & search query filters)
 */
exports.getAllProducts = (req, res) => {
  try {
    const { category, search } = req.query;
    let filtered = [...products];

    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    res.json({
      success: true,
      total: filtered.length,
      data: filtered
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching products', error: error.message });
  }
};

/**
 * Get single product by ID
 */
exports.getProductById = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching product', error: error.message });
  }
};

/**
 * Get unique category list
 */
exports.getCategories = (req, res) => {
  try {
    const categories = ['All', ...new Set(products.map(p => p.category))];
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching categories', error: error.message });
  }
};
