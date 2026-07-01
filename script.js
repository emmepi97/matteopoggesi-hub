const APPS = [
{
 title: "Planlytics",
 description: "Pianificazione spedizioni",
 tags:["planning","operations"],
 url:"https://example.com"
},
{
 title: "Download figurini",
 description:"Scarico immagini articoli",
 tags:["utility"],
 url:"https://example.com"
}
];

const list = document.getElementById('appsList');
const count = document.getElementById('count');

function render(){
 count.innerText = APPS.length + " app";
 list.innerHTML = APPS.map(app => `
 <div class="app-row">
   <div class="app-left">
     <strong>${app.title}</strong>
     <p>${app.description}</p>
     <div class="tags">${app.tags.map(t=>`<span>${t}</span>`).join('')}</div>
   </div>
   <div class="actions">
     <a class="btn" href="${app.url}" target="_blank">Apri</a>
   </div>
 </div>
 `).join('');
}

render();

const input=document.getElementById('imgInput');
const img=document.getElementById('profileImg');
input.addEventListener('change',()=>img.src=input.value);
