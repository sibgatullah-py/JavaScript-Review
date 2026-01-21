const accountId = 12345
let accountEmail = 'sibgatullah@gmail.com'
var accountPassword = 'admin12345'
accountCity = "Gazipur"
let accountState;
// accountId = 2 // changes not allowed 

accountEmail = 'hc@hc.com'
accountPassword = 'ungabunga'
accountCity = 'Dhaka'

/*
Prefer not to use var 
because of issues in block scope and functional scope 
*/

console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])