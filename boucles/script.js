let nombre = prompt("Un nombre entre 0 et 10")
while(nombre<0 || nombre > 10)
    {
        alert("C'est une erreur, entrez un nombre entre 0 et 10")
        nombre=prompt("Un nombre entre 0 et 10")
    }

for(let i=nombre ; i>=0 ; i--){
    
    alert(i)
}
