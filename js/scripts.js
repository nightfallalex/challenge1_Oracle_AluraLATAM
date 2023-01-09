function encrypt(){ 

    document.querySelector("#warning").removeAttribute("style");
    var message = document.querySelector("#message").value;
    var default_output = document.querySelector("#default");
    var res_output = document.querySelector("#res");
    var output_message = document.querySelector("#output_message");

    if (message != ""){
        for(var i=0; i < message.length; i++){
            if(((message[i] < 'a') || (message[i] > 'z')) && (message[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((message.length == 1 && message == " ") || message.replace(/ /g, "") == ""){
                default_output.classList.remove("invisible");
                res_output.classList.add("invisible");
                return;
            }
        }

        default_output.classList.add("invisible");
        res_output.classList.remove("invisible");
        
        var encryptedText = message.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        
        output_message.value = encryptedText;
    }

    return;

}

function decrypt(){

    document.querySelector("#warning").removeAttribute("style");
    var message = document.querySelector("#message").value;
    var default_output = document.querySelector("#default");
    var res_output = document.querySelector("#res");
    var output_message = document.querySelector("#output_message");
    if (message != ""){
        for(var i=0; i < message.length; i++){
            if(((message[i] < 'a') || (message[i] > 'z')) && (message[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((message.length == 1 && message == " ") || message.replace(/ /g, "") == ""){
                default_output.classList.remove("invisible");
                res_output.classList.add("invisible");
                return;
            }
        }

        default_output.classList.add("invisible");
        res_output.classList.remove("invisible");
        
        var decryptedText = message.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

        output_message.value = decryptedText;
    }

    return;

}

function clipboard(){
    const output_message = document.querySelector("#output_message");
    navigator.clipboard.writeText(output_message.value);
}

const encryptBtn = document.querySelector('#btn-encryp');
const decryptBtn = document.querySelector('#btn-decrypt');
const copyBtn = document.querySelector('#btn-copy');

encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;
copyBtn.onclick = clipboard; 