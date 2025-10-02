# 📁 Projekt-Struktur

## Übersicht

```
iman-cloud-main-page/
│
├── 📄 Konfigurationsdateien
│   ├── package.json              # Dependencies & Scripts
│   ├── package-lock.json         # Dependency Lock
│   ├── vite.config.js            # Vite Build-Konfiguration
│   ├── tailwind.config.js        # TailwindCSS Theme (Farben, Fonts)
│   ├── postcss.config.js         # PostCSS Konfiguration
│   ├── .eslintrc.cjs             # ESLint Code-Qualität
│   ├── .gitignore                # Git Ignore Rules
│   └── .env.example              # Environment Variables Template
│
├── 📚 Dokumentation
│   ├── README.md                 # Haupt-Dokumentation & Quick Start
│   ├── SETUP.md                  # Detaillierte Setup-Anleitung
│   ├── CONTRIBUTING.md           # Contribution Guidelines
│   ├── DEPLOYMENT.md             # Deployment-Anleitung
│   ├── GITHUB_SETUP.md           # GitHub Repository Setup
│   ├── PROJECT_OVERVIEW.md       # Umfassende Projekt-Übersicht
│   ├── PROJECT_STRUCTURE.md      # Diese Datei
│   └── FINAL_SUMMARY.md          # Projekt-Zusammenfassung
│
├── 🚀 CI/CD
│   └── .github/
│       └── workflows/
│           └── deploy.yml        # GitHub Actions Deployment
│
├── 🌐 Public Assets
│   └── public/
│       └── cloud-icon.svg        # Favicon & Logo Icon
│
├── 💻 Source Code
│   └── src/
│       │
│       ├── 📄 Entry Points
│       │   ├── main.jsx          # React Entry Point
│       │   ├── App.jsx           # Main App Component (Routing)
│       │   └── index.css         # Global Styles & Tailwind
│       │
│       ├── 🧩 Components
│       │   ├── Navbar.jsx        # Navigation (Responsive, Burger-Menü)
│       │   ├── Footer.jsx        # Footer (Links, Social Media)
│       │   └── ScrollToTop.jsx   # Scroll-to-Top Helper
│       │
│       └── 📄 Pages
│           ├── Home.jsx          # Startseite
│           ├── Services.jsx      # Services (Business & Private)
│           ├── About.jsx         # Über uns (Team, Werte)
│           ├── Contact.jsx       # Kontakt (Formular, Infos)
│           ├── References.jsx    # Referenzen (Platzhalter)
│           ├── Impressum.jsx     # Impressum
│           └── Datenschutz.jsx   # Datenschutzerklärung
│
└── 📦 Build Output (generiert)
    └── dist/                     # Production Build (nach npm run build)
        ├── index.html
        ├── assets/
        │   ├── index-[hash].css
        │   └── index-[hash].js
        └── cloud-icon.svg
```

## 📊 Datei-Statistiken

### Gesamt
- **32 Dateien** (ohne node_modules, dist, .git)
- **~2,300 Zeilen Code**
- **Build Size:** 218 KB (65 KB gzipped)

### Aufschlüsselung

| Kategorie | Anzahl | Dateien |
|-----------|--------|---------|
| **Dokumentation** | 8 | README, SETUP, CONTRIBUTING, etc. |
| **Konfiguration** | 8 | package.json, vite.config.js, etc. |
| **React Pages** | 7 | Home, Services, About, Contact, etc. |
| **Components** | 3 | Navbar, Footer, ScrollToTop |
| **Styles** | 1 | index.css |
| **Assets** | 1 | cloud-icon.svg |
| **CI/CD** | 1 | deploy.yml |

## 🎨 Design-System Dateien

### Tailwind Konfiguration (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    DEFAULT: '#3B82F6',  // Cloud Blue
    light: '#0EA5E9',    // Sky Blue
    dark: '#1E40AF',     // Deep Blue
    cyan: '#06B6D4',     // Ocean Cyan
  },
  secondary: {
    DEFAULT: '#F97316',  // Energy Orange
  },
  // ... weitere Farben
}

fontFamily: {
  heading: ['Space Grotesk', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

### Global Styles (`src/index.css`)
- Tailwind Base, Components, Utilities
- Custom Button Classes (btn-primary, btn-secondary, btn-outline)
- Custom Card Class
- Custom Container & Section Padding
- Custom Scrollbar Styling

## 🧩 Komponenten-Hierarchie

```
App.jsx (Router)
│
├── Navbar
│   ├── Logo (Cloud Icon + Text)
│   ├── Desktop Navigation
│   └── Mobile Burger Menu
│
├── Routes
│   ├── Home
│   │   ├── Hero Section
│   │   ├── Vision Section
│   │   ├── USP Section
│   │   ├── Services Overview
│   │   └── CTA Section
│   │
│   ├── Services
│   │   ├── Hero
│   │   ├── Business Services (6 Cards)
│   │   ├── Private Services (4 Cards)
│   │   └── CTA
│   │
│   ├── About
│   │   ├── Hero
│   │   ├── Story
│   │   ├── Team (3 Members)
│   │   ├── Values (4 Cards)
│   │   ├── Working Method (4 Steps)
│   │   └── CTA
│   │
│   ├── Contact
│   │   ├── Hero
│   │   ├── Contact Form
│   │   ├── Contact Info
│   │   ├── Social Links
│   │   └── FAQ
│   │
│   ├── References (Platzhalter)
│   ├── Impressum
│   └── Datenschutz
│
├── Footer
│   ├── Company Info
│   ├── Quick Links
│   ├── Contact Info
│   └── Bottom Bar (Copyright, Legal)
│
└── ScrollToTop (Helper)
```

## 📦 Dependencies

### Production
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.0",
  "lucide-react": "^0.344.0"
}
```

### Development
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.4.18",
  "postcss": "^8.4.35",
  "eslint": "^8.56.0",
  "vite": "^5.1.4"
}
```

## 🚀 Build-Prozess

### Development
```bash
npm run dev
→ Vite Dev Server (Port 3000)
→ Hot Module Replacement
→ Fast Refresh
```

### Production
```bash
npm run build
→ Vite Build
→ Tailwind Purge (unused CSS)
→ Minification
→ Code Splitting
→ Asset Optimization
→ Output: dist/
```

### Deployment
```bash
git push origin main
→ GitHub Actions Trigger
→ npm install
→ npm run build
→ Deploy to GitHub Pages
→ Live: https://iman-cloud-dev.github.io/iman-cloud-main-page/
```

## 📝 Wichtige Dateien im Detail

### `src/App.jsx`
- Router-Konfiguration
- Route-Definitionen
- Layout-Struktur (Navbar, Main, Footer)

### `src/index.css`
- Tailwind Imports
- Custom Component Classes
- Global Styles
- Animations

### `tailwind.config.js`
- Theme Extension
- Custom Colors (aus Concept Board)
- Custom Fonts
- Custom Animations
- Breakpoints

### `vite.config.js`
- React Plugin
- Server-Konfiguration
- Build-Optimierung
- Base Path (für GitHub Pages)

### `.github/workflows/deploy.yml`
- CI/CD Pipeline
- Build & Deploy Steps
- GitHub Pages Deployment

## 🔄 Workflow

### Entwicklung
1. `npm run dev` - Server starten
2. Code ändern - Auto-Reload
3. `npm run lint` - Code-Qualität prüfen
4. `npm run build` - Build testen

### Deployment
1. `git add .` - Änderungen stagen
2. `git commit -m "..."` - Committen
3. `git push` - Pushen
4. GitHub Actions deployed automatisch

### Neue Seite hinzufügen
1. `src/pages/NewPage.jsx` erstellen
2. Route in `src/App.jsx` hinzufügen
3. Link in `src/components/Navbar.jsx` hinzufügen

## 📊 Code-Metriken

### Komponenten-Größe
- **Navbar:** ~100 Zeilen
- **Footer:** ~120 Zeilen
- **Home:** ~200 Zeilen
- **Services:** ~180 Zeilen
- **About:** ~220 Zeilen
- **Contact:** ~250 Zeilen

### Styling
- **Tailwind Classes:** ~90% der Styles
- **Custom CSS:** ~10% (Buttons, Cards, Animations)

### Performance
- **Initial Load:** < 100 KB (gzipped)
- **Route Chunks:** Lazy Loading vorbereitet
- **Images:** Optimiert (SVG Icons)

## 🎯 Best Practices

✅ **Code-Organisation**
- Klare Ordnerstruktur
- Komponenten-basiert
- Wiederverwendbare Utilities

✅ **Styling**
- Tailwind Utility-First
- Custom Classes für Wiederverwendung
- Responsive Design (Mobile-First)

✅ **Performance**
- Code Splitting
- Asset Optimization
- Lazy Loading (vorbereitet)

✅ **Dokumentation**
- Umfassende Guides
- Code-Kommentare
- README für jeden Bereich

---

**Letzte Aktualisierung:** 2024  
**Version:** 1.0.0