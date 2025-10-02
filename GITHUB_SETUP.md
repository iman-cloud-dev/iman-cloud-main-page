# GitHub Repository Setup

## 📦 Repository auf GitHub erstellen

### Option 1: Via GitHub Website

1. **Gehe zu GitHub:** https://github.com/new
2. **Repository Details:**
   - Owner: `iman-cloud-dev`
   - Repository name: `iman-cloud-main-page`
   - Description: `Moderne Firmenwebseite für Iman Cloud - IT-Dienstleistungen`
   - Visibility: Public (oder Private)
   - ❌ NICHT initialisieren mit README, .gitignore oder License (bereits vorhanden)

3. **Repository erstellen** (Create repository)

### Option 2: Via GitHub CLI

```bash
# GitHub CLI installieren (falls nicht vorhanden)
# https://cli.github.com/

# In GitHub einloggen
gh auth login

# Repository erstellen
gh repo create iman-cloud-dev/iman-cloud-main-page \
  --public \
  --description "Moderne Firmenwebseite für Iman Cloud - IT-Dienstleistungen" \
  --source=. \
  --remote=origin \
  --push
```

## 🔗 Lokales Repository mit GitHub verbinden

### Wenn Repository bereits auf GitHub existiert:

```bash
# Remote hinzufügen
git remote add origin https://github.com/iman-cloud-dev/iman-cloud-main-page.git

# Oder mit SSH
git remote add origin git@github.com:iman-cloud-dev/iman-cloud-main-page.git

# Push zum Repository
git push -u origin main
```

### Wenn du GitHub CLI verwendet hast:

Das Repository ist bereits verbunden und gepusht! ✅

## 🚀 GitHub Pages aktivieren

### Automatisches Deployment via GitHub Actions

1. **Gehe zu Repository Settings**
   - `https://github.com/iman-cloud-dev/iman-cloud-main-page/settings`

2. **Pages konfigurieren**
   - Linke Sidebar: Pages
   - Source: **GitHub Actions**
   - Save

3. **Workflow läuft automatisch**
   - Bei jedem Push auf `main` Branch
   - Build & Deploy erfolgt automatisch
   - Website verfügbar unter: `https://iman-cloud-dev.github.io/iman-cloud-main-page/`

### Vite Base Path anpassen

**WICHTIG:** Für GitHub Pages muss der Base Path gesetzt werden:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/iman-cloud-main-page/', // <-- Hinzufügen
  server: {
    port: 3000,
    open: true
  }
})
```

Dann committen und pushen:

```bash
git add vite.config.js
git commit -m "fix: Add base path for GitHub Pages"
git push
```

## 🔐 Repository Secrets (optional)

Für erweiterte Deployments können Secrets gesetzt werden:

1. **Settings → Secrets and variables → Actions**
2. **New repository secret**

Beispiele:
- `NETLIFY_AUTH_TOKEN`
- `VERCEL_TOKEN`
- `FTP_PASSWORD`

## 👥 Team-Zugriff einrichten

### Collaborators hinzufügen:

1. **Settings → Collaborators**
2. **Add people**
3. GitHub-Benutzernamen eingeben:
   - Emre
   - Albin
   - Erin

### Oder Organisation verwenden:

1. **Organisation erstellen:** `iman-cloud-dev`
2. **Team erstellen:** `developers`
3. **Mitglieder hinzufügen**
4. **Repository zur Organisation übertragen**

## 🏷️ Repository Topics

Füge Topics hinzu für bessere Auffindbarkeit:

**Settings → General → Topics:**
- `react`
- `tailwindcss`
- `vite`
- `website`
- `cloud-services`
- `it-services`
- `company-website`

## 📋 Branch Protection (empfohlen)

Schütze den `main` Branch:

1. **Settings → Branches**
2. **Add branch protection rule**
3. **Branch name pattern:** `main`
4. **Aktiviere:**
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

## 🔄 Workflow Status Badge

Füge Badge zum README hinzu:

```markdown
[![Deploy](https://github.com/iman-cloud-dev/iman-cloud-main-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/iman-cloud-dev/iman-cloud-main-page/actions/workflows/deploy.yml)
```

## 📊 GitHub Insights aktivieren

**Settings → General:**
- ✅ Issues
- ✅ Projects
- ✅ Discussions (optional)
- ✅ Wiki (optional)

## 🌐 Custom Domain (optional)

Für eigene Domain (z.B. www.iman-cloud.net):

1. **DNS konfigurieren:**
   ```
   CNAME www.iman-cloud.net → iman-cloud-dev.github.io
   ```

2. **GitHub Pages Settings:**
   - Custom domain: `www.iman-cloud.net`
   - ✅ Enforce HTTPS

3. **CNAME Datei erstellen:**
   ```bash
   echo "www.iman-cloud.net" > public/CNAME
   git add public/CNAME
   git commit -m "feat: Add custom domain"
   git push
   ```

## ✅ Checkliste

Nach Setup prüfen:

- [ ] Repository auf GitHub erstellt
- [ ] Lokales Repo mit GitHub verbunden
- [ ] Initial Push erfolgreich
- [ ] GitHub Actions Workflow läuft
- [ ] GitHub Pages aktiviert
- [ ] Website ist erreichbar
- [ ] Team-Zugriff konfiguriert
- [ ] Branch Protection aktiviert (optional)
- [ ] Custom Domain konfiguriert (optional)

## 🆘 Troubleshooting

### Push wird abgelehnt

```bash
# Force push (nur beim ersten Mal!)
git push -u origin main --force
```

### GitHub Actions schlägt fehl

1. **Actions Tab** im Repository öffnen
2. **Fehlgeschlagenen Workflow** anklicken
3. **Logs** prüfen
4. **Häufige Probleme:**
   - Pages nicht aktiviert
   - Permissions fehlen
   - Build-Fehler

### Website zeigt 404

1. **Base Path** in `vite.config.js` prüfen
2. **GitHub Pages Source** auf "GitHub Actions" setzen
3. **Workflow** erneut ausführen

## 📞 Support

Bei Problemen:
- GitHub Docs: https://docs.github.com
- Team kontaktieren: info@iman-cloud.net