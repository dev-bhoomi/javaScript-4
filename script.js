const messageInput=document.getElementById("message-input");


function getMessage(){
    document.getElementById("message-output").innerHTML=messageInput.value;
    messageInput.value="";
}