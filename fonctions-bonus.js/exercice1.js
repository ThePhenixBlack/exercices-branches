

function createPrices(articleNumber)
{
   let array = []
    for(let i=0 ; i<articleNumber ; i++ )
    {
       array.push(Math.floor(Math.random()*10)+1)
    }
    return array
}
console.log(createPrices(9)) 