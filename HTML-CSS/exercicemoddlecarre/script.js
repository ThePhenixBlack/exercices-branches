// Déclaration de la fonction "changerCouleur" qui prend un paramètre : "nouvelleCouleur"
function changerCouleur(nouvelleCouleur) {
  // On récupère l'élément HTML qui a pour id "carre"
  const paragraphe = document.getElementById("carre");
  
  // On change la couleur de fond (backgroundColor) de cet élément
  // en utilisant la couleur passée en paramètre
  paragraphe.style.backgroundColor = nouvelleCouleur;
}
