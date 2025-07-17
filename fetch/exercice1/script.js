

async function fetchOffers(i){
 
    let titres = document.getElementById('titre')
    let paragraphes = document.getElementById('paragraphe')

    titres.innerHTML = "Chargement des offres...";
    paragraphes.innerHTML = "";
    const response = await fetch('https://www.codepassport.dev/api/offers')
    const data = await response.json()

   
    titres.innerHTML= data[i].titre
    paragraphes.innerHTML= data[i].description
   

}
fetchOffers(7)
