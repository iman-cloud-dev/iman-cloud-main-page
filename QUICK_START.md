# 🚀 Quick Start Guide

## In 5 Minuten zur Live-Website!

### Schritt 1: GitHub Repository erstellen ⏱️ 2 Min

#### Option A: GitHub Website (Empfohlen für Anfänger)

1. **Öffne:** https://github.com/new
2. **Einstellungen:**
   - Owner: `iman-cloud-dev` (oder dein Username)
   - Repository name: `iman-cloud-main-page`
   - Description: `Moderne Firmenwebseite für Iman Cloud`
   - Visibility: **Public**
   - ❌ **NICHT** initialisieren mit README, .gitignore oder License
3. **Klicke:** "Create repository"

#### Option B: GitHub CLI (Schneller für Profis)

```bash
# Falls GitHub CLI nicht installiert: https://cli.github.com/
gh auth login
gh repo create iman-cloud-dev/iman-cloud-main-page \
  --public \
  --description "Moderne Firmenwebseite für Iman Cloud" \
  --source=. \
  --remote=origin \
  --push
```

✅ **Fertig mit Option B?** Springe zu Schritt 3!

---

### Schritt 2: Code zu GitHub pushen ⏱️ 1 Min

```bash
cd /home/emre/dev/iman-cloud-main-page

# Remote hinzufügen
git remote add origin https://github.com/iman-cloud-dev/iman-cloud-main-page.git

# Code pushen
git push -u origin main
```

✅ **Code ist auf GitHub!**

---

### Schritt 3: GitHub Pages aktivieren ⏱️ 1 Min

1. **Öffne:** https://github.com/iman-cloud-dev/iman-cloud-main-page/settings/pages
2. **Source:** Wähle "**GitHub Actions**"
3. **Klicke:** "Save"

✅ **GitHub Pages aktiviert!**

---

### Schritt 4: Base Path für GitHub Pages setzen ⏱️ 1 Min

```bash
cd /home/emre/dev/iman-cloud-main-page

# vite.config.js bearbeiten - füge base path hinzu
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/iman-cloud-main-page/',
  server: {
    port: 3000,
    open: true
  }
})
EOF

# Änderungen committen und pushen
git add vite.config.js
git commit -m "fix: Add base path for GitHub Pages"
git push
```

✅ **Base Path gesetzt!**

---

### Schritt 5: Website ist live! 🎉

**GitHub Actions läuft automatisch** (dauert ~1-2 Minuten)

1. **Prüfe Status:** https://github.com/iman-cloud-dev/iman-cloud-main-page/actions
2. **Warte auf grünen Haken** ✅
3. **Öffne deine Website:**

   🌐 **https://iman-cloud-dev.github.io/iman-cloud-main-page/**

---

## ✅ Checkliste

- [ ] GitHub Repository erstellt
- [ ] Code gepusht
- [ ] GitHub Pages aktiviert
- [ ] Base Path gesetzt
- [ ] GitHub Actions erfolgreich
- [ ] Website ist live!

---

## 🎯 Was jetzt?

### Lokal entwickeln

```bash
cd /home/emre/dev/iman-cloud-main-page
npm run dev
```

→ Öffne: http://localhost:3000

### Änderungen deployen

```bash
# Änderungen machen
git add .
git commit -m "feat: Deine Änderung"
git push
```

→ GitHub Actions deployed automatisch!

### Content aktualisieren

1. **Teamfotos:** Ersetze Gradient-Avatare in `src/pages/About.jsx`
2. **Kontaktdaten:** Aktualisiere in `src/pages/Contact.jsx` und `src/components/Footer.jsx`
3. **Impressum:** Vervollständige `src/pages/Impressum.jsx`
4. **Social Media:** Aktualisiere Links in `src/components/Footer.jsx`

---

## 🆘 Probleme?

### GitHub Actions schlägt fehl

**Prüfe:**
1. GitHub Pages ist auf "GitHub Actions" gesetzt
2. Base Path in `vite.config.js` ist korrekt
3. Logs in Actions Tab: https://github.com/iman-cloud-dev/iman-cloud-main-page/actions

### Website zeigt 404

**Lösung:**
```bash
# Base Path nochmal setzen
git add vite.config.js
git commit -m "fix: Update base path"
git push
```

### Build-Fehler lokal

```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Weitere Dokumentation

- **[README.md](README.md)** - Projekt-Übersicht
- **[SETUP.md](SETUP.md)** - Detaillierte Setup-Anleitung
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment-Optionen
- **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - GitHub Details
- **[FINAL_SUMMARY.md](FINAL_SUMMARY.md)** - Projekt-Zusammenfassung

---

## 🎊 Geschafft!

Deine Website ist jetzt live! 🚀

**Nächste Schritte:**
1. ✅ Website testen
2. ✅ Content aktualisieren
3. ✅ Team informieren
4. ✅ Social Media teilen

---

**Viel Erfolg mit Iman Cloud! 🌟**