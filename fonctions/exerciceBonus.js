  let farine = 250
  let lait = 500
  let oeufs = 3
  let sucre = 50
  
  
  
  function preparerPate(farine,lait,oeufs,sucre)
{
    return `Pate prête avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre`
}
console.log(preparerPate(farine,lait,oeufs,sucre)) 


function cuireCrepe(farine,lait,oeufs,sucre)
{
    return `Crêpe cuite avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre`
}
console.log(cuireCrepe(farine,lait,oeufs,sucre))