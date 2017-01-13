var http = require('http');
var readline = require('readline');
var requestPromise = require('request-promise');
console.log('\nThe API returns the funding status of domain input\n');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a domain namme:  ', (domain) => {
    
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.fedger.io/v1/company/"+domain+"/funding/status?apikey=bef4fa9abab04ccccca609874424bb76", false);
xhr.send();

if (xhr.status === 200) 
{
	console.log(xhr.responseText.replace(/,/g, '\n'));
    rl.close();
}
else if(xhr.status === 404)
{
	console.log("Please Enter A Valid Domain");
    rl.close();
}
else
{
	console.log("Oops, Something went wrong, please try again later");
    rl.close();
}
});
