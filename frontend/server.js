const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public folder statically
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'public', 'src')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback route for SPA navigation
app.get('*', (req, res) => {
  if (req.path.includes('.')) {
    const filePath = path.join(__dirname, 'public', req.path);
    return res.sendFile(filePath, (err) => {
      if (err) res.status(404).send('Asset not found');
    });
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
