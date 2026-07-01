# GitHub Apps Hub - Cruscotto pubblico

Versione aggiornata con colori professionali bianco/grigio/oro, elenco applicazioni compatto e immagine profilo da link online.

## Modifiche principali
- Colori rossi sostituiti con palette professionale: bianco, grigio, oro.
- Applicazioni in formato elenco compatto.
- Ricerca e filtro categoria mantenuti.
- Immagine profilo gestibile da `script.js` tramite `PROFILE.imageUrl`.
- SEO e sezioni profilo/contatti mantenute.

## Dove modificare immagine profilo
Apri `script.js` e modifica:

```js
const PROFILE = {
  imageUrl: "https://link-alla-tua-immagine-online.jpg"
};
```

## Dove modificare le app
Sempre in `script.js`, modifica l'array `APPS`.

## Pubblicazione GitHub Pages
Carica tutto nella repository, poi vai su `Settings > Pages`, scegli branch `main` e folder `/root`.
