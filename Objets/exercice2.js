let maxiBestOf = {
    name: "maxiBestOf",
    sandwich : "CBO",
    price: 13
}
let happyMeal = {
    name: "happyMeal",
    sandwich: "Nuggets",
    price:5
}
let bestOf = {
    name:"bestOf",
    sandwich: "Big Mac",
    price: 7
}
let choiceUser = prompt()
let Restaurant = {
    name: "MacDo",
    menus : [maxiBestOf,happyMeal,bestOf,"King","Hasard"]

   }
for(let i = 0 ; i < Restaurant.menus.length ; i++)
{
    if(choiceUser === Restaurant.menus[i].name){
        alert (`Vous avez commandé un Menu ${choiceUser} vous avez le droit a un ${Restaurant.menus[i].sandwich} pour le prix de ${Restaurant.menus[i].price} euros`)
    }
  
}
