async function fetchOffers(){
    let response = await fetch("https://dummyjson.com/posts") 
    let data = await response.json()
    let array = []
    for(let i = 0 ; i < data.posts.length ; i++)
    {
        if(data.posts[i].views < 2000 )
        {
            console.log(data.posts[i].title)
            console.log(`Le nombre de vues est de ${data.posts[i].views}`)
            array.push(data.posts[i].views)
            array.sort(function(a,b)
        {
            return a-b
        })
       
        }
    }
     console.log(array)
}
fetchOffers()