// On récupère l'élément HTML avec l'id "result" et on le stocke dans la variable "number"
let number = document.getElementById('result')
// On initialise une variable "x" à 0 ; elle servira de compteur
let x = 0

// Fonction pour incrémenter (ajouter 1 à) la valeur de x
function add() {

    x++  // On augmente x de 1
    number.textContent = x // On met à jour le contenu de l'élément HTML pour afficher la nouvelle valeur de x


}

// Fonction pour décrémenter (enlever 1 à) la valeur de x
function remove() {
    x--   // On diminue x de 1
    number.textContent = x // On met à jour le contenu affiché
}

// Fonction pour réinitialiser la valeur de x à 0
function reset() {
    x = 0  // x est remis à 0
    number.textContent = x  // On affiche 0 dans l'élément HTML
}
// Fonction pour afficher l'élément "number" s’il est caché
function show() {
    number.style.display = "";  // On enlève la règle CSS "display: none", donc l’élément redevient visible
}
// Fonction pour cacher l'élément "number"
function hide() {
    number.style.display = "none"; // On applique "display: none", ce qui cache complètement l’élément

}