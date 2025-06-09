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

function timeDay(time)
{
    if(time === 12 )
    {
        return "midi"
    }
    if(time < 12)
    {
        return "matin"
    }
    if(time > 12 && time <= 18 )
    {
        return "après-midi"
    }
    if(time > 18 )
    {
        return "soir"
    }
}

function hourDay(heure)
{
let a = timeDay(heure)
momentDay(a)
 }
hourDay(12)