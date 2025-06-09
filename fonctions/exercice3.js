
function sendMessage(message, fromName, toName)
{
	console.log("From  " + fromName + " to  " + toName + " Message : " + message)
}
sendMessage("Je te quitte", "Mattéo" , "Anne")
sendMessage("Super on se voit mardi !", "Linda", "Marc")
sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");


let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
sendMessage(myMessage, myName, contactName)