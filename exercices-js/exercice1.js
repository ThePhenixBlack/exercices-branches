function momentDay(moment)
{
    if(moment === "matin")
    {
       console.log("J'ai trop hâte de continuer de coder !")
    }

    else if(moment === "midi")
    {
       console.log("J'ai faim, j'en ai marre de coder !")
    }

    else if(moment === "après-midi")
    {
       console.log("Tchao les copains !")
    }
    
    else if(moment === "soir")
    {
       console.log("ZzzZzz")
    }

    else {
        console.log("Ce n'est pas un moment de la journée")
    }

}
console.log(momentDay("matin"))
console.log(momentDay("midi"))
console.log(momentDay("après-midi"))
console.log(momentDay("soir"))
console.log(momentDay("bonjour"))


console.log(hourDay(11))