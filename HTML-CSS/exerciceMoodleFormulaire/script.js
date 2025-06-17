// On récupère l'élément <input> qui se trouve à l'intérieur de l'élément avec l'id "prenom"
let choice = document.querySelector('#prenom input');

// On récupère l'élément HTML qui a l'id "reponse"
// C'est dans cet élément qu'on affichera le message personnalisé
let message = document.getElementById('reponse')

// Fonction appelée quand on clique sur un bouton "Valider" par exemple
function valider(){
        // On modifie le contenu de l'élément #reponse pour afficher un message avec la valeur tapée
    message.innerText = `Bonjour, ${choice.value}`
}