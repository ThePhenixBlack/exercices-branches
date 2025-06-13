let keyOwner = ["Jerem","Laure","Mathilde","Vi"]

function hasKey(firstname)
{
  if(firstname === keyOwner[0] || firstname === keyOwner[1] || firstname === keyOwner[2] || firstname === keyOwner[3] )
  {
    return true 
  }
  return false
}
console.log(hasKey("Jerem")) 