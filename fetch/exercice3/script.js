let ul = document.getElementById('ulContainer')
async function fetchmovies(){
let response = await fetch("https://the-one-api.dev/v2/movie",
{
  method: "GET",
  headers: {
    "Content-Type": "application/json",
   "Authorization": "Bearer LzV9XXUTbLD4m7qI44je"
  }
});
let data = await response.json()
for(let i=0 ; i < data.docs.length ; i++)
{
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML= `${data.docs[i].name} a coûté ${data.docs[i].budgetInMillions} millions de dollars`
}
}
fetchmovies()
