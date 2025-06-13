let Restaurant = {
    name: "MacDo",
    menus : ["Maxi Best Of","Happy Meal","Best Of","King","Hasard"]
   }
console.log(`${Restaurant.name} à ${Restaurant.menus.length} menus. Les voici :`)
for (let i=0 ; i< Restaurant.menus.length ; i++) 
{
    
    console.log(Restaurant.menus[i])
}

for (let i=0 ; i< Restaurant.menus.length ; i++) 
{
    
  if(data.products.rating > 3){
    array.push(data.products[i].tittle)
 array.push(data.products[i].description)
  array.push(data.products[i].rating)
  }
}
console.log(array)