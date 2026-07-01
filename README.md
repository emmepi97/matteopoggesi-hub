# GitHub Apps Hub - Cruscotto pubblico

Cruscotto statico pronto per GitHub Pages, pensato per raccogliere applicazioni pubbliche, strumenti digitali, utility e progetti personali.

## File inclusi

- `index.html` - struttura pagina, SEO, contatti e presentazione personale.
- `styles.css` - stile completo del cruscotto.
- `script.js` - elenco applicazioni, ricerca e filtro categoria.
- `assets/favicon.svg` - icona del sito.
- `assets/og-cover.svg` - immagine anteprima social.

## Come usarlo

1. Carica tutti i file in una nuova repository GitHub pubblica.
2. Vai su `Settings > Pages`.
3. In `Build and deployment`, scegli `Deploy from a branch`.
4. Seleziona branch `main` e folder `/root`.
5. Salva e attendi la pubblicazione.

## Dove modificare i link delle app

Apri `script.js` e modifica l'array `APPS`.

Esempio:

```js
{
  title: "Nome della tua app",
  description: "Descrizione breve della tua app.",
  category: "Processi",
  tags: ["lean", "processi", "dashboard"],
  url: "https://tuo-username.github.io/nome-repository/",
  source: "https://github.com/tuo-username/nome-repository"
}
```

## Dove modificare contatti e SEO

In `index.html` cerca:

- `tua-email@example.com`
- `tuo-username`
- `tuo-profilo-linkedin`
- `https://tuo-username.github.io/tuo-repository/`

Sostituisci questi placeholder con i tuoi dati reali.
