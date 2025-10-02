# Contributing to Iman Cloud Website

## Entwicklungsumgebung einrichten

1. **Repository klonen**
   ```bash
   git clone https://github.com/iman-cloud-dev/iman-cloud-main-page.git
   cd iman-cloud-main-page
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Development Server starten**
   ```bash
   npm run dev
   ```

## Projektstruktur

```
iman-cloud-main-page/
├── public/              # Statische Assets
│   └── cloud-icon.svg
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/          # Seiten-Komponenten
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Haupt-App-Komponente
│   ├── main.jsx        # Entry Point
│   └── index.css       # Globale Styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Code-Standards

### React Komponenten
- Funktionale Komponenten mit Hooks
- Props destructuring
- Sinnvolle Komponentennamen

### Styling
- TailwindCSS Utility Classes
- Custom Classes in index.css für wiederverwendbare Styles
- Responsive Design (Mobile First)

### Git Workflow

1. **Branch erstellen**
   ```bash
   git checkout -b feature/neue-funktion
   ```

2. **Änderungen committen**
   ```bash
   git add .
   git commit -m "feat: Beschreibung der Änderung"
   ```

3. **Pull Request erstellen**
   - Beschreibung der Änderungen
   - Screenshots bei UI-Änderungen
   - Tests durchgeführt

## Commit Message Convention

- `feat:` Neue Features
- `fix:` Bugfixes
- `docs:` Dokumentation
- `style:` Styling-Änderungen
- `refactor:` Code-Refactoring
- `test:` Tests
- `chore:` Build/Config-Änderungen

## Neue Seite hinzufügen

1. **Komponente erstellen**
   ```jsx
   // src/pages/NewPage.jsx
   export default function NewPage() {
     return (
       <div className="pt-20">
         {/* Content */}
       </div>
     )
   }
   ```

2. **Route hinzufügen**
   ```jsx
   // src/App.jsx
   import NewPage from './pages/NewPage'
   
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Navigation aktualisieren**
   ```jsx
   // src/components/Navbar.jsx
   const navLinks = [
     // ...
     { name: 'New Page', path: '/new-page' },
   ]
   ```

## Testing

Vor dem Commit prüfen:
- [ ] Build läuft ohne Fehler: `npm run build`
- [ ] Keine ESLint Fehler: `npm run lint`
- [ ] Alle Links funktionieren
- [ ] Responsive auf Mobile/Tablet/Desktop
- [ ] Formulare validieren korrekt

## Fragen?

Bei Fragen oder Problemen:
- Issue auf GitHub erstellen
- Team kontaktieren: info@iman-cloud.net