/* CONFIGURAZIONE PROFILO */
const PROFILE = {
  // Incolla qui un link pubblico alla tua immagine profilo, per esempio immagine LinkedIn, sito personale o GitHub avatar.
  imageUrl: "https://via.placeholder.com/300x300.png?text=MP"
};

/* CONFIGURAZIONE APP */
const APPS = [
  {title:"Nome applicazione 1",description:"Breve descrizione dell'applicazione e del problema che risolve.",category:"Processi",tags:["processi","dashboard","utility"],url:"https://tuo-username.github.io/nome-repository-1/",source:"https://github.com/tuo-username/nome-repository-1"},
  {title:"Nome applicazione 2",description:"Inserisci qui una descrizione chiara, utile anche in ottica SEO e condivisione.",category:"Pianificazione",tags:["planning","operations","tool"],url:"https://tuo-username.github.io/nome-repository-2/",source:"https://github.com/tuo-username/nome-repository-2"},
  {title:"Nome applicazione 3",description:"Spazio pronto per una web app pubblica disponibile su GitHub Pages.",category:"Automazione",tags:["automazione","produttività","webapp"],url:"https://tuo-username.github.io/nome-repository-3/",source:"https://github.com/tuo-username/nome-repository-3"},
  {title:"Nome applicazione 4",description:"Descrivi l'utilità, il target e il beneficio pratico dello strumento.",category:"Analisi",tags:["analisi","dati","kpi"],url:"https://tuo-username.github.io/nome-repository-4/",source:"https://github.com/tuo-username/nome-repository-4"},
  {title:"Nome applicazione 5",description:"Placeholder già pronto: sostituisci titolo, descrizione, URL e repository.",category:"Utility",tags:["strumento","github","app"],url:"https://tuo-username.github.io/nome-repository-5/",source:"https://github.com/tuo-username/nome-repository-5"},
  {title:"Nome applicazione 6",description:"Puoi aggiungere quante app vuoi duplicando un blocco nell'array APPS.",category:"Utility",tags:["template","pubblico","tool"],url:"https://tuo-username.github.io/nome-repository-6/",source:"https://github.com/tuo-username/nome-repository-6"}
];
const appsGrid=document.getElementById("appsGrid"),appsCount=document.getElementById("appsCount"),searchInput=document.getElementById("searchInput"),categoryFilter=document.getElementById("categoryFilter"),emptyState=document.getElementById("emptyState"),year=document.getElementById("year"),profilePhoto=document.getElementById("profilePhoto");
year.textContent=new Date().getFullYear();
profilePhoto.src=PROFILE.imageUrl;
function normalize(value){return String(value||"").toLowerCase().trim()}
function getCategories(){return ["all",...new Set(APPS.map(app=>app.category).filter(Boolean))]}
function populateCategories(){categoryFilter.innerHTML=getCategories().map(category=>`<option value="${category}">${category==="all"?"Tutte le categorie":category}</option>`).join("")}
function appMatchesSearch(app,query){if(!query)return true;return normalize([app.title,app.description,app.category,...(app.tags||[])].join(" ")).includes(query)}
function appMatchesCategory(app,category){return category==="all"||app.category===category}
function renderApps(){const query=normalize(searchInput.value),category=categoryFilter.value;const filteredApps=APPS.filter(app=>appMatchesSearch(app,query)&&appMatchesCategory(app,category));appsCount.textContent=filteredApps.length;emptyState.hidden=filteredApps.length>0;appsGrid.innerHTML=filteredApps.map((app,index)=>{const number=String(index+1).padStart(2,"0");const tags=(app.tags||[]).map(tag=>`<span>${tag}</span>`).join("");const sourceLink=app.source?`<a class="source-link" href="${app.source}" target="_blank" rel="noopener noreferrer" aria-label="Apri repository GitHub di ${app.title}">GH</a>`:"";return `<article class="app-card"><div class="app-card__top"><span class="app-card__number">${number}</span></div><div class="app-main"><h3>${app.title}</h3><p>${app.description}</p><div class="tags">${tags}</div></div><span class="status">Online</span><div class="card-actions"><a class="open-app" href="${app.url}" target="_blank" rel="noopener noreferrer">Apri app</a>${sourceLink}</div></article>`}).join("")}
populateCategories();renderApps();searchInput.addEventListener("input",renderApps);categoryFilter.addEventListener("change",renderApps);
