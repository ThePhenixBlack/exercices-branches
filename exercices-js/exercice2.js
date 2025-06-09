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
console.log(timeDay(6))
console.log(timeDay(12))
console.log(timeDay(18))
console.log(timeDay(19))