module.exports = {
 
 httpWeb: function(doma) {
   var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  
   var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.fedger.io/v1/company/"+doma+"/funding/status?apikey=bef4fa9abab04ccccca609874424bb76", false);
   xhr.send();

   return xhr.responseText;   
 }

}