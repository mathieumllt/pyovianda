# PYOV — Dark Art Gallery

**New Gothic · Pop Dark · Phonk · Minimal**

Boutique/galerie d'art en ligne pour l'artiste PYOV.

## Stack
- HTML5 / CSS3 pur
- jQuery 3.7 (CDN)
- Parallax JS maison
- Zéro framework — ultra léger

## Features
- Custom cursor animé
- Parallax hero + sections
- Galerie filtrée par catégorie (Gothic / Pop Dark / Phonk / Minimal)
- Lightbox au clic sur les œuvres
- Scroll reveal animations
- Marquee animé
- Design responsive
- Effet glitch sur le titre

## Structure
```
pyov/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── package.json
└── railway.json
```

## Deploy sur Railway

1. Push ce repo sur GitHub
2. Créer un nouveau projet Railway → "Deploy from GitHub repo"
3. Railway détecte automatiquement via `railway.json` → deploy instantané
4. Domaine custom : Settings → Custom Domain

## Dev local
```bash
npm install
npm start
# → http://localhost:3000
```
