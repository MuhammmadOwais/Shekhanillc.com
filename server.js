const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve Static Files with Cache & MIME Control
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d',
  etag: false
}));

// Explicit Static Asset Routes (Fixes Hostinger MIME type issues)
app.get('/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/app.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'app.js'));
});

// Full B2B Products Catalog
const products = [
  {
    id: 1,
    sku: "SKU-90009751",
    name: "Mushroom Extra Large Popcorn Kernels",
    category: "Grocery",
    price: 12.00,
    isFeatured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=600&auto=format&fit=crop&q=80",
    description: "Premium mushroom style popcorn kernels for gourmet popcorn production. Non-GMO and 100% natural kernels."
  },
  {
    id: 2,
    sku: "SKU-90009752",
    name: "Brushes for Kids Painting",
    category: "Art & Craft",
    price: 18.00,
    isFeatured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
    description: "Assorted paint brushes set with durable bristles for school painting and creative kids art projects."
  },
  {
    id: 3,
    sku: "SKU-90009753",
    name: "Rechargeable Wet & Dry Shaver with Pop-up Trimmer",
    category: "Beauty & Personal Care",
    price: 64.00,
    isFeatured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&auto=format&fit=crop&q=80",
    description: "Electric rotary shaver with precision pop-up beard trimmer. Waterproof IPX7 design for comfortable wet & dry shaving."
  },
  {
    id: 4,
    sku: "SKU-90009754",
    name: "Adjustable-Height UpSpace Shelf",
    category: "Home & Kitchen",
    price: 19.00,
    isFeatured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80",
    description: "Stackable cabinet shelf organizer for dishes, cups, and kitchen supplies to maximize vertical storage space."
  },
  {
    id: 5,
    sku: "SKU-90009755",
    name: "Wagon Garden Planter",
    category: "Patio Lawn & Garden",
    price: 44.00,
    isTrending: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",
    description: "Decorative wooden wagon flower planter for backyard, lawn, patio, and outdoor plant displays."
  },
  {
    id: 6,
    sku: "SKU-90009756",
    name: "Flex-a-Size Paper Towels",
    category: "Household & Health",
    price: 29.00,
    isTrending: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    description: "Absorbent 2-ply kitchen paper towel rolls for quick spill cleanups and everyday household hygiene."
  },
  {
    id: 7,
    sku: "SKU-90009757",
    name: "Desk Organizer Set",
    category: "Office Supplies",
    price: 11.00,
    isTrending: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    description: "Multi-functional metal mesh desk storage organizer with pen holders, letter trays, and drawer compartments."
  },
  {
    id: 8,
    sku: "SKU-90009758",
    name: "Transporter Feature Vehicle",
    category: "Toys & Games",
    price: 39.00,
    isTrending: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
    description: "Interactive toy truck transporter with sound effects and mini vehicles for children."
  },
  {
    id: 9,
    sku: "SKU-90009759",
    name: "Sketchbook for Beginners",
    category: "Art & Craft",
    price: 12.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
    description: "High quality drawing paper sketchbook ideal for kids and beginner artists using pencils, charcoal, and ink."
  },
  {
    id: 10,
    sku: "SKU-90009760",
    name: "Shower Gel",
    category: "Beauty & Personal Care",
    price: 21.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    description: "Nourishing organic body wash formulated with natural botanicals for smooth and refreshed skin."
  },
  {
    id: 11,
    sku: "SKU-90009761",
    name: "Jumbo Chalk Holders",
    category: "Art & Craft",
    price: 9.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80",
    description: "Colorful sidewalk chalk holder set protecting children's hands while drawing outdoors."
  },
  {
    id: 12,
    sku: "SKU-90009762",
    name: "Lady Electric Shaver",
    category: "Beauty & Personal Care",
    price: 34.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    description: "Gentle waterproof women's electric shaver with bikini trimmer attachment for quick and painless hair removal."
  },
  {
    id: 13,
    sku: "SKU-90009763",
    name: "Cordless Rotary Tool Kit",
    category: "DIY & Tools",
    price: 34.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
    description: "Rechargeable rotary power tool kit with accessories for sanding, polishing, cutting, and wood carving."
  },
  {
    id: 14,
    sku: "SKU-90009764",
    name: "Natural Cat Litter",
    category: "Pet Supplies",
    price: 26.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80",
    description: "Eco-friendly wheat-based natural cat litter providing fast clumping and superior odor control."
  },
  {
    id: 15,
    sku: "SKU-90009765",
    name: "Glass Tumbler with Protective Sleeve",
    category: "Home & Kitchen",
    price: 12.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&auto=format&fit=crop&q=80",
    description: "Reusable glass water tumbler with bamboo lid, silicone straw, and non-slip protective sleeve."
  },
  {
    id: 16,
    sku: "SKU-90009766",
    name: "Lash Blast Volume Mascara",
    category: "Beauty & Personal Care",
    price: 8.00,
    inStock: true,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&auto=format&fit=crop&q=80",
    description: "Volumizing waterproof black mascara creating full, bold, and clump-free eyelashes all day."
  }
];

// API Endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.post('/api/contact', (req, res) => {
  res.json({
    success: true,
    message: "Thank you for contacting Shekhani LLC! Our B2B sales team will reach out to you within 24 hours."
  });
});

app.post('/api/checkout', (req, res) => {
  res.json({
    success: true,
    orderId: "SHK-" + Math.floor(100000 + Math.random() * 900000),
    message: "Thank you for your order at Shekhani LLC!"
  });
});

// Explicit Page Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

// Wildcard Route with Asset Extension Guard
app.get('*', (req, res) => {
  if (req.path.includes('.')) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Local dev server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Shekhani LLC B2B Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
