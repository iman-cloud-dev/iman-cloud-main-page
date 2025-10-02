# Iman Cloud - Firmenwebseite

[![Deploy](https://github.com/iman-cloud-dev/iman-cloud-main-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/iman-cloud-dev/iman-cloud-main-page/actions/workflows/deploy.yml)

Moderne, mehrseitige Firmenwebseite für Iman Cloud - IT-Dienstleistungen.

🌐 **Live-Demo:** https://[UUID].iman-cloud.net/iman-cloud-main-page/

> **Hinweis:** Ersetze `[UUID]` mit deiner Iman Cloud UUID nach dem Deployment.

## 🚀 Quick Start

```bash
# Repository klonen
git clone https://github.com/iman-cloud-dev/iman-cloud-main-page.git
cd iman-cloud-main-page

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist nun unter `http://localhost:3000` erreichbar.

## 🎨 Design

Basierend auf dem [Iman Cloud Concept Board](https://9bd60c70-4265-44e4-ab0f-1ddb97b34e6c.iman-cloud.net/):

### Farben
- **Primärfarben:** Cloud Blue (#3B82F6), Ocean Cyan (#06B6D4), Deep Blue (#1E40AF)
- **Akzentfarbe:** Energy Orange (#F97316)
- **Neutrale Farben:** Pure White (#FFFFFF), Light Gray (#F8FAFC), Dark Gray (#1E293B)

### Typografie
- **Headlines:** Space Grotesk (Bold, Semibold)
- **Body:** Inter (Regular, Medium)

### Design-Prinzipien
✅ Modern & Clean | ✅ Professionell aber nahbar | ✅ Cloud-First Ästhetik | ✅ Startup-Energie

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** TailwindCSS 3
- **Routing:** React Router 6
- **Icons:** Lucide React
- **Deployment:** GitHub Actions → Iman Cloud Server (via SSH/rsync)

## 📄 Seiten

| Seite | Route | Beschreibung |
|-------|-------|--------------|
| **Home** | `/` | Firmenvision, USP, Services-Überblick |
| **Services** | `/services` | Business & Private Services im Detail |
| **Über uns** | `/about` | Gründerteam, Kompetenzen, Werte |
| **Kontakt** | `/contact` | Kontaktformular mit Validierung |
| **Referenzen** | `/references` | Projekt-Portfolio (Platzhalter) |
| **Impressum** | `/impressum` | Rechtliche Angaben |
| **Datenschutz** | `/datenschutz` | Datenschutzerklärung |

## 👥 Team

| Name | Rolle | Verantwortung |
|------|-------|---------------|
| **Emre** | Tech Lead | Technik & Entwicklung |
| **Albin** | Business Lead | Vertrieb & Kundenbetreuung |
| **Erin** | Project Lead | Projektmanagement & Infrastruktur |

## 📦 Verfügbare Scripts

```bash
npm run dev      # Development Server starten
npm run build    # Production Build erstellen
npm run preview  # Build-Vorschau
npm run lint     # Code-Qualität prüfen
```

## 🚀 Deployment

### GitHub Pages (Automatisch)
- Push zu `main` Branch triggert automatisches Deployment
- Website verfügbar unter: https://iman-cloud-dev.github.io/iman-cloud-main-page/

### Andere Plattformen
- **Netlify:** Repository verbinden, automatisches Deployment
- **Vercel:** Repository verbinden, automatisches Deployment
- **Eigener Server:** `npm run build` → `dist/` Ordner hochladen

Siehe [DEPLOYMENT.md](DEPLOYMENT.md) für Details.

## 📚 Dokumentation

- **[SETUP.md](SETUP.md)** - Detaillierte Setup-Anleitung
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution Guidelines
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment-Anleitung
- **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - GitHub Repository Setup
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Projekt-Übersicht

## 🎯 Features

### ✅ Implementiert
- [x] Responsive Design (Mobile, Tablet, Desktop)
- [x] Smooth Scrolling & Animationen
- [x] Kontaktformular mit Validierung
- [x] SEO-optimiert
- [x] Sticky Navigation mit Burger-Menü
- [x] Custom Scrollbar
- [x] Social Media Integration
- [x] CI/CD mit GitHub Actions

### 🔄 Geplant
- [ ] Blog-Sektion
- [ ] Echte Referenz-Projekte
- [ ] Mehrsprachigkeit (DE/EN)
- [ ] Dark Mode
- [ ] Backend-Integration für Kontaktformular
- [ ] Analytics

## 📊 Performance

- **Bundle Size:** ~218 KB (65 KB gzipped)
- **Build Time:** ~3s
- **Lighthouse Score:** > 90 (Ziel)

## 🔧 Entwicklung

### Neue Seite hinzufügen

1. Komponente erstellen: `src/pages/NewPage.jsx`
2. Route hinzufügen: `src/App.jsx`
3. Navigation aktualisieren: `src/components/Navbar.jsx`

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Details.

### Styling

Verwende TailwindCSS Utility Classes und Custom Components:

```jsx
<button className="btn-primary">Primary Button</button>
<div className="card">Card Content</div>
<section className="section-padding">Section</section>
```

## 🐛 Troubleshooting

**Port bereits belegt?**
```bash
npm run dev -- --port 3001
```

**Build-Fehler?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

Siehe [SETUP.md](SETUP.md) für mehr Hilfe.

## 📞 Support

- **GitHub Issues:** https://github.com/iman-cloud-dev/iman-cloud-main-page/issues
- **E-Mail:** info@iman-cloud.net
- **Website:** https://iman-cloud.net

## 📄 Lizenz

© 2024 Iman Cloud. Alle Rechte vorbehalten.

---

**Made with ❤️ by the Iman Cloud Team**