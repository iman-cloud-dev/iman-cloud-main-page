# 🚀 Deployment Setup Guide

## GitHub Repository Setup

### 1. Repository erstellen

```bash
cd /home/emre/dev/iman-cloud-main-page

# Option A: Mit GitHub CLI (empfohlen)
gh auth login
gh repo create iman-cloud-dev/iman-cloud-main-page \
  --public \
  --description "Moderne Firmenwebseite für Iman Cloud" \
  --source=. \
  --remote=origin \
  --push

# Option B: Manuell
# 1. Gehe zu: https://github.com/new
# 2. Owner: iman-cloud-dev
# 3. Repository name: iman-cloud-main-page
# 4. Public
# 5. NICHT initialisieren mit README
# 6. Create repository

# Dann lokal:
git remote add origin https://github.com/iman-cloud-dev/iman-cloud-main-page.git
git push -u origin main
```

---

## 2. GitHub Secrets konfigurieren

Gehe zu: `https://github.com/iman-cloud-dev/iman-cloud-main-page/settings/secrets/actions`

### Secrets hinzufügen:

#### `SSH_PRIVATE_KEY`
- **Beschreibung:** SSH Private Key für Server-Zugriff
- **Wert:** Dein SSH Private Key (gesamter Inhalt der Datei)
- **Generierung:**
  ```bash
  # Falls noch kein Key existiert:
  ssh-keygen -t ed25519 -C "deploy@iman-cloud.net" -f ~/.ssh/iman-cloud-deploy
  
  # Public Key auf Server hinzufügen:
  ssh-copy-id -i ~/.ssh/iman-cloud-deploy.pub user@server
  
  # Private Key für GitHub Secret kopieren:
  cat ~/.ssh/iman-cloud-deploy
  ```

#### `CF_ACCESS_CLIENT_ID`
- **Beschreibung:** Cloudflare Access Client ID
- **Wert:** Deine Cloudflare Access Client ID
- **Wo finden:** Cloudflare Zero Trust Dashboard → Access → Service Auth

#### `CF_ACCESS_CLIENT_SECRET`
- **Beschreibung:** Cloudflare Access Client Secret
- **Wert:** Dein Cloudflare Access Client Secret
- **Wo finden:** Cloudflare Zero Trust Dashboard → Access → Service Auth

#### `SERVER_USER`
- **Beschreibung:** SSH Username für Server
- **Wert:** z.B. `deploy` oder `www-data`

---

## 3. GitHub Variables konfigurieren

Gehe zu: `https://github.com/iman-cloud-dev/iman-cloud-main-page/settings/variables/actions`

### Variables hinzufügen:

#### `UUID`
- **Beschreibung:** Deine Iman Cloud UUID
- **Wert:** z.B. `9bd60c70-4265-44e4-ab0f-1ddb97b34e6c`

#### `PORT`
- **Beschreibung:** SSH Port (optional)
- **Wert:** z.B. `22` (Standard)

---

## 4. Deployment testen

### Manueller Trigger:

1. Gehe zu: `https://github.com/iman-cloud-dev/iman-cloud-main-page/actions`
2. Wähle "Build & Deploy (No Docker)"
3. Klicke "Run workflow"
4. Wähle Branch: `main`
5. Klicke "Run workflow"

### Automatischer Trigger:

```bash
# Änderung machen
echo "# Test" >> README.md

# Committen und pushen
git add README.md
git commit -m "test: Trigger deployment"
git push

# Workflow läuft automatisch!
```

---

## 5. Deployment-URL

Nach erfolgreichem Deployment ist die Website erreichbar unter:

```
https://[UUID].iman-cloud.net/iman-cloud-main-page/
```

Beispiel:
```
https://9bd60c70-4265-44e4-ab0f-1ddb97b34e6c.iman-cloud.net/iman-cloud-main-page/
```

---

## 6. Troubleshooting

### Workflow schlägt fehl bei "Add SSH key"

**Problem:** SSH Key ist nicht korrekt formatiert

**Lösung:**
```bash
# Key nochmal kopieren (mit -----BEGIN/END----- Zeilen)
cat ~/.ssh/iman-cloud-deploy

# In GitHub Secret einfügen (gesamter Inhalt!)
```

### Workflow schlägt fehl bei "Install cloudflared"

**Problem:** Download-URL nicht erreichbar

**Lösung:** Workflow nochmal ausführen (temporäres Netzwerkproblem)

### Workflow schlägt fehl bei "Deploy via SSH/rsync"

**Problem:** Cloudflare Access Credentials falsch

**Lösung:**
1. Prüfe `CF_ACCESS_CLIENT_ID` und `CF_ACCESS_CLIENT_SECRET`
2. Erstelle neue Service Auth in Cloudflare Zero Trust
3. Aktualisiere Secrets in GitHub

### Build erfolgreich, aber Website zeigt 404

**Problem:** Base path in `vite.config.js` falsch

**Lösung:**
```js
// vite.config.js
export default defineConfig({
  base: '/iman-cloud-main-page/', // Muss mit Repository-Namen übereinstimmen
})
```

---

## 7. Custom Domain (Optional)

Falls du eine eigene Domain verwenden möchtest:

### Schritt 1: Base Path ändern

```js
// vite.config.js
export default defineConfig({
  base: '/', // Für Root-Domain
})
```

### Schritt 2: Server-Konfiguration

Passe den Deployment-Pfad im Workflow an:

```yaml
# .github/workflows/deploy.yml
- name: Deploy via SSH/rsync
  run: |
    rsync -avz --delete \
      dist/ $SERVER_USER@ssh.iman-cloud.net:/var/www/custom-domain/
```

### Schritt 3: DNS konfigurieren

Füge einen CNAME-Record hinzu:
```
www.iman-cloud.com → [UUID].iman-cloud.net
```

---

## 8. Monitoring

### Deployment-Status prüfen:

```bash
# Mit GitHub CLI
gh run list --repo iman-cloud-dev/iman-cloud-main-page

# Letzten Run ansehen
gh run view --repo iman-cloud-dev/iman-cloud-main-page
```

### Logs ansehen:

1. Gehe zu: `https://github.com/iman-cloud-dev/iman-cloud-main-page/actions`
2. Klicke auf den letzten Workflow-Run
3. Klicke auf "build" oder "deploy" Job
4. Sieh dir die Logs an

---

## 9. Rollback

Falls ein Deployment fehlschlägt:

```bash
# Zum vorherigen Commit zurück
git revert HEAD
git push

# Oder zu einem bestimmten Commit
git reset --hard <commit-hash>
git push --force
```

---

## ✅ Checkliste

- [ ] GitHub Repository erstellt
- [ ] Code gepusht
- [ ] SSH_PRIVATE_KEY Secret hinzugefügt
- [ ] CF_ACCESS_CLIENT_ID Secret hinzugefügt
- [ ] CF_ACCESS_CLIENT_SECRET Secret hinzugefügt
- [ ] SERVER_USER Secret hinzugefügt
- [ ] UUID Variable hinzugefügt
- [ ] PORT Variable hinzugefügt (optional)
- [ ] Workflow manuell getestet
- [ ] Website erreichbar

---

## 📞 Support

Bei Problemen:
- **GitHub Issues:** https://github.com/iman-cloud-dev/iman-cloud-main-page/issues
- **Email:** info@iman-cloud.net
- **Dokumentation:** Siehe README.md und andere Docs

---

**Viel Erfolg! 🚀**