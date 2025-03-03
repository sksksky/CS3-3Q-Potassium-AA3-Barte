function verifyMessage(){
  let message = prompt("Enter the message to be verified: ");

  if (message.toUppercase().indexOf("FR") >= 0 ){
    result = true;
    return document.getElementById("result").innerHTML = "Your message " ${message} " is legitimate!";
  } else if (message.toUppercase().indexOf("AI") >= 0 ){
    result = false;
    return document.getElementById("result").innerHTML = "Your message " ${message} " is fake!";
  } else if (message.toUppercase().indexOf("FR") >= 0 && message.toUppercase().indexOf("AI")){
    result = true;
    return document.getElementById("result").innerHTML = "Your message " ${message} " is legitimate!";
  } else if (message.indexOf("Ai") >= 0 || message.indexOf("aI" >= 0 ){
    result = true;
    return document.getElementById("result").innerHTML = "Your message " ${message} " is fake!";
  } else {
    result = false;
    return document.getElementById("result").innerHTML = "Your message " ${message} " is yet to be encoded.";
  }
}
