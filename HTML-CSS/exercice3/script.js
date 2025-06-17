// On sélectionne le premier élément <h1> de la page
const pageTitle = document.querySelector('h1')
// On affiche cet élément dans la console (pour vérification ou debug)
console.log(pageTitle)

// On sélectionne le bouton ayant l'id "newsletter"
const subscribeButton = document.querySelector('#newsletter')

// On crée une variable pour suivre si l'utilisateur a cliqué ou non
// Au départ, elle est à false (l'utilisateur n'a pas encore cliqué)
let userHasClicked = false

// On ajoute un écouteur d'événement sur le bouton :
// Quand l'utilisateur clique sur le bouton...
subscribeButton.addEventListener('click',() => {

// Si l'utilisateur avait déjà cliqué (désabonnement)
if(userHasClicked)
{
     // On remet la variable à false
    userHasClicked = false
    // On change le texte du bouton en "Subscribe"
    subscribeButton.innerText = "Subscribe"
} else { // Sinon, il vient de cliquer pour s’abonner
    // On met la variable à true
    userHasClicked = true
    // Et on change le texte du bouton en "UnSubscribe"
    subscribeButton.innerText = "UnSubscribe"
}
});


