const div = document.getElementById("div");
const name1 = document.getElementById("name");
const hellomsg = document.getElementById("hello");
const titre = document.getElementById("titre")

function validate() {
  const nameUser = name1.value;
  document.location.href = "menu.html?name=" + encodeURIComponent(nameUser);
}

const urlParams = new URLSearchParams(window.location.search);
const nameUser = urlParams.get("name");

const p = document.createElement("p");
p.innerText = `Bonjour ${nameUser}`;
p.classList.add = "helloName"
hellomsg.appendChild(p);


async function commanderPlat(plat) {  
  console.log("plat", plat)
try {    
	const resp = await fetch("http://localhost:3000/orders", {      
		method: "POST",      
		headers: { "Content-Type": "application/json" },      
		body: JSON.stringify({        
		id: plat.id,        
		plate: plat.plate,        
		clientName: nameUser,      
		}),    
		});
    const data = await resp.json();    
    if (!data.ok) throw new Error(data.error);
    alert(`✅ ${data.message}`);  } 
    catch (e) 
    {    
    alert("❌ Impossible d'envoyer la commande.");    
    console.error(e);  }
    }

async function loadTables() {
  let response = await fetch("http://localhost:3000/menu");
  let tables = await response.json();

  tables.forEach(plat => {
     const divContainer = document.getElementById("div");
  
  let div = document.createElement("div")
  divContainer.appendChild(div)
  div.classList.add("div1");

  let plate = document.createElement("h1") 
  plate.innerText= plat.plate
  div.appendChild(plate)

  let img = document.createElement("p") 
  img.innerText= plat.image
  div.appendChild(img)
   img.classList.add("imgemot");

  let description = document.createElement("p") 
  description.innerText= plat.description
  div.appendChild(description)

  let commande = document.createElement("button")
  commande.addEventListener("click", () => commanderPlat(plat));    
  commande.innerText = "Commander"
  commande.classList.add("boutton")
  div.appendChild(commande)
  });

}

loadTables();

titre.addEventListener('click', () => {
   document.location.href = "index.html";
});

