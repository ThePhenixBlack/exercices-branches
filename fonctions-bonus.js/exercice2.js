import n2words from "https://esm.sh/n2words"
function numberInLetter(number) 
{
    
    let a = (n2words(number,{lang:'fr'})) 
    return a
}
alert (numberInLetter(2876))
