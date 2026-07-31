const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public folder (which contains src subfolder) statically
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback route
app.get('*', (req, res) => {
  if (req.path.includes('.')) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`💻 FRONTEND Web Server running on port ${PORT}`);
  console.log(`📍 Web App URL : http://localhost:${PORT}`);
  console.log(`==================================================`);
});

module.exports = app;
