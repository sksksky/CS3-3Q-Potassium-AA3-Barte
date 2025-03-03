function verifyMessage(){
  let message = prompt("Enter the message to be verified: ");

  if (message.toUpperCase().indexOf("FR") >= 0 ){
    document.getElementById("result").innerHTML = `Your message "${message}" is legitimate!`;
  } else if (message.toUpperCase().indexOf("AI") >= 0 ){
    document.getElementById("result").innerHTML = `Your message "${message}" is fake!`;
  } else if (message.toUpperCase().indexOf("FR") >= 0 && message.toUpperCase().indexOf("AI") >= 0){
    document.getElementById("result").innerHTML = `Your message "${message}" is legitimate!`;
  } else if (message.indexOf("Ai") >= 0 || message.indexOf("aI") >= 0 ){
    document.getElementById("result").innerHTML = `Your message "${message}" is fake!`;
  } else {
    document.getElementById("result").innerHTML = `Your message "${message}" is yet to be encoded.`;
  }
}
