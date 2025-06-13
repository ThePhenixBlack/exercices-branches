function numberInLetter(number) 
{
    let name = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix"]
    if(number > 10){
        return "Beaucoup trop grand ! Redescend PETIT "
    }
    return name[number] 
}
console.log(numberInLetter(12))