# Deployment Guide

## GitHub Pages Deployment

### Voraussetzungen
- GitHub Repository: `iman-cloud-dev/iman-cloud-main-page`
- GitHub Actions aktiviert

### Automatisches Deployment

Das Projekt ist für automatisches Deployment via GitHub Actions konfiguriert.

#### Setup:

1. **Repository Settings**
   - Gehe zu: Settings → Pages
   - Source: GitHub Actions
   - Branch: main

2. **Vite Base Path konfigurieren**
   
   Füge in `vite.config.js` hinzu:
   ```js
   export default defineConfig({
     base: '/iman-cloud-main-page/',
     // ... rest of config
   })
   ```

3. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

4. **Deployment läuft automatisch**
   - GitHub Actions baut die App
   - Deployed zu: `https://iman-cloud-dev.github.io/iman-cloud-main-page/`

### Manuelles Deployment

#### Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Environment Variables:** Keine erforderlich

#### Vercel

1. **Framework Preset:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`

#### Eigener Server

```bash
# Build erstellen
npm run build

# dist/ Ordner auf Server hochladen
# Webserver auf dist/index.html zeigen lassen
```

### Domain-Konfiguration

Für Custom Domain (z.B. www.iman-cloud.net):

1. **GitHub Pages:**
   - Settings → Pages → Custom domain
   - DNS CNAME Record: `www.iman-cloud.net` → `iman-cloud-dev.github.io`

2. **Netlify/Vercel:**
   - Domain Settings im Dashboard
   - DNS Records wie angegeben konfigurieren

## Umgebungsvariablen

Für Produktions-Deployment können folgende Variablen gesetzt werden:

```env
VITE_API_URL=https://api.iman-cloud.net
VITE_CONTACT_EMAIL=info@iman-cloud.net
```

## Performance-Optimierung

- ✅ Code Splitting aktiviert
- ✅ Asset Optimization
- ✅ Lazy Loading für Routes
- ✅ Minification & Compression

## Monitoring

Nach Deployment prüfen:
- [ ] Alle Seiten laden korrekt
- [ ] Navigation funktioniert
- [ ] Formulare funktionieren
- [ ] Responsive Design auf allen Geräten
- [ ] Performance (Lighthouse Score > 90)