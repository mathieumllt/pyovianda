# PYOV — Dark Art Gallery

**New Gothic · Pop Dark · Phonk · Minimal**

Site one-page de lancement pour le vernissage de l'artiste PYOV.

## Stack
- HTML5 / CSS3 pur — zéro framework
- jQuery 3.7 (CDN)
- Image intégrée en base64 (site autonome, aucune dépendance externe sauf fonts Google)

## Contenu
- Hero plein écran avec œuvre principale **Chaos Theory №001**
- Bande vernissage + compte à rebours live
- Section artiste + stats
- Formulaire d'inscription avant-première
- Marquees animés, scroll reveal, responsive mobile

## Deploy Railway

```bash
# 1. Clone / init le repo
git init
git add .
git commit -m "init PYOV"

# 2. Push GitHub
git remote add origin https://github.com/TON-USER/pyov-gallery.git
git branch -M main
git push -u origin main

# 3. Railway → New Project → Deploy from GitHub repo
# Railway détecte package.json → npm start → serve .
# URL auto : quelquechose.up.railway.app
```

## Mise à jour

```bash
git add .
git commit -m "update"
git push
# Railway redéploie automatiquement ✅
```

## Personnaliser

- **Date vernissage** : modifier la ligne `target.setDate(target.getDate() + 30)` dans le JS
- **Prix** : chercher `840 €` dans index.html
- **Textes** : directement dans index.html
- **Image** : remplacer l'image JPEG et relancer le build Python si nécessaire
