window.onload = function() {hideCopybtn()};

function hideCopybtn(){
    
    document.getElementById("gbtn1").style.visibility = "hidden";
}


    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
     
       }
       document.getElementById('pwd').innerText = result;      
       document.getElementById("gbtn1").style.visibility = "visible";
       
    }    
    function copyPwd() {

        
        var copyText = document.getElementById("pwd").innerText;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        
        /* Alert the copied text */
        alert("Copied to Clipboard: " + copyText);
      }