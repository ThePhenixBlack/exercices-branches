const horoscope = [
  // Tableau contenant chaque signe et sa description
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

let divHoroscope = document.getElementById('horoscope'); // ✅ Récupération de la div cible

for (const item of horoscope) {
    // ✅ Création d'un élément <article> pour contenir chaque signe
    let article = document.createElement("article");
    divHoroscope.appendChild(article); // Ajout de l'article dans la div

    // ✅ Création d'un <h2> avec le nom du signe
    let h2 = document.createElement("h2");
    h2.innerText = item.sign;
    article.appendChild(h2); // Ajout dans l'article

    // ✅ Création d'un <p> avec la description
    let paragraph = document.createElement("p");
    paragraph.innerText = item.description;
    article.appendChild(paragraph); // Ajout dans l'article
}