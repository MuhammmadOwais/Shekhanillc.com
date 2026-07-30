# Hostinger Node.js E-Commerce Store (Dummy Setup)

Yeh simple aur stylish Node.js + Express dummy E-Commerce store hai jo Hostinger ki **Node.js Web App Hosting** par easily deploy ho jayegi.

---

## 📁 Project Structure

```text
├── public/
│   ├── index.html       # Storefront UI
│   ├── style.css        # Modern Styling (Dark Theme & Responsive)
│   └── app.js           # Cart & API interaction logic
├── server.js            # Express Node.js Server & APIs
├── package.json         # Project configuration & start script
└── README.md
```

---

## 🚀 Hostinger Deploy Steps (Kaise Upload Karen)

1. **Zip File Banayein:**
   - Apni local folder me tamam files (`server.js`, `package.json`, `public/` folder) ko select karein aur ZIP file banayein (`store.zip`).
   - *Note: `node_modules` folder zip me shayad include nah karen taakay size chota rahe.*

2. **Hostinger Panel Setup:**
   - Hostinger hPanel par login karein.
   - **Websites** -> **Web Apps** / **Node.js** Section me jayein.
   - **Create Application** par click karein.
   - Set parameters:
     - **Node.js version:** `18.x` ya `20.x`
     - **Application Root:** `/` (ya apka folder path)
     - **Application Startup File:** `server.js`

3. **Upload & Install Dependencies:**
   - Hostinger File Manager se apny `store.zip` ko upload karky Extract karein.
   - Hostinger Node.js panel me **Run Npm Install** button par click karein taakay `express` aur `cors` install ho jayein.
   - App ko **Start / Restart** karein.

---

## 💻 Local Run (Testing ke liye)

```bash
npm install
npm start
```
Browser me `http://localhost:3000` open karein.
