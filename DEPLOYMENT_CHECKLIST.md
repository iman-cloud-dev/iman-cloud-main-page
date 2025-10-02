# ✅ Deployment Checklist - Iman Cloud Website

## 🎯 Schnellstart (5 Minuten)

### Schritt 1: GitHub Repository erstellen (2 Min)

```bash
cd /home/emre/dev/iman-cloud-main-page

# Mit GitHub CLI (empfohlen)
gh auth login
gh repo create iman-cloud-dev/iman-cloud-main-page \
  --public \
  --description "Moderne Firmenwebseite für Iman Cloud" \
  --source=. \
  --remote=origin \
  --push
```

**✅ Repository erstellt und Code gepusht**

---

### Schritt 2: GitHub Secrets konfigurieren (2 Min)

Gehe zu: `Settings → Secrets and variables → Actions → New repository secret`

| Secret Name | Wert | Wo finden? |
|-------------|------|------------|
| `SSH_PRIVATE_KEY` | SSH Private Key | `cat ~/.ssh/iman-cloud-deploy` |
| `CF_ACCESS_CLIENT_ID` | Cloudflare Client ID | Cloudflare Zero Trust → Access → Service Auth |
| `CF_ACCESS_CLIENT_SECRET` | Cloudflare Client Secret | Cloudflare Zero Trust → Access → Service Auth |
| `SERVER_USER` | SSH Username | z.B. `deploy` oder `www-data` |

**✅ Alle Secrets hinzugefügt**

---

### Schritt 3: GitHub Variables konfigurieren (1 Min)

Gehe zu: `Settings → Secrets and variables → Actions → Variables → New repository variable`

| Variable Name | Wert | Beispiel |
|---------------|------|----------|
| `UUID` | Deine Iman Cloud UUID | `9bd60c70-4265-44e4-ab0f-1ddb97b34e6c` |
| `PORT` | SSH Port (optional) | `22` |

**✅ Alle Variables hinzugefügt**

---

### Schritt 4: Deployment testen (1 Min)

```bash
# Trigger Deployment
git commit --allow-empty -m "test: Trigger initial deployment"
git push
```

Oder manuell:
1. Gehe zu: `Actions` Tab
2. Wähle "Build & Deploy (No Docker)"
3. Klicke "Run workflow"

**✅ Deployment erfolgreich**

---

### Schritt 5: Website prüfen

Öffne: `https://[UUID].iman-cloud.net/iman-cloud-main-page/`

**✅ Website ist live!**

---

## 📋 Vollständige Checkliste

### Vorbereitung

- [ ] Node.js 18+ installiert
- [ ] Git konfiguriert
- [ ] GitHub Account vorhanden
- [ ] SSH Key generiert
- [ ] Cloudflare Access konfiguriert

### Repository Setup

- [ ] GitHub Repository erstellt (`iman-cloud-dev/iman-cloud-main-page`)
- [ ] Repository ist Public
- [ ] Code gepusht (`git push -u origin main`)
- [ ] `.gitignore` vorhanden

### GitHub Secrets

- [ ] `SSH_PRIVATE_KEY` hinzugefügt
- [ ] `CF_ACCESS_CLIENT_ID` hinzugefügt
- [ ] `CF_ACCESS_CLIENT_SECRET` hinzugefügt
- [ ] `SERVER_USER` hinzugefügt

### GitHub Variables

- [ ] `UUID` hinzugefügt
- [ ] `PORT` hinzugefügt (optional)

### Workflow

- [ ] `.github/workflows/deploy.yml` vorhanden
- [ ] Workflow-Syntax korrekt
- [ ] Workflow läuft ohne Fehler
- [ ] Build-Artefakt wird erstellt
- [ ] Deployment auf Server erfolgreich

### Website

- [ ] Website ist erreichbar
- [ ] Alle Seiten funktionieren (Home, Services, About, Contact, References)
- [ ] Navigation funktioniert
- [ ] Mobile Ansicht funktioniert
- [ ] Kontaktformular funktioniert
- [ ] Footer-Links funktionieren

### SEO & Performance

- [ ] Meta-Tags vorhanden (Title, Description)
- [ ] Open Graph Tags vorhanden
- [ ] Twitter Cards vorhanden
- [ ] robots.txt vorhanden
- [ ] sitemap.xml vorhanden
- [ ] Favicon vorhanden
- [ ] Fonts laden korrekt
- [ ] Build-Größe optimiert (<100KB gzipped)

### Content

- [ ] Firmenname korrekt (Iman Cloud)
- [ ] Kontaktdaten aktualisiert
- [ ] Social Media Links aktualisiert
- [ ] Team-Informationen korrekt
- [ ] Service-Beschreibungen vollständig
- [ ] Impressum ausgefüllt
- [ ] Datenschutz ausgefüllt

### Optional

- [ ] Custom Domain konfiguriert
- [ ] Analytics eingerichtet (Google Analytics)
- [ ] Contact Form Backend integriert
- [ ] Team-Fotos hochgeladen
- [ ] Referenz-Projekte hinzugefügt
- [ ] Blog-Sektion hinzugefügt

---

## 🚀 Deployment-Workflow

### Automatisches Deployment

Jeder Push auf `main` triggert automatisch:

```bash
git add .
git commit -m "feat: Neue Funktion"
git push
```

→ GitHub Actions baut und deployed automatisch!

### Manuelles Deployment

```bash
# Mit deploy.sh Script
./deploy.sh

# Oder manuell
npm run build
# Dann manuell auf Server kopieren
```

---

## 🔍 Monitoring

### Deployment-Status prüfen

```bash
# Mit GitHub CLI
gh run list --repo iman-cloud-dev/iman-cloud-main-page

# Im Browser
# https://github.com/iman-cloud-dev/iman-cloud-main-page/actions
```

### Logs ansehen

```bash
# Letzten Run ansehen
gh run view --repo iman-cloud-dev/iman-cloud-main-page --log

# Im Browser: Actions → Workflow Run → Job → Logs
```

---

## 🆘 Troubleshooting

### Problem: Workflow schlägt fehl

**Lösung:**
1. Prüfe Logs in GitHub Actions
2. Prüfe Secrets und Variables
3. Prüfe SSH Key Format
4. Prüfe Cloudflare Access Credentials

### Problem: Website zeigt 404

**Lösung:**
1. Prüfe `base` in `vite.config.js`
2. Prüfe Deployment-Pfad auf Server
3. Prüfe Nginx/Apache Konfiguration

### Problem: Build schlägt fehl

**Lösung:**
```bash
# Lokal testen
npm run build

# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Dokumentation

- **[README.md](README.md)** - Projekt-Übersicht
- **[QUICK_START.md](QUICK_START.md)** - 5-Minuten-Anleitung
- **[DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md)** - Detaillierte Deployment-Anleitung
- **[SETUP.md](SETUP.md)** - Entwicklungs-Setup
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution Guidelines
- **[FINAL_SUMMARY.md](FINAL_SUMMARY.md)** - Projekt-Zusammenfassung

---

## 🎊 Fertig!

Wenn alle Checkboxen ✅ sind, ist deine Website live!

**Website-URL:**
```
https://[UUID].iman-cloud.net/iman-cloud-main-page/
```

**Nächste Schritte:**
1. Content aktualisieren (Team-Fotos, Kontaktdaten)
2. Impressum & Datenschutz vervollständigen
3. Referenz-Projekte hinzufügen
4. Social Media teilen
5. SEO optimieren
6. Analytics einrichten

---

**Viel Erfolg mit Iman Cloud! 🌟**

Bei Fragen: info@iman-cloud.net