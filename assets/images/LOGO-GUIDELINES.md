# NR Ingenieur Systems – Logo Usage Guidelines

## Concept: Circuit Monogram

Das finale Logo für **NR Ingenieur Systems** kombiniert technische Präzision mit moderner Ästhetik. Das Design basiert auf PCB-Leiterbahnen (Printed Circuit Board), die die Buchstaben "NR" formen – eine direkte visuelle Referenz zur Elektrotechnik und Leiterplattendesign.

---

## Design-Elemente

### Icon
- **PCB-inspiriertes Quadrat** mit abgerundeten Ecken (18px Radius)
- **Leiterbahnen-Geometrie** bildet "N" und "R"
- **Circuit Nodes** (Verbindungspunkte) an strategischen Positionen
- **Doppelter Rahmen** für technische Präzision

### Wordmark
- **Primär:** "NR INGENIEUR" in Outfit (800 weight)
- **Sekundär:** "SYSTEMS" in Plus Jakarta Sans (500 weight)
- Negative letter-spacing für moderne, kompakte Typografie

### Farbschema
- **Primary Orange:** `#f97316`
- **Light Orange:** `#fb923c` 
- **Background Dark:** `#050505`
- **Background Light:** `#fafafa`
- **Text Light:** `#f8fafc`
- **Text Dark:** `#0f172a`
- **Secondary Text:** `#94a3b8` (dunkel) / `#64748b` (hell)

---

## Verfügbare Dateien

### SVG (Vektor – für Web & Print)
```
exports/logo-full-dark.svg       → Vollständiges Logo auf dunklem Hintergrund
exports/logo-full-light.svg      → Vollständiges Logo auf hellem Hintergrund
exports/icon-dark.svg            → Icon auf dunklem Hintergrund
exports/icon-light.svg           → Icon auf hellem Hintergrund
exports/icon-transparent.svg     → Icon mit transparentem Hintergrund
```

### PNG Favicons (Raster – für Browser & Apps)
```
exports/favicon-16x16.png        → Browser-Tab (Minimum)
exports/favicon-32x32.png        → Browser-Tab (Standard)
exports/favicon-64x64.png        → Bookmarks, Browser UI
exports/favicon-128x128.png      → App Icons, High-DPI
exports/favicon-256x256.png      → Social Media Avatars
exports/favicon.png              → Allgemein (32x32)
```

---

## Verwendungsrichtlinien

### Wann das vollständige Logo nutzen?
- **Website Header/Navigation**
- **E-Mail-Signaturen**
- **Briefköpfe & Dokumente**
- **Präsentationen**
- Überall wo ausreichend Platz horizontal vorhanden ist (min. 300px Breite)

### Wann das Icon nutzen?
- **Favicons** (Browser-Tabs)
- **Social Media Profilbilder** (LinkedIn, YouTube, etc.)
- **App Icons**
- **Wasserzeichen**
- Quadratische oder sehr kompakte Layouts

### Dark vs. Light
- **Dark Version** (`-dark.svg`): Verwenden auf dunklen Hintergründen (#050505 oder ähnlich)
- **Light Version** (`-light.svg`): Verwenden auf hellen Hintergründen (#fafafa, weiß, etc.)
- **Transparent Version** (`-transparent.svg`): Nur wenn der Hintergrund bereits im Design vorhanden ist

### Mindestgrößen
- **Vollständiges Logo:** Mindestens 200px Breite
- **Icon allein:** Mindestens 32×32px (ideal: 64×64px oder größer)
- **Favicon:** 16×16px funktioniert, aber 32×32px empfohlen

---

## Technische Integration

### Website Favicon (HTML)
```html
<link rel="icon" type="image/png" sizes="32x32" href="/exports/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/exports/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/exports/favicon-256x256.png">
```

### Responsive Logo im Header
```html
<!-- Mobile: Icon only -->
<img src="/exports/icon-transparent.svg" alt="NR Ingenieur" class="logo-mobile">

<!-- Desktop: Full logo -->
<img src="/exports/logo-full-dark.svg" alt="NR Ingenieur Systems" class="logo-desktop">
```

### Social Media
- **LinkedIn/YouTube Avatar:** `favicon-256x256.png`
- **Open Graph Image:** Vollständiges Logo auf dunklem Hintergrund (1200×630px empfohlen)

---

## Don'ts (Bitte vermeiden)

❌ Logo nicht strecken oder verzerren
❌ Farbschema nicht ändern (Orange ist Markenidentität)
❌ Icon nicht unter 32×32px verwenden
❌ Keine zusätzlichen Effekte (Schatten, Glow, 3D) hinzufügen
❌ Schriftarten nicht austauschen
❌ Layout nicht neu arrangieren (Icon links, Text rechts)

---

## Design-Rationale

### Warum Circuit/PCB-Design?
Das Logo spiegelt direkt die Kernkompetenzen wider:
- **Leiterplatten-Design** (PCB Design)
- **Elektrotechnik** (Elektroniker/Entwicklungsingenieur)
- **Präzision** (Messtechnik, Laborautomatisierung)

### Warum "NR" statt vollem Namen?
- **Kompakt** für Favicon und kleine Anwendungen
- **Einprägsam** als Monogramm
- **Professionell** wie etablierte Engineering-Marken
- Voller Name bleibt in der Wordmark erhalten

### Warum Orange?
- Bestehende Website-Identität (#f97316)
- **Energie & Innovation** (im Gegensatz zu konservativem Blau)
- **Sichtbarkeit** und Wiedererkennungswert
- **Technisch aber warm** – zugänglich, nicht steril

---

## Nächste Schritte

1. ✅ SVG-Dateien in Website integrieren
2. ✅ Favicons hochladen und in HTML einbinden
3. ✅ Social Media Profile aktualisieren (LinkedIn, YouTube)
4. 📄 Optional: Business Cards, Briefpapier mit neuem Logo gestalten
5. 📄 Optional: E-Mail-Signatur Template erstellen

---

**Kontakt:** Nicolas Rehr – NR Ingenieur Systems
**Website:** [Ihre Website URL]
**Design:** Claude × Nicolas Rehr (2026)