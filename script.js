function verifyMessage(){
  let message = prompt("Enter the message to be verified: ");
  let messageLegitimacy = document.getElementById("result");

  if (message.includes("FR")){
        messageLegitimacy.textContent = " is legitimate. ";
  } else if (message.includes("FR") && message.includes("AI")){
        messageLegitimacy.textContent = " is legitimate. ";
  } else if (message.includes("AI")){
        messageLegitimacy.textContent = " is tampered with. ";
  } else if (message.includes("aI") || message.includes("Ai")){
        messageLegitimacy.textContent = " is tampered with. ";
  } else {
        messageLegitimacy.textContent = " is yet to be encoded. ";
  }

  document.getElementbyId('result').innerHTML = 'The message ' + '"' + message + '" ' + messageLegitimacy.textContent;
}
