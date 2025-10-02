# Setup Guide - Iman Cloud Website

## 🚀 Schnellstart

### 1. Repository klonen

```bash
git clone https://github.com/iman-cloud-dev/iman-cloud-main-page.git
cd iman-cloud-main-page
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Development Server starten

```bash
npm run dev
```

Die Website ist nun unter `http://localhost:3000` erreichbar.

## 📋 Verfügbare Scripts

- `npm run dev` - Startet den Development Server
- `npm run build` - Erstellt Production Build
- `npm run preview` - Vorschau des Production Builds
- `npm run lint` - Führt ESLint aus

## 🎨 Design System

### Farben (aus Concept Board)

**Primärfarben:**
- Cloud Blue: `#3B82F6` (primary)
- Ocean Cyan: `#06B6D4` (primary-cyan)
- Deep Blue: `#1E40AF` (primary-dark)
- Sky Blue: `#0EA5E9` (primary-light)

**Sekundärfarben:**
- Energy Orange: `#F97316` (secondary)

**Neutrale Farben:**
- Pure White: `#FFFFFF`
- Light Gray: `#F8FAFC`
- Medium Gray: `#64748B`
- Dark Gray: `#1E293B`

### Typografie

**Schriftarten:**
- Headlines: Space Grotesk (font-heading)
- Body: Inter (font-body)

**Verwendung:**
```jsx
<h1 className="font-heading">Headline</h1>
<p className="font-body">Body Text</p>
```

### Komponenten

**Buttons:**
```jsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>
```

**Cards:**
```jsx
<div className="card">
  {/* Card Content */}
</div>
```

**Container:**
```jsx
<div className="container-custom">
  {/* Content */}
</div>
```

**Section Padding:**
```jsx
<section className="section-padding">
  {/* Section Content */}
</section>
```

## 📁 Projektstruktur

```
iman-cloud-main-page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Deployment
├── public/
│   └── cloud-icon.svg          # Favicon & Logo Icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation
│   │   ├── Footer.jsx          # Footer
│   │   └── ScrollToTop.jsx     # Scroll-to-Top Helper
│   ├── pages/
│   │   ├── Home.jsx            # Startseite
│   │   ├── Services.jsx        # Services-Seite
│   │   ├── About.jsx           # Über uns
│   │   ├── Contact.jsx         # Kontakt
│   │   ├── References.jsx      # Referenzen (Platzhalter)
│   │   ├── Impressum.jsx       # Impressum
│   │   └── Datenschutz.jsx     # Datenschutz
│   ├── App.jsx                 # Main App Component
│   ├── main.jsx                # Entry Point
│   └── index.css               # Global Styles
├── .env.example                # Environment Variables Template
├── .eslintrc.cjs               # ESLint Config
├── .gitignore                  # Git Ignore
├── index.html                  # HTML Template
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS Config
├── tailwind.config.js          # Tailwind Config
├── vite.config.js              # Vite Config
├── CONTRIBUTING.md             # Contribution Guide
├── DEPLOYMENT.md               # Deployment Guide
├── README.md                   # Project README
└── SETUP.md                    # This file
```

## 🔧 Konfiguration

### Umgebungsvariablen

Kopiere `.env.example` zu `.env` und passe die Werte an:

```bash
cp .env.example .env
```

### Vite Base Path (für GitHub Pages)

Wenn du auf GitHub Pages deployen möchtest, passe `vite.config.js` an:

```js
export default defineConfig({
  base: '/iman-cloud-main-page/',
  // ...
})
```

## 🌐 Deployment

### GitHub Pages

1. Push zu GitHub Repository
2. GitHub Actions deployed automatisch
3. Website verfügbar unter: `https://iman-cloud-dev.github.io/iman-cloud-main-page/`

Siehe [DEPLOYMENT.md](DEPLOYMENT.md) für Details.

### Andere Plattformen

- **Netlify:** Einfach Repository verbinden
- **Vercel:** Einfach Repository verbinden
- **Eigener Server:** `npm run build` und `dist/` hochladen

## 📝 Seiten hinzufügen

1. Neue Komponente in `src/pages/` erstellen
2. Route in `src/App.jsx` hinzufügen
3. Navigation in `src/components/Navbar.jsx` aktualisieren

Beispiel siehe [CONTRIBUTING.md](CONTRIBUTING.md)

## 🐛 Troubleshooting

### Port bereits belegt

```bash
# Anderen Port verwenden
npm run dev -- --port 3001
```

### Build-Fehler

```bash
# Cache löschen
rm -rf node_modules
rm package-lock.json
npm install
```

### Styling funktioniert nicht

```bash
# Tailwind neu kompilieren
npm run build
```

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues: https://github.com/iman-cloud-dev/iman-cloud-main-page/issues
- E-Mail: info@iman-cloud.net

## 📄 Lizenz

© 2024 Iman Cloud. Alle Rechte vorbehalten.